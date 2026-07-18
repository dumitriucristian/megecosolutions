"use client";

import { useMemo, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getSiteContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  organization: string;
  position: string;
  country: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  requestPresentation: boolean;
  requestNda: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function fieldLabel(
  fields: ReturnType<typeof getSiteContent>["contact"]["fields"],
  name: string,
) {
  return fields.find((f) => f.name === name)?.label ?? name;
}

export function ContactForm({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const content = useMemo(() => getSiteContent(locale), [locale]);
  const { contact, ui } = content;

  const inquiryOptions: ReadonlyArray<string> = useMemo(() => {
    const field = contact.fields.find((f) => f.name === "inquiryType");
    if (!field) return [];
    return "options" in field ? field.options : [];
  }, [contact.fields]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>({
    fullName: "",
    organization: "",
    position: "",
    country: "",
    email: "",
    phone: "",
    inquiryType: inquiryOptions[0] ?? "",
    message: "",
    requestPresentation: false,
    requestNda: false,
  });

  function validate(next: FormState): FormErrors {
    const e: FormErrors = {};
    if (!next.fullName.trim()) e.fullName = ui.formRequired;
    if (!next.country.trim()) e.country = ui.formRequired;
    if (!next.email.trim()) e.email = ui.formRequired;
    else if (!isValidEmail(next.email)) e.email = ui.formInvalidEmail;
    if (!next.inquiryType.trim()) e.inquiryType = ui.formRequired;
    if (!next.message.trim()) e.message = ui.formRequired;
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(state);
    setErrors(e);
    setSubmitError(null);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(
          data?.error ||
            ui.formErrorGeneric.replace("{email}", content.site.primaryEmail),
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(ui.formErrorNetwork.replace("{email}", content.site.primaryEmail));
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={cn("border border-slate-200 bg-white p-8", className)}>
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">
          {ui.formSuccessTitle}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{ui.formSuccessBody}</p>
      </div>
    );
  }

  const presentationLabel = fieldLabel(contact.fields, "requestPresentation");
  const ndaLabel = fieldLabel(contact.fields, "requestNda");

  return (
    <form
      className={cn("border border-slate-200 bg-white p-8", className)}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label={fieldLabel(contact.fields, "fullName")}
          value={state.fullName}
          onChange={(v) => setState((s) => ({ ...s, fullName: v }))}
          error={errors.fullName}
        />
        <Field
          label={fieldLabel(contact.fields, "organization")}
          value={state.organization}
          onChange={(v) => setState((s) => ({ ...s, organization: v }))}
          error={errors.organization}
        />
        <Field
          label={fieldLabel(contact.fields, "position")}
          value={state.position}
          onChange={(v) => setState((s) => ({ ...s, position: v }))}
          error={errors.position}
        />
        <Field
          label={fieldLabel(contact.fields, "country")}
          value={state.country}
          onChange={(v) => setState((s) => ({ ...s, country: v }))}
          error={errors.country}
        />
        <Field
          label={fieldLabel(contact.fields, "email")}
          type="email"
          value={state.email}
          onChange={(v) => setState((s) => ({ ...s, email: v }))}
          error={errors.email}
        />
        <Field
          label={fieldLabel(contact.fields, "phone")}
          value={state.phone}
          onChange={(v) => setState((s) => ({ ...s, phone: v }))}
          error={errors.phone}
        />
        <SelectField
          label={fieldLabel(contact.fields, "inquiryType")}
          value={state.inquiryType}
          options={inquiryOptions}
          onChange={(v) => setState((s) => ({ ...s, inquiryType: v }))}
          error={errors.inquiryType}
          placeholder={ui.formSelectPlaceholder}
          className="md:col-span-2"
        />
        <TextAreaField
          label={fieldLabel(contact.fields, "message")}
          value={state.message}
          onChange={(v) => setState((s) => ({ ...s, message: v }))}
          error={errors.message}
          className="md:col-span-2"
        />
      </div>

      <div className="mt-6 space-y-3">
        <Checkbox
          checked={state.requestPresentation}
          onChange={(v) => setState((s) => ({ ...s, requestPresentation: v }))}
          label={presentationLabel}
        />
        <Checkbox
          checked={state.requestNda}
          onChange={(v) => setState((s) => ({ ...s, requestNda: v }))}
          label={ndaLabel}
        />
      </div>

      {submitError ? (
        <p className="mt-6 text-sm font-medium text-rose-600" role="alert">
          {submitError}{" "}
          <a
            href={`mailto:${content.site.primaryEmail}`}
            className="underline underline-offset-2 hover:text-rose-700"
          >
            {content.site.primaryEmail}
          </a>
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">{ui.formConfidentiality}</p>
        <Button type="submit" size="lg" className="h-11" disabled={submitting}>
          {submitting ? ui.formSending : ui.formSubmit}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
  error?: string;
  type?: string;
}) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="block">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-semibold text-slate-950">
          {label}
        </Label>
        {error ? <span className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-2 h-11 w-full bg-white px-4 text-sm text-slate-950",
          error
            ? "border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            : "border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100",
        )}
        aria-invalid={error ? true : undefined}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  error,
  placeholder,
  className,
}: {
  label: string;
  value: string;
  options: ReadonlyArray<string>;
  onChange: (next: string) => void;
  error?: string;
  placeholder: string;
  className?: string;
}) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={cn("block", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-semibold text-slate-950">
          {label}
        </Label>
        {error ? <span className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      <div className="mt-2">
        <Select value={value} onValueChange={(v) => onChange(v ?? "")}>
          <SelectTrigger
            id={id}
            className={cn(
              "h-11 w-full px-4",
              error
                ? "border-rose-300 focus-visible:border-rose-400 focus-visible:ring-rose-100"
                : "",
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  error,
  className,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
  error?: string;
  className?: string;
}) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={cn("block", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-semibold text-slate-950">
          {label}
        </Label>
        {error ? <span className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className={cn(
          "mt-2 w-full bg-white px-4 py-3 text-sm text-slate-950",
          error
            ? "border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            : "border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100",
        )}
        aria-invalid={error ? true : undefined}
      />
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="flex items-start gap-3 border border-slate-200 bg-slate-50 px-4 py-3">
      <ShadcnCheckbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onChange(v === true)}
        className="mt-1"
      />
      <Label htmlFor={id} className="cursor-pointer text-sm leading-6 text-slate-700">
        {label}
      </Label>
    </div>
  );
}

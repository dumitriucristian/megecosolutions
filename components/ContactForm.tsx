"use client";

import { useMemo, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
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
import { siteContent } from "@/content/siteContent";
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

export function ContactForm({ className }: { className?: string }) {
  const inquiryOptions: ReadonlyArray<string> = useMemo(() => {
    const field = siteContent.contact.fields.find((f) => f.name === "inquiryType");
    if (!field) return [];
    return "options" in field ? field.options : [];
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>({
    fullName: "",
    organization: "",
    position: "",
    country: "",
    email: "",
    phone: "",
    inquiryType: inquiryOptions[0] ?? "Public project",
    message: "",
    requestPresentation: false,
    requestNda: false,
  });

  function validate(next: FormState): FormErrors {
    const e: FormErrors = {};
    if (!next.fullName.trim()) e.fullName = "Required";
    if (!next.organization.trim()) e.organization = "Required";
    if (!next.position.trim()) e.position = "Required";
    if (!next.country.trim()) e.country = "Required";
    if (!next.email.trim()) e.email = "Required";
    else if (!isValidEmail(next.email)) e.email = "Enter a valid email";
    if (!next.inquiryType.trim()) e.inquiryType = "Required";
    if (!next.message.trim()) e.message = "Required";
    return e;
  }

  if (submitted) {
    return (
      <div className={cn("border border-slate-200 bg-white p-8", className)}>
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">
          Thanks — we’ve received your inquiry.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          For confidentiality, this demo form does not send data to a server yet. Please email us
          directly and we’ll respond promptly.
        </p>
        <div className="mt-6">
          <a
            href={`mailto:${siteContent.site.primaryEmail}`}
            className={cn(buttonVariants({ size: "lg" }), "h-11")}
          >
            Email {siteContent.site.primaryEmail}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      className={cn("border border-slate-200 bg-white p-8", className)}
      onSubmit={(ev) => {
        ev.preventDefault();
        const e = validate(state);
        setErrors(e);
        if (Object.keys(e).length === 0) setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full Name"
          value={state.fullName}
          onChange={(v) => setState((s) => ({ ...s, fullName: v }))}
          error={errors.fullName}
        />
        <Field
          label="Organization / Company"
          value={state.organization}
          onChange={(v) => setState((s) => ({ ...s, organization: v }))}
          error={errors.organization}
        />
        <Field
          label="Position / Title"
          value={state.position}
          onChange={(v) => setState((s) => ({ ...s, position: v }))}
          error={errors.position}
        />
        <Field
          label="Country"
          value={state.country}
          onChange={(v) => setState((s) => ({ ...s, country: v }))}
          error={errors.country}
        />
        <Field
          label="Corporate Email"
          type="email"
          value={state.email}
          onChange={(v) => setState((s) => ({ ...s, email: v }))}
          error={errors.email}
        />
        <Field
          label="Phone (optional)"
          value={state.phone}
          onChange={(v) => setState((s) => ({ ...s, phone: v }))}
          error={errors.phone}
        />
        <SelectField
          label="Type of Inquiry"
          value={state.inquiryType}
          options={inquiryOptions}
          onChange={(v) => setState((s) => ({ ...s, inquiryType: v }))}
          error={errors.inquiryType}
          className="md:col-span-2"
        />
        <TextAreaField
          label="Message"
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
          label="I would like to receive MEG EcoSolutions’ Corporate Presentation"
        />
        <Checkbox
          checked={state.requestNda}
          onChange={(v) => setState((s) => ({ ...s, requestNda: v }))}
          label="I would like to sign a Non-Disclosure Agreement (NDA) prior to the meeting"
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          All initial inquiries are treated with absolute confidentiality.
        </p>
        <Button type="submit" size="lg" className="h-11">
          Submit inquiry
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
  const id = `field-${label.replace(/\\s+/g, "-").toLowerCase()}`;
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
  className,
}: {
  label: string;
  value: string;
  options: ReadonlyArray<string>;
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
      <div className="mt-2">
        <Select value={value} onValueChange={(v) => onChange(v ?? "")}>
          <SelectTrigger
            id={id}
            className={cn(
              "h-11 w-full px-4",
              error ? "border-rose-300 focus-visible:border-rose-400 focus-visible:ring-rose-100" : "",
            )}
          >
            <SelectValue placeholder="Select an inquiry type" />
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


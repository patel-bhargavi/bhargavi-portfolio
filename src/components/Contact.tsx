import { useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { mailtoHref, submitContact, type ContactPayload } from "@/lib/contact";
import Reveal from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Add a short subject."),
  message: z.string().trim().min(20, "Share a little more about the project."),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "draft" | "error">("idle");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    setError("");

    if (values.website) {
      setStatus("sent");
      reset();
      return;
    }

    const payload: ContactPayload = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
    const result = await submitContact(payload);

    if (result.status === "error") {
      setStatus("error");
      setError(result.message);
      return;
    }

    setStatus(result.status);
    if (result.status === "sent") reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300/90">Contact</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a project in mind? Let’s build something great.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Freelance work, product teams, and full-time conversations are all welcome. Tell me what you are building and I will reply by email.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal className="space-y-3">
            <ContactLink icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactLink icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
            <div className="hover-card flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-violet-200">
                <MapPin size={16} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-zinc-500">Location</span>
                <span className="text-sm text-white">{profile.location}</span>
              </span>
            </div>
            <ContactLink icon={Github} label="GitHub" value="patel-bhargavi" href={profile.github} external />
            <ContactLink icon={Linkedin} label="LinkedIn" value="Bhargavi Patel" href={profile.linkedin} external />
            <a
              href={mailtoHref({ subject: "Resume request", message: "Hello Bhargavi, please send your resume." })}
              className="hover-btn inline-flex pt-2 text-sm font-medium text-violet-200 underline-offset-4 hover:underline"
            >
              Request resume by email
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input id="name" autoComplete="name" className={inputClass} {...register("name")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Subject" error={errors.subject?.message}>
                  <input id="subject" className={inputClass} {...register("subject")} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Project details" error={errors.message?.message}>
                  <textarea id="message" rows={6} className={`${inputClass} resize-y`} {...register("message")} />
                </Field>
              </div>
              <div hidden>
                <label htmlFor="website">Company website</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hover-btn rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white hover:bg-violet-400 disabled:cursor-wait disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-sm text-zinc-500" role="status" aria-live="polite">
                  {status === "sent" ? "Message sent. I will reply by email." : null}
                  {status === "draft" ? "Your email app should open with this message ready to send." : null}
                  {status === "error" ? error : null}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-300/60";

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm text-zinc-300">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="hover-card flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-violet-200">
        <Icon size={16} />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</span>
        <span className="text-sm text-white">{value}</span>
      </span>
    </a>
  );
}

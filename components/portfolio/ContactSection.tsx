"use client";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      setSending(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      toast.success("Message sent!", {
        description:
          "Thanks for reaching out. I'll get back to you as soon as I can.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Couldn't send message", {
        description: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-dashed border-border py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Contact — write back"
            title={<>Send a postcard.</>}
          >
            Open to internships, small freelance projects, and interesting
            conversations.
          </SectionHeader>
        </Reveal>
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <span className="eyebrow">Elsewhere</span>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Mail className="h-4 w-4 text-primary" />{" "}
                    jianrobiul7898@gmail.com
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="h-4 w-4 text-primary" /> Dhaka,
                    Bangladesh
                  </li>
                </ul>
              </div>
              <div className="divider-dashed" />
              <p className="font-display text-2xl italic leading-snug text-foreground/90">
                "The best correspondence is short, honest, and answered."
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="border border-border bg-card p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="eyebrow">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="mt-8 inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

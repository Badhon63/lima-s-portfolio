import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
        <span>(c) {new Date().getFullYear()} Lima — Field Note Edition</span>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          <a href="#" className="hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:hello@lima.dev" className="hover:text-primary" aria-label="Email"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

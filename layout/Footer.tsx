"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="font-headline font-bold text-primary text-xl mb-6 md:mb-0">
          Web Developer
        </div>
        <div className="text-on-surface-variant font-body text-sm tracking-wide mb-6 md:mb-0">
          © 2024 HanChen • Built with Zest
        </div>
        <div className="flex gap-8 text-on-surface-variant">
          <a
            className="hover:text-primary transition-all opacity-80 hover:opacity-100"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-primary transition-all opacity-80 hover:opacity-100"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-primary transition-all opacity-80 hover:opacity-100"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

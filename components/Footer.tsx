import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-white text-lg">{siteConfig.name}</span>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs">
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.socials.email}`} className="hover:text-white">
            E-mail
          </a>
          <a href="#" className="hover:text-white">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-white">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
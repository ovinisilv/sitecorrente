import { MessageCircle, Eye, CheckCircle2 } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-800/50">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            A partir de R${siteConfig.startingPrice}/mês • Sem fidelidade oculta
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {siteConfig.tagline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            {siteConfig.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all shadow-xl shadow-indigo-600/25 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              QUERO MEU SITE
            </a>
            <a
              href="#exemplos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-base transition-colors"
            >
              <Eye className="w-5 h-5" />
              VER EXEMPLOS
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Pronto em até 5 dias
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Hospedagem & SSL Inclusos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Suporte por WhatsApp
            </div>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-2 sm:p-4 backdrop-blur shadow-2xl">
            <div className="flex items-center gap-2 mb-3 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 h-5 bg-slate-800/80 rounded px-3 text-[11px] text-slate-400 flex items-center w-full max-w-xs">
                https://seunegocio.com.br
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-slate-800/80 bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
                alt="Demonstração do site em Desktop"
                className="w-full h-full object-cover opacity-90"
              />
              {/* Floating Mobile Phone Mockup */}
              <div className="absolute right-4 bottom-4 w-1/3 sm:w-1/4 aspect-[9/19] rounded-2xl border-4 border-slate-800 bg-slate-950 shadow-2xl overflow-hidden hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80"
                  alt="Demonstração em Celular"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
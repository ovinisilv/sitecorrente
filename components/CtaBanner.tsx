import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
          Pronto para colocar seu negócio na internet?
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Tenha um site profissional sem complicação e comece a receber mais clientes.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          QUERO MEU SITE
        </a>
      </div>
    </section>
  );
}
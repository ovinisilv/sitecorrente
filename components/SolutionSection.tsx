import { Check, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";

export function SolutionSection() {
  const inclusions = [
    "Site profissional e moderno",
    "Adaptado para celular (Responsivo)",
    "Botão direto para WhatsApp",
    "Mapa do Google Maps integrado",
    "Exibição completa de serviços",
    "Links para redes sociais",
    "Hospedagem inclusa",
    "Certificado de segurança SSL",
    "Manutenção contínua",
  ];

  return (
    <section id="solucao" className="py-20 bg-slate-950/50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Um site profissional, sem complicação.
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Nós entregamos uma solução completa para sua empresa estar bem representada na internet, sem dores de cabeça com hospedagem ou códigos.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              Quero meu site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
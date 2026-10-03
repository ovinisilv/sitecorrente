import { X, Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-950/50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Por que pagar milhares de reais por um site?
          </h2>
          <p className="text-slate-400 text-lg">
            Compare o modelo tradicional de desenvolvimento com o nosso modelo por assinatura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tradicional */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider text-xs">
              Site Tradicional
            </h3>
            <div className="text-3xl font-bold text-slate-300 mb-6">
              R$ 1.500+
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <X className="w-5 h-5 text-red-500/80 shrink-0" />
                Investimento inicial alto
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <X className="w-5 h-5 text-red-500/80 shrink-0" />
                Hospedagem contratada à parte
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <X className="w-5 h-5 text-red-500/80 shrink-0" />
                Manutenção paga por fora
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <X className="w-5 h-5 text-red-500/80 shrink-0" />
                Atualizações por conta do cliente
              </li>
            </ul>
          </div>

          {/* Assinatura */}
          <div className="bg-slate-900 border-2 border-indigo-500/50 rounded-2xl p-8 relative">
            <h3 className="text-lg font-bold text-indigo-400 mb-6 uppercase tracking-wider text-xs">
              Site por Assinatura
            </h3>
            <div className="text-3xl font-bold text-white mb-6">
              A partir de R$ 59<span className="text-sm font-normal text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                Sem grande investimento inicial
              </li>
              <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                Hospedagem segura inclusa
              </li>
              <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                Manutenção técnica inclusa
              </li>
              <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                Suporte contínuo via WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
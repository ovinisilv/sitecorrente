import { Check, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Planos transparentes
          </h2>
          <p className="text-slate-400 text-lg">
            Escolha o plano ideal para a fase atual do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between ${
                plan.popular
                  ? "bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10"
                  : "bg-slate-900/40 border border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  MAIS POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-slate-400 text-sm">R$</span>
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppLink(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
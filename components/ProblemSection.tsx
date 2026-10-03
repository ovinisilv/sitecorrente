import { Instagram, Search, ShieldAlert, Layers } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Search,
      title: "Google de fora",
      description:
        "Quem procura no Google por seus serviços não encontra o Instagram. Sem um site, você perde clientes prontos para comprar.",
    },
    {
      icon: ShieldAlert,
      title: "Falta de credibilidade",
      description:
        "Empresas sem site passam imagem amadora ou temporária. Um site institucional passa solidez e autoridade.",
    },
    {
      icon: Layers,
      title: "Informações dispersas",
      description:
        "No Instagram as informações ficam perdidas nos posts. No site, tudo (serviços, valores, endereço e contato) fica acessível em 1 clique.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seu negócio ainda depende apenas do Instagram?
          </h2>
          <p className="text-slate-400 text-lg">
            O Instagram é uma excelente rede social, mas dependurar 100% da sua empresa nele é um risco para o seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
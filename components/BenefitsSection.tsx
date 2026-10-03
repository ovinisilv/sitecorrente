import { ShieldCheck, Search, MessageSquare, Briefcase, Camera, Award } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    { icon: ShieldCheck, title: "Passe mais confiança", desc: "Transmita seriedade para clientes indecisos." },
    { icon: Search, title: "Seja encontrado no Google", desc: "Apareça para quem pesquisa por seus serviços." },
    { icon: MessageSquare, title: "Facilite o contato", desc: "Receba mensagens diretas no seu WhatsApp." },
    { icon: Briefcase, title: "Mostre seus serviços", desc: "Apresente tudo o que você oferece claramente." },
    { icon: Camera, title: "Apresente seus trabalhos", desc: "Galeria de fotos com seus melhores projetos." },
    { icon: Award, title: "Presença profissional", desc: "Sua marca no mesmo nível dos grandes concorrentes." },
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seu site trabalhando pelo seu negócio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="bg-slate-900/30 border border-slate-800 p-6 rounded-2xl">
                <Icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{b.title}</h3>
                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Você envia suas informações",
      description: "Preencha um formulário simples com seus dados, fotos e informações do seu negócio.",
    },
    {
      step: "02",
      title: "Nós montamos seu site",
      description: "Nossa equipe desenvolve a estrutura do seu site com visual profissional e moderno.",
    },
    {
      step: "03",
      title: "Seu site fica online",
      description: "Após sua aprovação, publicamos seu site e ele já fica pronto para receber clientes.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Como funciona
          </h2>
          <p className="text-indigo-400 font-medium">
            Você não precisa entender de programação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-900/30 border border-slate-800 rounded-2xl p-8"
            >
              <span className="text-5xl font-black text-indigo-500/20 mb-4 block">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
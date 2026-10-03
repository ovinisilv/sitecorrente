import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ExamplesSection() {
  return (
    <section id="exemplos" className="py-20 bg-slate-950/50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Exemplos de sites
          </h2>
          <p className="text-slate-400 text-lg">
            Veja modelos de sites desenvolvidos para diferentes nichos e segmentos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.examples.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 border border-slate-800">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
                >
                  Ver exemplo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
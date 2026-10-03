export const siteConfig = {
  name: "SiteCorrente",
  tagline: "Seu negócio merece um site profissional.",
  subheadline:
    "Tenha um site moderno, rápido e adaptado para celular sem precisar investir milhares de reais de uma vez.",
  whatsappNumber: "5555999931122", // Altere para o seu número com DDD e DDI
  whatsappDefaultMessage:
    "Olá! Vi o site de vocês e gostaria de saber mais sobre os sites por assinatura.",
  startingPrice: "79",
  socials: {
    instagram: "https://instagram.com/sitecorrente",
  },
  plans: [
    {
      id: "basico",
      name: "BÁSICO",
      price: "59",
      period: "/mês",
      description: "Ideal para quem está começando e precisa de presença online.",
      popular: false,
      features: [
        "Site profissional",
        "Responsivo para celular",
        "Hospedagem inclusa",
        "Certificado SSL (Segurança)",
        "Botão direto para WhatsApp",
      ],
      ctaText: "Contratar Básico",
      message: "Olá! Gostaria de contratar o plano BÁSICO de R$59/mês.",
    },
    {
      id: "profissional",
      name: "PROFISSIONAL",
      price: "99",
      period: "/mês",
      description: "O mais recomendado para negócios que querem destaque no Google.",
      popular: true,
      features: [
        "Tudo do plano Básico",
        "Integração Google Maps",
        "Galeria de fotos",
        "Formulário de contato",
        "SEO básico configurado",
        "Manutenção inclusa",
      ],
      ctaText: "Contratar Profissional",
      message: "Olá! Gostaria de contratar o plano PROFISSIONAL de R$99/mês.",
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "149",
      period: "/mês",
      description: "Para empresas que precisam de mais páginas e recursos avançados.",
      popular: false,
      features: [
        "Tudo do plano Profissional",
        "Múltiplas páginas",
        "Seção de Blog/Notícias",
        "Recursos adicionais personalizados",
        "Suporte prioritário",
      ],
      ctaText: "Contratar Premium",
      message: "Olá! Gostaria de contratar o plano PREMIUM de R$149/mês.",
    },
  ],
  examples: [
    {
      id: "arquitetura",
      category: "Arquitetura",
      title: "Studio Arq & Design",
      description: "Layout elegante focado em portfólio visual e projetos de alto padrão.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: "barbearia",
      category: "Barbearia",
      title: "Barber Shop Vintage",
      description: "Design moderno com foco em agendamentos pelo WhatsApp e tabela de serviços.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: "restaurante",
      category: "Restaurante",
      title: "Bistrô & Gastronomia",
      description: "Cardápio digital integrado com localização no mapa e reservas diretas.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: "liberal",
      category: "Profissional Liberal",
      title: "Dra. Elena Ramos - Odontologia",
      description: "Clean e higiênico, focado em autoridade, tratamentos e agendamentos rápidos.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ],
  faq: [
    {
      question: "Preciso pagar para criar o site?",
      answer:
        "Não há taxa de criação ou custo alto de desenvolvimento inicial. Você paga apenas a mensalidade do plano escolhido.",
    },
    {
      question: "Preciso saber programar?",
      answer:
        "Zero! Nós cuidamos de toda a parte técnica, desde a montagem até a colocação do site no ar.",
    },
    {
      question: "Vocês cuidam da hospedagem?",
      answer:
        "Sim, a hospedagem segura com certificado SSL já está 100% inclusa na sua assinatura mensal.",
    },
    {
      question: "Posso usar meu próprio domínio?",
      answer:
        "Com certeza. Se você já tiver um domínio (.com.br), configuramos para você. Caso não tenha, auxiliamos no registro.",
    },
    {
      question: "Posso alterar as informações depois?",
      answer:
        "Sim! Nossos planos incluem suporte para atualização de conteúdos, textos, fotos e telefones.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim, não exigimos fidelidade prévia compulsória. As condições gerais de cancelamento são informadas na adesão [Texto Provisório].",
    },
    {
      question: "Quanto tempo demora para ficar pronto?",
      answer:
        "Após o envio de todas as suas informações e imagens, seu site estará no ar em média de 3 a 5 dias úteis.",
    },
  ],
};

export function getWhatsAppLink(customMessage?: string) {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
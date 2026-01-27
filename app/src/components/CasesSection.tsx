import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, ArrowRight, Quote } from "lucide-react";

const cases = [
  {
    company: "E-commerce de Moda",
    segment: "Varejo",
    challenge: "Sistema legado lento e difícil de manter",
    solution: "Reconstrução completa com arquitetura moderna",
    results: [
      { icon: TrendingUp, value: "+340%", label: "Aumento nas vendas" },
      { icon: Clock, value: "3x", label: "Mais rápido" },
      { icon: DollarSign, value: "-60%", label: "Custos operacionais" },
    ],
    testimonial: "A equipe entregou além do esperado. O novo sistema transformou nosso negócio.",
    author: "João M., CEO",
  },
  {
    company: "Startup de Logística",
    segment: "Tecnologia",
    challenge: "Precisavam de um MVP em tempo recorde",
    solution: "Desenvolvimento ágil com entregas semanais",
    results: [
      { icon: Clock, value: "45 dias", label: "Tempo de entrega" },
      { icon: TrendingUp, value: "R$2M", label: "Captação após MVP" },
      { icon: DollarSign, value: "100%", label: "Escopo entregue" },
    ],
    testimonial: "Conseguimos levantar investimento graças ao MVP de qualidade que entregaram.",
    author: "Ana S., Fundadora",
  },
  {
    company: "Indústria Farmacêutica",
    segment: "Saúde",
    challenge: "Coleta manual de dados de 50+ fontes",
    solution: "Sistema de scraping automatizado",
    results: [
      { icon: Clock, value: "120h", label: "Economia mensal" },
      { icon: TrendingUp, value: "99.8%", label: "Precisão dos dados" },
      { icon: DollarSign, value: "-75%", label: "Custo de operação" },
    ],
    testimonial: "O que levava dias agora acontece em minutos. ROI em menos de 2 meses.",
    author: "Pedro L., Gerente de TI",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Cases de Sucesso
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            Resultados que
            <br />
            <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Números reais de projetos que transformaram negócios de nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.company}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {caseItem.segment}
                </span>
                <h3 className="font-display text-xl font-semibold mt-3 mb-2">
                  {caseItem.company}
                </h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Desafio:</strong> {caseItem.challenge}
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {caseItem.results.map((result, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-secondary/50">
                    <result.icon size={18} className="text-primary mx-auto mb-1" />
                    <div className="font-display text-lg font-bold text-foreground">
                      {result.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-auto pt-6 border-t border-border">
                <Quote size={20} className="text-primary/40 mb-2" />
                <p className="text-sm text-muted-foreground italic mb-3">
                  "{caseItem.testimonial}"
                </p>
                <p className="text-sm font-medium text-foreground">
                  {caseItem.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Quero resultados assim no meu projeto
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  HeartHandshake, 
  Wallet,
  Clock,
  FileCheck
} from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Velocidade de Entrega",
    description: "Entregas em tempo recorde sem comprometer qualidade. Metodologia ágil com sprints semanais.",
  },
  {
    icon: Shield,
    title: "Qualidade Técnica",
    description: "Código limpo, bem documentado e escalável. Seguimos as melhores práticas do mercado.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Próximo",
    description: "Comunicação constante e transparente. Você acompanha cada etapa do desenvolvimento.",
  },
  {
    icon: Wallet,
    title: "Preço Competitivo",
    description: "Melhor custo-benefício do mercado. Orçamento justo e sem surpresas.",
  },
  {
    icon: Clock,
    title: "Suporte Dedicado",
    description: "Não te abandonamos após a entrega. Suporte contínuo e manutenção garantida.",
  },
  {
    icon: FileCheck,
    title: "Documentação Completa",
    description: "Entregamos documentação técnica detalhada para você nunca ficar dependente.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Por que nos escolher
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Mais do que código,
              <br />
              <span className="text-gradient">parceria de verdade</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Não somos apenas desenvolvedores. Somos parceiros que entendem seu negócio 
              e trabalham para entregar soluções que realmente fazem diferença.
            </p>

            {/* Stats Highlight */}
            <div className="grid grid-cols-3 gap-6">
              <div className="stat-card p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="stat-card p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-3xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground">Devs na equipe</div>
              </div>
              <div className="stat-card p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Differentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                className="p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <diff.icon size={24} className="text-primary mb-3" />
                <h3 className="font-display font-semibold mb-2">{diff.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

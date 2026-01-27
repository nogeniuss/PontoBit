import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Bot, 
  Wrench, 
  Smartphone, 
  Globe,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sistemas do Zero",
    description: "Desenvolvimento completo de plataformas, dashboards, ERPs e sistemas personalizados para sua necessidade.",
    features: ["Arquitetura escalável", "Interface moderna", "Integração com APIs"],
  },
  {
    icon: Bot,
    title: "Automações & Scrapers",
    description: "Robôs de coleta de dados, automação de processos repetitivos e integração entre sistemas.",
    features: ["Coleta automatizada", "Processamento de dados", "Relatórios automáticos"],
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites institucionais e landing pages otimizadas para conversão com design profissional.",
    features: ["SEO otimizado", "Alta conversão", "Design responsivo"],
  },
  // {
  //   icon: Smartphone,
  //   title: "Aplicativos Mobile",
  //   description: "Apps nativos e híbridos para iOS e Android com experiência fluida.",
  //   features: ["React Native", "Performance nativa", "Publicação nas lojas"],
  // },
  {
    icon: Database,
    title: "APIs & Integrações",
    description: "Desenvolvimento de APIs robustas e integração com sistemas terceiros.",
    features: ["REST & GraphQL", "Documentação completa", "Alta disponibilidade"],
  },
  {
    icon: Wrench,
    title: "Melhorias & Manutenção",
    description: "Correções, otimizações e novas funcionalidades em sistemas existentes.",
    features: ["Refatoração", "Performance", "Novas features"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            Soluções sob medida para
            <br />
            <span className="text-gradient">cada desafio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Do projeto simples ao sistema complexo, entregamos qualidade em todas as frentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-6 rounded-2xl card-gradient border border-border hover:border-primary/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <service.icon size={24} className="text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2 mb-5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#orcamento"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Solicitar orçamento
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { number: "50+", label: "Projetos Entregues" },
  { number: "98%", label: "Clientes Satisfeitos" },
  { number: "24h", label: "Tempo de Resposta" },
];

const benefits = [
  "Entrega dentro do prazo garantido",
  "Suporte dedicado pós-entrega",
  "Código limpo e documentado",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
                <Users size={16} />
                Equipe Especializada em Desenvolvimento
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transformamos suas
              <br />
              <span className="text-gradient">ideias em software</span>
              <br />
              que funciona
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              De scrappers e automações a sistemas completos do zero. 
              <strong className="text-foreground"> Qualidade técnica, entrega rápida e preço justo.</strong>
            </motion.p>

            {/* Benefits List */}
            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8 h-14 text-base font-semibold"
                asChild
              >
                <a href="#orcamento" className="flex items-center gap-2">
                  <Zap size={20} />
                  Solicitar Orçamento Grátis
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary h-14 text-base"
                asChild
              >
                <a href="#cases" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Agendar uma Call
                  <ArrowRight size={18} />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats Cards */}
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Stats Card */}
            <div className="p-8 rounded-2xl card-gradient border border-border elevated-shadow">
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                Por que escolher nossa equipe?
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Resposta Garantida</div>
                  <div className="text-xs text-muted-foreground">
                    Respondemos seu contato em até 24 horas
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {["JM", "AS", "PL", "RF"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium text-sm">+50 clientes confiam em nós</div>
                  <div className="text-xs text-muted-foreground">
                    Empresas de diversos segmentos
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

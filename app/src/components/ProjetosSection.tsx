import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Layout, Shield, X, ExternalLink } from "lucide-react";

const projetos = [
  {
    title: "Gerador Automático de Relatórios com IA",
    segment: "Inteligência Artificial",
    icon: Brain,
    stack: ["Next.js", "OpenAI API", "PostgreSQL", "Redis", "PDF.js", "EmailJs", "Docker"],
    summary:
      "Recebe dados estruturados, processa via pipeline e gera relatórios em PDF com insights automáticos e recomendações — sem intervenção manual.",
    description:
      "Sistema que recebe dados estruturados via upload ou integração direta com fontes externas, processa tudo via pipeline de transformação e gera relatórios em PDF com insights automáticos, gráficos e recomendações — sem intervenção manual. O modelo recebe os dados já tokenizados e contextualizados via prompt dinâmico, garantindo análises consistentes mesmo com volumes grandes. Cache via Redis evita chamadas repetidas à API e mantém latência baixa.",
    results: [
      { value: "~40s", label: "Geração por relatório" },
      { value: "GPT-4o", label: "Modelo utilizado" },
      { value: "tokens", label: "Otimização de contexto" },
    ],
    link: "",
  },
  {
    title: "Plataforma de Agendamento com Pagamentos",
    segment: "Fullstack",
    icon: Layout,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Google Calendar API","Docker"],
    summary:
      "Profissionais expõem suas agendas em tempo real, clientes agendam e pagam diretamente pelo fluxo com sincronização bidirecional via Google Calendar.",
    description:
      "Plataforma completa onde profissionais expõem suas agendas em tempo real, clientes selecionam horários disponíveis e finalizam o pagamento diretamente pelo fluxo. Sincronização bidirecional com Google Calendar via webhooks — qualquer alteração feita fora da plataforma reflete instantaneamente. Pagamentos via Stripe com suporte a recorrência, estorno automático no caso de cancelamento e confirmação por email transacional. Painel do profissional com histórico de clientes, receita por período e métricas de ocupação.",
    results: [
      { value: "< 200ms", label: "Sincronização de agenda" },
      { value: "PCI DSS", label: "Conformidade Stripe" },
      { value: "webhooks", label: "Atualização em tempo real" },
    ],
    link: "",
  },
  {
    title: "Sistema Multi-Tenant com Autenticação e Autorização",
    segment: "Arquitetura",
    icon: Shield,
    stack: ["Node.js", "PostgreSQL", "Redis", "JWT", "Docker"],
    summary:
      "Múltiplas empresas compartilham a mesma infra com isolamento completo de dados via Row Level Security e permissões granulares por recurso.",
    description:
      "Arquitetura multi-tenant onde diversas empresas compartilham a mesma infra sem jamais ver dados umas das outras. Isolamento de dados no nível do banco com Row Level Security do PostgreSQL — sem necessidade de bancos separados por tenant. Autenticação via JWT com refresh token rotativo armazenado em Redis, expiração automática e invalidação por sessão. Sistema de permissões granular com níveis por recurso (admin, gerente, usuário) e controle de rate limiting por tenant pra evitar abuso. Toda a infra containerizada com Docker e orquestrada por scripts de deploy automático.",
    results: [
      { value: "RLS", label: "Isolamento no banco" },
      { value: "< 50ms", label: "Autenticação média" },
      { value: "granular", label: "Controle de permissões" },
    ],
    link: "",
  },
];

const Modal = ({ projeto, onClose }) => {
  const Icon = projeto.icon;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 rounded-2xl bg-background border border-border shadow-xl"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Icon size={22} className="text-primary" />
            </div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {projeto.segment}
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold mb-4">
            {projeto.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {projeto.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {projeto.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-muted-foreground bg-secondary/70 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {projeto.results.map((result, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-secondary/50">
                <div className="font-display text-lg font-bold text-foreground">
                  {result.value}
                </div>
                <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={projeto.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver Projeto
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjetosSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projetos" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Projetos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            Alguns dos projetos
            <br />
            <span className="text-gradient">que já desenvolvemos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma mostra do que foi feito, desde a arquitetura até a entrega final.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => {
            const Icon = projeto.icon;
            return (
              <motion.div
                key={projeto.title}
                onClick={() => setSelected(projeto)}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 flex flex-col cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {projeto.segment}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {projeto.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {projeto.summary}
                  </p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {projeto.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-muted-foreground bg-secondary/70 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {projeto.results.map((result, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-secondary/50">
                      <div className="font-display text-lg font-bold text-foreground">
                        {result.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal projeto={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default ProjetosSection;
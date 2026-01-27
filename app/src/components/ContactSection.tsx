import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const whatsappNumber = "5547991206552";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return (
    <section id="orcamento" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Vamos Conversar
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
            Solicite seu
            <br />
            <span className="text-gradient">orçamento gratuito</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conte-nos sobre seu projeto e receba uma proposta personalizada em até 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Escolha como prefere
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Atendemos você pelo canal que for mais conveniente. 
                Respondemos em até 24 horas.
              </p>
            </div>

            {/* Quick Contact Options */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#25D366]/20">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-0.5">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Resposta imediata</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/20">
                <Calendar size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-0.5">Agendar uma Call</h4>
                <p className="text-sm text-muted-foreground">30 min de consultoria grátis</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="pt-6 border-t border-border space-y-4">
              {/* <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground">contato@suaempresa.com</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground">+55 47 99120-6552</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="lg:col-span-3 space-y-5 p-8 rounded-2xl card-gradient border border-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-display text-xl font-semibold mb-2">
              Preencha o formulário
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Quanto mais detalhes, melhor conseguimos te ajudar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome *</label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-secondary/50 border-border focus:border-primary h-12"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-secondary/50 border-border focus:border-primary h-12"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <Input
                  type="text"
                  placeholder="Nome da empresa"
                  className="bg-secondary/50 border-border focus:border-primary h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="bg-secondary/50 border-border focus:border-primary h-12"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tipo de Projeto *</label>
              <select className="w-full h-12 px-3 rounded-md bg-secondary/50 border border-border focus:border-primary text-foreground">
                <option value="">Selecione uma opção</option>
                <option value="sistema">Sistema do Zero</option>
                <option value="automacao">Automação / Scraper</option>
                <option value="site">Site / Landing Page</option>
                <option value="app">Aplicativo Mobile</option>
                <option value="api">API / Integração</option>
                <option value="melhoria">Melhoria em Sistema Existente</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descreva seu projeto *</label>
              <Textarea
                placeholder="Conte-nos sobre seu projeto, objetivos e prazos..."
                rows={5}
                className="bg-secondary/50 border-border focus:border-primary resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect h-14 text-base font-semibold"
            >
              <Send size={18} className="mr-2" />
              Enviar Solicitação
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Respondemos em até 24 horas. Seus dados estão seguros.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

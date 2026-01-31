import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const SERVICE_ID = "service_je4i4np";
const TEMPLATE_ID = "template_6jtpaqa";
const PUBLIC_KEY = "ayBeRjpgswj496ZyF";

const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const whatsappNumber = "5547991206552";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const formData = new FormData(formRef.current);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company") || "",
        phone: formData.get("phone") || "",
        project_type: formData.get("project_type"),
        message: formData.get("message"),
      }, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

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

            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground">+55 47 99120-6552</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <div className="p-8 rounded-2xl card-gradient border border-border flex flex-col items-center justify-center text-center py-24">
                <div className="text-5xl mb-6">✉️</div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recebemos sua solicitação. Entramos em contato em até 24 horas.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                >
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="space-y-5 p-8 rounded-2xl card-gradient border border-border"
                onSubmit={handleSubmit}
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
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <Input
                      name="company"
                      type="text"
                      placeholder="Nome da empresa"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Projeto *</label>
                  <select
                    name="project_type"
                    className="w-full h-12 px-3 rounded-md bg-secondary/50 border border-border focus:border-primary text-foreground"
                    required
                    disabled={status === "sending"}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Sistema do Zero">Sistema do Zero</option>
                    <option value="Automação / Scraper">Automação / Scraper</option>
                    <option value="Site / Landing Page">Site / Landing Page</option>
                    <option value="Aplicativo Mobile">Aplicativo Mobile</option>
                    <option value="API / Integração">API / Integração</option>
                    <option value="Melhoria em Sistema Existente">Melhoria em Sistema Existente</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Descreva seu projeto *</label>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre seu projeto, objetivos e prazos..."
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">
                    Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect h-14 text-base font-semibold disabled:opacity-60"
                >
                  <Send size={18} className="mr-2" />
                  {status === "sending" ? "Enviando..." : "Enviar Solicitação"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Respondemos em até 24 horas. Seus dados estão seguros.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
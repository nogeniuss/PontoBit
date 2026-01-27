import { motion } from "framer-motion";
import { Linkedin, Instagram, MessageCircle, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold">
              <span className="text-foreground">Ponto</span>
              <span className="text-gradient">Bit</span>
            </span>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Transformamos ideias em software de qualidade. 
              Do projeto ao suporte, estamos com você em cada etapa.
            </p>
            
            {/* <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} className="text-muted-foreground" />
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Serviços", "Cases", "Diferenciais", "Orçamento"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Sistemas do Zero", "Automações", "Sites & Landing Pages", "Apps Mobile", "APIs"].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PontoBit. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao topo
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Code2, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-electric to-cyber">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
                Vibe Coding LATAM
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empoderando la próxima generación de desarrolladores latinoamericanos con educación interactiva, atractiva y práctica.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-electric/50 transition-colors hover-lift"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-electric transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-electric/50 transition-colors hover-lift"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-electric transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-electric/50 transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-electric transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-electric/50 transition-colors hover-lift"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-electric transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-electric transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#resources" className="text-muted-foreground hover:text-electric transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#game" className="text-muted-foreground hover:text-electric transition-colors">
                  Demo Interactivo
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                  Acerca de Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Vibe Coding LATAM. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500" /> para desarrolladores latinos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
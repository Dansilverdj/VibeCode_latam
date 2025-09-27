import { ArrowRight, Play, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coding.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vibe Coding Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-electric" />
            <span className="text-sm text-muted-foreground">Programa con estilo, aprende con pasión</span>
          </div>

          {/* Latin American Flags */}
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="text-2xl">🇲🇽</span>
            <span className="text-2xl">🇨🇴</span>
            <span className="text-2xl">🇨🇱</span>
            <span className="text-2xl">🇵🇪</span>
            <span className="text-2xl">🇦🇷</span>
            <span className="text-sm text-muted-foreground ml-4">Unidos por la tecnología</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bienvenido a{' '}
            <span className="bg-gradient-to-r from-electric via-cyber to-neon bg-clip-text text-transparent">
              Vibe Coding LATAM
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Domina el desarrollo web moderno con cursos interactivos, proyectos prácticos, y una comunidad que celebra la creatividad e innovación en código.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => scrollToSection('courses')}
              size="lg"
              className="bg-gradient-to-r from-electric to-cyber hover:from-electric/90 hover:to-cyber/90 text-white px-8 py-3 rounded-full hover-lift glow-blue group"
            >
              Comenzar a Aprender
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('game')}
              variant="outline"
              size="lg"
              className="border-electric/50 text-electric hover:bg-electric/10 px-8 py-3 rounded-full hover-lift group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Probar Demo Interactivo
            </Button>
          </div>

          {/* Discord Community Call-to-Action */}
          <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-border mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-2">¡Únete a nuestra comunidad!</h3>
                <p className="text-muted-foreground text-sm">
                  Conecta con otros desarrolladores latinos, comparte proyectos y aprende juntos
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 hover-lift whitespace-nowrap"
              >
                <a 
                  href="https://discord.gg/u6hEfHvW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Unirse a Discord
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric">500+</div>
              <div className="text-sm text-muted-foreground">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon">12</div>
              <div className="text-sm text-muted-foreground">Cursos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber">95%</div>
              <div className="text-sm text-muted-foreground">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyber/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-neon/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default Hero;
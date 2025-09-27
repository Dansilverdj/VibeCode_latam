import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import webCourseImage from '@/assets/course-web.jpg';
import reactCourseImage from '@/assets/course-react.jpg';
import pythonCourseImage from '@/assets/course-python.jpg';

const courses = [
  {
    id: 1,
    title: "Fundamentos de Desarrollo Web",
    description: "Domina HTML, CSS y JavaScript para crear sitios web responsivos e interactivos desde cero.",
    image: webCourseImage,
    duration: "8 semanas",
    students: "150+",
    level: "Principiante",
    color: "electric",
    highlights: [
      "Dominio de HTML5 y CSS3",
      "JavaScript Esencial",
      "Diseño Responsivo",
      "Proyectos del Mundo Real"
    ]
  },
  {
    id: 2,
    title: "React y Frontend Moderno",
    description: "Construye interfaces de usuario dinámicas con React, hooks y prácticas modernas de desarrollo frontend.",
    image: reactCourseImage,
    duration: "10 semanas",
    students: "200+",
    level: "Intermedio",
    color: "cyber",
    highlights: [
      "Componentes React y Hooks",
      "Gestión de Estado",
      "JavaScript Moderno (ES6+)",
      "Integración de APIs"
    ]
  },
  {
    id: 3,
    title: "Programación en Python",
    description: "Aprende Python desde lo básico hasta conceptos avanzados incluyendo estructuras de datos y desarrollo web.",
    image: pythonCourseImage,
    duration: "12 semanas",
    students: "180+",
    level: "Principiante", 
    color: "neon",
    highlights: [
      "Fundamentos de Python",
      "Estructuras de Datos y Algoritmos",
      "Desarrollo Web con Flask",
      "Automatización y Scripting"
    ]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rutas de aprendizaje cuidadosamente diseñadas para llevarte de principiante a desarrollador profesional
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="group bg-card border-border hover-lift hover:border-electric/50 transition-all duration-300 overflow-hidden cursor-code"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                  ${course.color === 'electric' ? 'bg-electric/20 text-electric' : 
                    course.color === 'cyber' ? 'bg-cyber/20 text-cyber' : 
                    'bg-neon/20 text-neon'}`}>
                  {course.level}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-electric transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>Certificado</span>
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Lo que aprenderás:</h4>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full
                          ${course.color === 'electric' ? 'bg-electric' : 
                            course.color === 'cyber' ? 'bg-cyber' : 
                            'bg-neon'}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enroll Button */}
                <Button 
                  className={`w-full mt-4 group/btn
                    ${course.color === 'electric' ? 'bg-electric hover:bg-electric/90' : 
                      course.color === 'cyber' ? 'bg-cyber hover:bg-cyber/90' : 
                      'bg-neon hover:bg-neon/90'} text-white`}
                >
                  Inscribirse Ahora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿No puedes decidir? Comienza con nuestro curso introductorio gratuito
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-electric/50 text-electric hover:bg-electric/10 hover-lift"
          >
            Explorar Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
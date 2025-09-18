import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Resources from '@/components/Resources';
import InteractiveGame from '@/components/InteractiveGame';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Resources />
        <InteractiveGame />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

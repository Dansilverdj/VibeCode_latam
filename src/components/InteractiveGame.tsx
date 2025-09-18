import { useState, useCallback } from 'react';
import { RefreshCw, Palette, Mouse, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const colors = [
  { name: 'Electric Blue', value: 'bg-electric', glow: 'glow-blue' },
  { name: 'Cyber Purple', value: 'bg-cyber', glow: 'glow-purple' },
  { name: 'Neon Green', value: 'bg-neon', glow: 'glow-neon' },
  { name: 'Tech Orange', value: 'bg-tech', glow: 'shadow-lg' },
];

const shapes = ['rounded-none', 'rounded-lg', 'rounded-full', 'rounded-3xl'];

const InteractiveGame = () => {
  const [activeColor, setActiveColor] = useState(0);
  const [activeShape, setActiveShape] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const [cursorMode, setCursorMode] = useState('default');

  const handleShapeClick = useCallback(() => {
    setIsAnimating(true);
    setScore(prev => prev + 10);
    setActiveColor((prev) => (prev + 1) % colors.length);
    setActiveShape((prev) => (prev + 1) % shapes.length);
    
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const resetGame = () => {
    setActiveColor(0);
    setActiveShape(1);
    setScore(0);
    setIsAnimating(false);
  };

  const toggleCursor = () => {
    setCursorMode(prev => prev === 'default' ? 'magic' : 'default');
  };

  return (
    <section id="game" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="bg-gradient-to-r from-cyber to-electric bg-clip-text text-transparent">Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of interactive coding! Click the shape to see colors and forms transform
          </p>
        </div>

        {/* Game Area */}
        <div className={`max-w-4xl mx-auto ${cursorMode === 'magic' ? 'cursor-magic' : ''}`}>
          {/* Game Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-electric">{score}</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber">{colors[activeColor].name}</div>
              <div className="text-sm text-muted-foreground">Current Color</div>
            </div>
          </div>

          {/* Interactive Shape */}
          <div className="flex justify-center mb-12">
            <div
              onClick={handleShapeClick}
              className={`
                w-48 h-48 cursor-pointer transition-all duration-300 
                ${colors[activeColor].value} 
                ${shapes[activeShape]} 
                ${colors[activeColor].glow}
                ${isAnimating ? 'scale-110 rotate-12' : 'hover:scale-105'}
                border-2 border-foreground/20
              `}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Zap 
                  className={`h-16 w-16 text-white transition-transform duration-300 
                    ${isAnimating ? 'rotate-180 scale-125' : ''}`} 
                />
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex justify-center space-x-4 mb-8">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setActiveColor(index)}
                className={`
                  w-12 h-12 rounded-full border-2 transition-all duration-300
                  ${color.value}
                  ${index === activeColor ? 'border-foreground scale-110' : 'border-foreground/30 hover:scale-105'}
                `}
                title={color.name}
              />
            ))}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              onClick={resetGame}
              variant="outline"
              size="lg"
              className="border-electric/50 text-electric hover:bg-electric/10 hover-lift"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Reset
            </Button>
            
            <Button
              onClick={handleShapeClick}
              size="lg"
              className="bg-gradient-to-r from-cyber to-electric hover:from-cyber/90 hover:to-electric/90 text-white hover-lift"
            >
              <Palette className="mr-2 h-5 w-5" />
              Transform
            </Button>
            
            <Button
              onClick={toggleCursor}
              variant="outline"
              size="lg"
              className="border-cyber/50 text-cyber hover:bg-cyber/10 hover-lift"
            >
              <Mouse className="mr-2 h-5 w-5" />
              Magic Cursor
            </Button>
          </div>

          {/* Instructions */}
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3">How to Play</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-electric rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <span>Click the shape to transform it</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyber rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <span>Select colors from the palette</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <span>Try the magic cursor mode!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGame;
import { useState, useCallback, useEffect, useRef } from 'react';
import { RefreshCw, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Game board dimensions
const BOARD_WIDTH = 19;
const BOARD_HEIGHT = 13;
const CELL_SIZE = 24;

// Game entities
type Position = { x: number; y: number };
type Ghost = { id: number; position: Position; direction: Position; color: string };

// Simple maze layout (1 = wall, 0 = dot, 2 = empty, 3 = pacman start)
const MAZE = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,1,1,1,0,1,1,1,2,1,2,1,1,1,0,1,1,1,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const InteractiveGame = () => {
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: 9, y: 9 });
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });
  const [dots, setDots] = useState<boolean[][]>(() => {
    return MAZE.map(row => row.map(cell => cell === 0));
  });
  const [ghosts, setGhosts] = useState<Ghost[]>([
    { id: 1, position: { x: 8, y: 6 }, direction: { x: 1, y: 0 }, color: 'bg-red-500' },
    { id: 2, position: { x: 10, y: 6 }, direction: { x: -1, y: 0 }, color: 'bg-blue-500' },
  ]);
  
  const gameRef = useRef<HTMLDivElement>(null);

  // Initialize pacman position
  useEffect(() => {
    for (let y = 0; y < MAZE.length; y++) {
      for (let x = 0; x < MAZE[y].length; x++) {
        if (MAZE[y][x] === 3) {
          setPacmanPos({ x, y });
          break;
        }
      }
    }
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
          setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameRunning]);

  // Game loop
  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      setPacmanPos(prevPos => {
        const newPos = {
          x: prevPos.x + direction.x,
          y: prevPos.y + direction.y
        };

        // Check bounds and walls
        if (
          newPos.y < 0 || newPos.y >= BOARD_HEIGHT ||
          newPos.x < 0 || newPos.x >= BOARD_WIDTH ||
          MAZE[newPos.y][newPos.x] === 1
        ) {
          return prevPos; // Don't move if hitting wall
        }

        // Check for dot collection
        setDots(prevDots => {
          if (prevDots[newPos.y][newPos.x]) {
            setScore(prev => prev + 10);
            const newDots = [...prevDots];
            newDots[newPos.y] = [...newDots[newPos.y]];
            newDots[newPos.y][newPos.x] = false;
            return newDots;
          }
          return prevDots;
        });

        return newPos;
      });

      // Move ghosts
      setGhosts(prevGhosts => 
        prevGhosts.map(ghost => {
          const directions = [
            { x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }
          ];
          
          // Simple AI: try to continue in current direction, otherwise pick random
          let newDir = ghost.direction;
          let newPos = {
            x: ghost.position.x + newDir.x,
            y: ghost.position.y + newDir.y
          };

          // If hitting wall, pick new random direction
          if (
            newPos.y < 0 || newPos.y >= BOARD_HEIGHT ||
            newPos.x < 0 || newPos.x >= BOARD_WIDTH ||
            MAZE[newPos.y][newPos.x] === 1
          ) {
            const validDirections = directions.filter(dir => {
              const testPos = {
                x: ghost.position.x + dir.x,
                y: ghost.position.y + dir.y
              };
              return (
                testPos.y >= 0 && testPos.y < BOARD_HEIGHT &&
                testPos.x >= 0 && testPos.x < BOARD_WIDTH &&
                MAZE[testPos.y][testPos.x] !== 1
              );
            });
            
            if (validDirections.length > 0) {
              newDir = validDirections[Math.floor(Math.random() * validDirections.length)];
              newPos = {
                x: ghost.position.x + newDir.x,
                y: ghost.position.y + newDir.y
              };
            } else {
              newPos = ghost.position;
            }
          }

          return {
            ...ghost,
            position: newPos,
            direction: newDir
          };
        })
      );
    }, 200);

    return () => clearInterval(gameLoop);
  }, [gameRunning, direction]);

  const startGame = () => {
    setGameRunning(true);
    if (gameRef.current) {
      gameRef.current.focus();
    }
  };

  const pauseGame = () => {
    setGameRunning(false);
  };

  const resetGame = () => {
    setGameRunning(false);
    setScore(0);
    setDirection({ x: 0, y: 0 });
    setPacmanPos({ x: 9, y: 9 });
    setDots(MAZE.map(row => row.map(cell => cell === 0)));
    setGhosts([
      { id: 1, position: { x: 8, y: 6 }, direction: { x: 1, y: 0 }, color: 'bg-red-500' },
      { id: 2, position: { x: 10, y: 6 }, direction: { x: -1, y: 0 }, color: 'bg-blue-500' },
    ]);
  };

  const renderCell = (x: number, y: number) => {
    const isPacman = pacmanPos.x === x && pacmanPos.y === y;
    const isGhost = ghosts.some(ghost => ghost.position.x === x && ghost.position.y === y);
    const ghost = ghosts.find(ghost => ghost.position.x === x && ghost.position.y === y);
    const isWall = MAZE[y][x] === 1;
    const hasDot = dots[y][x];

    return (
      <div
        key={`${x}-${y}`}
        className={`
          w-6 h-6 flex items-center justify-center relative
          ${isWall ? 'bg-electric border border-electric/50' : 'bg-secondary/20'}
        `}
      >
        {isPacman && (
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
        )}
        {isGhost && ghost && (
          <div className={`w-4 h-4 ${ghost.color} rounded-t-full`} />
        )}
        {hasDot && !isPacman && !isGhost && (
          <div className="w-1 h-1 bg-neon rounded-full" />
        )}
      </div>
    );
  };

  return (
    <section id="game" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pac-Man <span className="bg-gradient-to-r from-cyber to-electric bg-clip-text text-transparent">Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the classic arcade game! Use WASD or arrow keys to move and collect all the dots
          </p>
        </div>

        {/* Game Area */}
        <div className="max-w-4xl mx-auto">
          {/* Game Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-electric">{score}</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber">
                {dots.flat().filter(Boolean).length}
              </div>
              <div className="text-sm text-muted-foreground">Dots Left</div>
            </div>
          </div>

          {/* Game Board */}
          <div className="flex justify-center mb-8">
            <div
              ref={gameRef}
              tabIndex={0}
              className="inline-block p-4 bg-background/50 backdrop-blur-sm rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-electric/50"
              style={{
                width: BOARD_WIDTH * CELL_SIZE + 32,
                height: BOARD_HEIGHT * CELL_SIZE + 32
              }}
            >
              <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)` }}>
                {MAZE.map((row, y) =>
                  row.map((_, x) => renderCell(x, y))
                )}
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              onClick={resetGame}
              variant="outline"
              size="lg"
              className="border-electric/50 text-electric hover:bg-electric/10 hover-lift"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset
            </Button>
            
            {!gameRunning ? (
              <Button
                onClick={startGame}
                size="lg"
                className="bg-gradient-to-r from-cyber to-electric hover:from-cyber/90 hover:to-electric/90 text-white hover-lift"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Game
              </Button>
            ) : (
              <Button
                onClick={pauseGame}
                size="lg"
                className="bg-gradient-to-r from-cyber to-electric hover:from-cyber/90 hover:to-electric/90 text-white hover-lift"
              >
                <Pause className="mr-2 h-5 w-5" />
                Pause
              </Button>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3">How to Play</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-electric rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <span>Use WASD or arrow keys to move</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyber rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <span>Collect all the dots to win</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <span>Avoid the colorful ghosts!</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Click the game board to focus, then use your keyboard to play
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGame;
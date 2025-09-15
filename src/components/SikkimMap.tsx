import { useState, useEffect } from 'react';
import { Card } from './ui/card';

const SikkimMap = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const regions = [
    { id: 'gangtok', name: 'Gangtok', x: 160, y: 120, monastery: 'Rumtek Monastery' },
    { id: 'pelling', name: 'Pelling', x: 80, y: 140, monastery: 'Pemayangtse Monastery' },
    { id: 'yuksom', name: 'Yuksom', x: 60, y: 160, monastery: 'Tashiding Monastery' },
    { id: 'lachung', name: 'Lachung', x: 140, y: 60, monastery: 'Ancient Stupas' },
  ];

  const getPhaseDescription = () => {
    switch (animationPhase) {
      case 0: return "Sikkim's Sacred Soil";
      case 1: return "Ancient Paths Emerge";
      case 2: return "Monasteries Rise";
      case 3: return "Living Heritage";
      default: return "Sacred Land";
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/50">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient-saffron mb-2 wave-text">
              Interactive Map of Sikkim
            </h3>
            <p className="text-muted-foreground wave-float">
              {getPhaseDescription()}
            </p>
          </div>

          <div className="relative mx-auto" style={{ width: '300px', height: '250px' }}>
            {/* Animated background representing soil to culture transformation */}
            <div 
              className={`absolute inset-0 rounded-lg transition-all duration-2000 ${
                animationPhase === 0 ? 'bg-gradient-to-br from-amber-900 to-amber-700' :
                animationPhase === 1 ? 'bg-gradient-to-br from-amber-700 to-saffron-dark' :
                animationPhase === 2 ? 'bg-gradient-to-br from-saffron-dark to-primary' :
                'bg-gradient-monastery'
              }`}
              style={{
                opacity: 0.3,
                transform: `scale(${1 + animationPhase * 0.05})`,
              }}
            />

            {/* SVG Map of Sikkim */}
            <svg 
              viewBox="0 0 240 200" 
              className="absolute inset-0 w-full h-full"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
            >
              {/* Sikkim outline (simplified) */}
              <path
                d="M 50 80 Q 80 60 120 70 Q 160 75 180 100 Q 185 130 170 160 Q 140 180 100 175 Q 70 170 50 140 Q 45 110 50 80 Z"
                fill={`hsl(var(--card))`}
                stroke={`hsl(var(--primary))`}
                strokeWidth="2"
                className="transition-all duration-1000"
                style={{
                  fillOpacity: 0.8,
                  transform: `scale(${1 + Math.sin(Date.now() / 1000) * 0.02})`,
                }}
              />

              {/* Mountain ranges */}
              <path
                d="M 60 90 L 80 70 L 100 85 L 120 65 L 140 80 L 160 70 L 170 90"
                fill="none"
                stroke={`hsl(var(--accent))`}
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Rivers */}
              <path
                d="M 90 80 Q 110 100 130 120 Q 150 140 160 160"
                fill="none"
                stroke={`hsl(var(--primary))`}
                strokeWidth="1.5"
                opacity="0.5"
                className="animate-pulse"
              />
            </svg>

            {/* Interactive regions/monasteries */}
            {regions.map((region, index) => (
              <div
                key={region.id}
                className={`absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                  selectedRegion === region.id ? 'bg-primary scale-150' : 'bg-secondary hover:bg-primary'
                } shadow-warm hover:shadow-elegant`}
                style={{
                  left: `${region.x}px`,
                  top: `${region.y}px`,
                  animationDelay: `${index * 0.5}s`,
                }}
                onClick={() => setSelectedRegion(region.id)}
                onMouseEnter={() => setSelectedRegion(region.id)}
                onMouseLeave={() => setSelectedRegion(null)}
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
                
                {selectedRegion === region.id && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card rounded-lg p-3 shadow-elegant border border-border min-w-max z-10">
                    <p className="font-semibold text-foreground wave-text">{region.name}</p>
                    <p className="text-sm text-muted-foreground">{region.monastery}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-4 h-4 bg-primary rounded-full mx-auto" />
              <p className="text-sm text-muted-foreground">Major Monasteries</p>
            </div>
            <div className="space-y-2">
              <div className="w-4 h-4 bg-secondary rounded-full mx-auto" />
              <p className="text-sm text-muted-foreground">Cultural Sites</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SikkimMap;
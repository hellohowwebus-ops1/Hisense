import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, CheckCircle, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const chapters = [
    { title: '01. Echogenic Tracking', duration: '0:45', desc: 'Real-time ultrasound visualization of catheter tip micro-beads' },
    { title: '02. ICSI Micro-Injection', duration: '1:12', desc: 'Smooth zona pellucida penetration without cellular rupture' },
    { title: '03. Sterilization Cycle', duration: '1:40', desc: 'Triple fractionated vacuum steam penetration validation' },
    { title: '04. Surgical Ergonomics', duration: '2:15', desc: '360° indexing dial rotation and atraumatic tissue grasp' },
  ];

  // Procedural VFX Canvas Animation inside the video player
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    
    // Spawn bio-fluid particles
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.8 + 0.2,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#38bdf8' : '#60a5fa',
      });
    }

    const renderAnim = () => {
      animRef.current = requestAnimationFrame(renderAnim);
      time += 0.02;

      // Dark medical blue background
      ctx.fillStyle = '#050d18';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Medical scan lines
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw cellular membrane / device silhouette
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Pulsing Oocyte / Target Aura
      const radius = 90 + Math.sin(time * 2) * 4;
      const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius + 20);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      gradient.addColorStop(0.7, 'rgba(14, 165, 233, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 30, 0, Math.PI * 2);
      ctx.fill();

      // Outer zona membrane
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner nucleus
      ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.beginPath();
      ctx.arc(cx + Math.cos(time) * 12, cy + Math.sin(time) * 12, 28, 0, Math.PI * 2);
      ctx.fill();

      // Needle / Catheter entering from right
      const needleX = cx + 80 - (Math.sin(time * 1.5) * 20);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(canvas.width, cy);
      ctx.lineTo(needleX, cy);
      ctx.stroke();

      // Bevel tip
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(needleX, cy - 6);
      ctx.lineTo(needleX - 18, cy);
      ctx.lineTo(needleX, cy + 6);
      ctx.closePath();
      ctx.fill();

      // Floating bio particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // HUD crosshairs
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.lineWidth = 1;
      ctx.strokeRect(cx - 30, cy - 30, 60, 60);

      ctx.fillStyle = '#06b6d4';
      ctx.font = '10px monospace';
      ctx.fillText(`MICRON_CAL: ${(needleX).toFixed(1)}µm`, cx - 50, cy + 70);
      ctx.fillText(`STATUS: ULTRA-PRECISE ALIGNMENT`, cx - 80, cy - 70);
    };

    renderAnim();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [isOpen]);

  // Scrubber timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.8));
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#091728] border-2 border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-950/70 bg-[#06111e]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{title}</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  {category}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Hisense International • 3D Marketing Simulation & Clinical Product Reel
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            width={854}
            height={480}
            className="w-full h-full object-contain"
          />

          {/* Real-time Telemetry HUD Watermark */}
          <div className="absolute top-4 left-4 font-mono text-xs text-cyan-400 bg-black/60 px-3 py-1.5 rounded-lg border border-cyan-500/30 backdrop-blur-md">
            <div>CAM 01 : 4K MACRO LENS</div>
            <div className="text-[10px] text-emerald-400">FRAME SYNC: 60.0 FPS • MEA PASS</div>
          </div>

          <div className="absolute top-4 right-4 font-mono text-xs text-amber-400 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/30 backdrop-blur-md">
            HISENSE INTL • LAHORE
          </div>

          {/* Central Play/Pause Watermark when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-2xl transition transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Player Controls Bar */}
        <div className="px-6 py-3 bg-[#06111e] border-t border-cyan-950 flex flex-col gap-2">
          {/* Progress Scrubber */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="font-mono text-[11px] text-slate-400">
                01:24 / 03:45
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                HD MEDICAL SIMULATION
              </span>
            </div>
          </div>
        </div>

        {/* Chapters / Key Demonstration Steps */}
        <div className="p-4 bg-[#081525] border-t border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
            Clinical Demonstration Chapters
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chapters.map((chap, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveChapter(i);
                  setProgress(i * 25 + 5);
                  setIsPlaying(true);
                }}
                className={`p-2 rounded-xl text-left border transition text-xs ${
                  activeChapter === i
                    ? 'bg-cyan-950/80 border-cyan-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-cyan-300 text-[11px] flex items-center justify-between">
                  <span>{chap.title}</span>
                  <span className="font-mono text-[9px] text-slate-400">{chap.duration}</span>
                </div>
                <div className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                  {chap.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

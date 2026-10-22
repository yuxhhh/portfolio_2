import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: 'blockchain' | 'security' | 'ai' | 'cloud' | 'core';
  color: string;
}

interface Packet {
  fromNode: Node;
  toNode: Node;
  progress: number;
  speed: number;
  color: string;
}

export const InteractiveSystemVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeNodes: 14,
    latency: '14ms',
    throughput: '348 tx/s',
    gateStatus: 'ENFORCED'
  });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };

    window.addEventListener('resize', handleResize);

    // Initial architectural nodes
    const nodeConfigs: Array<{ label: string; type: Node['type']; color: string }> = [
      { label: 'EVM.RPC', type: 'blockchain', color: '#a3e635' },
      { label: 'SmartContract', type: 'blockchain', color: '#a3e635' },
      { label: 'TxMonitor', type: 'ai', color: '#38bdf8' },
      { label: 'IsolationForest', type: 'ai', color: '#38bdf8' },
      { label: 'SAST.Gate', type: 'security', color: '#34d399' },
      { label: 'TrivyScan', type: 'security', color: '#34d399' },
      { label: 'DAST.Proxy', type: 'security', color: '#fbbf24' },
      { label: 'Terraform.IaC', type: 'cloud', color: '#94a3b8' },
      { label: 'Docker.Hub', type: 'cloud', color: '#38bdf8' },
      { label: 'Auth.JWT', type: 'core', color: '#a3e635' },
      { label: 'Relational.DB', type: 'core', color: '#94a3b8' },
      { label: 'Ingest.Worker', type: 'core', color: '#a3e635' }
    ];

    const nodes: Node[] = nodeConfigs.map((cfg, index) => {
      const angle = (index / nodeConfigs.length) * Math.PI * 2;
      const radiusX = width * 0.36;
      const radiusY = height * 0.34;
      return {
        id: `node-${index}`,
        x: width / 2 + Math.cos(angle) * radiusX + (Math.random() - 0.5) * 40,
        y: height / 2 + Math.sin(angle) * radiusY + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: cfg.type === 'blockchain' || cfg.type === 'security' ? 5 : 4,
        label: cfg.label,
        type: cfg.type,
        color: cfg.color
      };
    });

    const packets: Packet[] = [];
    const maxPackets = 12;

    const spawnPacket = () => {
      if (packets.length >= maxPackets) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      let toIdx = Math.floor(Math.random() * nodes.length);
      while (toIdx === fromIdx) {
        toIdx = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        fromNode: nodes[fromIdx],
        toNode: nodes[toIdx],
        progress: 0,
        speed: 0.007 + Math.random() * 0.012,
        color: nodes[fromIdx].color
      });
    };

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      let found: string | null = null;
      for (const node of nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        if (Math.sqrt(dx * dx + dy * dy) < 22) {
          found = `${node.label} (${node.type.toUpperCase()})`;
          break;
        }
      }
      setHoveredNode(found);
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Periodically update telemetry metrics to simulate living system
    const telemetryInterval = setInterval(() => {
      setActiveTelemetry(prev => ({
        ...prev,
        latency: `${Math.floor(11 + Math.random() * 6)}ms`,
        throughput: `${Math.floor(320 + Math.random() * 50)} tx/s`
      }));
    }, 2800);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fine grid background on canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connection lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = 1 - dist / 150;
            ctx.strokeStyle = `rgba(163, 230, 53, ${alpha * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw packets
      if (!prefersReducedMotion) {
        if (Math.random() < 0.08) {
          spawnPacket();
        }

        for (let i = packets.length - 1; i >= 0; i--) {
          const p = packets[i];
          p.progress += p.speed;
          if (p.progress >= 1) {
            packets.splice(i, 1);
            continue;
          }

          const currX = p.fromNode.x + (p.toNode.x - p.fromNode.x) * p.progress;
          const currY = p.fromNode.y + (p.toNode.y - p.fromNode.y) * p.progress;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Packet glow trail
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          const trailLength = 0.06;
          const prevProgress = Math.max(0, p.progress - trailLength);
          const prevX = p.fromNode.x + (p.toNode.x - p.fromNode.x) * prevProgress;
          const prevY = p.fromNode.y + (p.toNode.y - p.fromNode.y) * prevProgress;
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(currX, currY);
          ctx.stroke();
        }
      }

      // Draw nodes and labels
      for (const node of nodes) {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off boundary
          if (node.x < 30 || node.x > width - 30) node.vx *= -1;
          if (node.y < 30 || node.y > height - 30) node.vy *= -1;

          // Mouse subtle repulsion/attraction
          const mdx = node.x - mouseX;
          const mdy = node.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 70 && mdist > 0) {
            node.x += (mdx / mdist) * 0.8;
            node.y += (mdy / mdist) * 0.8;
          }
        }

        const isHovered = hoveredNode && hoveredNode.includes(node.label);

        // Node Glow Halo
        ctx.fillStyle = isHovered ? 'rgba(163, 230, 53, 0.35)' : 'rgba(163, 230, 53, 0.06)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (isHovered ? 8 : 4), 0, Math.PI * 2);
        ctx.fill();

        // Node Body
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(241, 245, 249, 0.75)';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y - node.radius - 6);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      clearInterval(telemetryInterval);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-visual-card" ref={containerRef}>
      <div className="canvas-terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span style={{ marginLeft: 6, fontWeight: 600 }}>SYSTEM ARCHITECTURE GRAPH</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#a3e635' }}>
          <Terminal size={12} />
          <span>LIVE TELEMETRY</span>
        </div>
      </div>

      <div className="canvas-container">
        <canvas ref={canvasRef} className="canvas-element" />
      </div>

      <div className="canvas-legend">
        <div className="canvas-legend-items">
          <span className="legend-tag">
            <span className="legend-tag-dot" style={{ background: '#a3e635' }} />
            <span>Blockchain / Core</span>
          </span>
          <span className="legend-tag">
            <span className="legend-tag-dot" style={{ background: '#38bdf8' }} />
            <span>AI / Data</span>
          </span>
          <span className="legend-tag">
            <span className="legend-tag-dot" style={{ background: '#34d399' }} />
            <span>DevSecOps</span>
          </span>
        </div>
        <div>
          {hoveredNode ? (
            <span style={{ color: '#a3e635', fontWeight: 600 }}>{hoveredNode}</span>
          ) : (
            <span>Latency: {activeTelemetry.latency} • {activeTelemetry.throughput}</span>
          )}
        </div>
      </div>
    </div>
  );
};

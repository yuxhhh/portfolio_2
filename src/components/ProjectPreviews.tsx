import React from 'react';
import { 
  Activity, ShieldCheck, GitBranch, Lock, DollarSign, 
  Users, Video, ArrowRightLeft, Thermometer, MessageSquare, 
  CheckCircle2, Terminal
} from 'lucide-react';

interface PreviewProps {
  type: string;
}

export const ProjectPreviews: React.FC<PreviewProps> = ({ type }) => {
  switch (type) {
    case 'transaction-monitor':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Activity size={13} color="#a3e635" />
              <span>EVM.MONITOR — BLOCK #21498112</span>
            </div>
            <span style={{ color: '#a3e635' }}>RPC: SYNCED</span>
          </div>
          <div className="preview-body">
            <div className="tm-radar">
              <div className="tm-metric-row">
                <div className="tm-metric-box">
                  <div className="tm-metric-val">14,290</div>
                  <div className="tm-metric-lbl">INGESTED TX</div>
                </div>
                <div className="tm-metric-box">
                  <div className="tm-metric-val high-risk">3</div>
                  <div className="tm-metric-lbl">HIGH RISK ALERTS</div>
                </div>
                <div className="tm-metric-box">
                  <div className="tm-metric-val safe">99.8%</div>
                  <div className="tm-metric-lbl">ISOLATION ACCURACY</div>
                </div>
              </div>
              <div className="tm-stream">
                <div className="tm-tx-item">
                  <span className="tm-tx-hash">0x8f2a...c091 (42.5 ETH)</span>
                  <span className="tm-tx-score flagged">RISK 0.92 — SUDDEN SPIKE</span>
                </div>
                <div className="tm-tx-item">
                  <span className="tm-tx-hash">0x14b9...e2d4 (0.8 ETH)</span>
                  <span className="tm-tx-score normal">RISK 0.08 — NORMAL</span>
                </div>
                <div className="tm-tx-item">
                  <span className="tm-tx-hash">0x7d28...98ae (1.2 ETH)</span>
                  <span className="tm-tx-score normal">RISK 0.12 — NORMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pipeline-visual':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <GitBranch size={13} color="#a3e635" />
              <span>DEVSECOPS PIPELINE — RUN #482</span>
            </div>
            <span style={{ color: '#34d399' }}>ALL GATES PASSED</span>
          </div>
          <div className="preview-body">
            <div className="pipe-flow">
              <div className="pipe-step">
                <div className="pipe-node passed"><CheckCircle2 size={16} /></div>
                <span className="pipe-label">Commit</span>
              </div>
              <div className="pipe-connector" />
              <div className="pipe-step">
                <div className="pipe-node passed"><CheckCircle2 size={16} /></div>
                <span className="pipe-label">SonarQube</span>
              </div>
              <div className="pipe-connector" />
              <div className="pipe-step">
                <div className="pipe-node passed"><CheckCircle2 size={16} /></div>
                <span className="pipe-label">Trivy</span>
              </div>
              <div className="pipe-connector" />
              <div className="pipe-step">
                <div className="pipe-node passed"><CheckCircle2 size={16} /></div>
                <span className="pipe-label">Terraform</span>
              </div>
              <div className="pipe-connector" />
              <div className="pipe-step">
                <div className="pipe-node passed"><CheckCircle2 size={16} /></div>
                <span className="pipe-label">OWASP ZAP</span>
              </div>
            </div>
            <div className="pipe-audit-box">
              <span>Security Policy: ZERO CRITICAL CVEs</span>
              <span style={{ color: '#a3e635' }}>Gate Status: APPROVED</span>
            </div>
          </div>
        </div>
      );

    case 'security-audit':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <ShieldCheck size={13} color="#38bdf8" />
              <span>SECURITY AUDIT — P2P LENDING ENGINE</span>
            </div>
            <span style={{ color: '#38bdf8' }}>REMEDIATION VERIFIED</span>
          </div>
          <div className="preview-body">
            <div className="sec-matrix">
              <div className="sec-row critical">
                <span>API-01: BOLA / IDOR on Loan Patch</span>
                <span style={{ color: '#f87171' }}>REMEDIATED (Scoped Middleware)</span>
              </div>
              <div className="sec-row high">
                <span>AUTH-02: JWT Token Expiry & Claims</span>
                <span style={{ color: '#fbbf24' }}>HARDENED (15m Rotation)</span>
              </div>
              <div className="sec-row passed">
                <span>CRYPTO-03: Passwords & Data at Rest</span>
                <span style={{ color: '#34d399' }}>PASSED (bcrypt Rounds: 12)</span>
              </div>
              <div className="sec-row passed">
                <span>INJECT-04: Parameterized Queries</span>
                <span style={{ color: '#34d399' }}>PASSED (Zero SQLi Detected)</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'quantum-voting':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Lock size={13} color="#a3e635" />
              <span>BB84 QUANTUM KEY DISTRIBUTION SIMULATION</span>
            </div>
            <span style={{ color: '#a3e635' }}>CHANNEL: SECURE</span>
          </div>
          <div className="preview-body">
            <div className="quantum-state-box">
              <div className="polarization-grid">
                <div className="state-item">Basis: + (|0⟩)</div>
                <div className="state-item">Basis: × (|+⟩)</div>
                <div className="state-item">Basis: + (|1⟩)</div>
                <div className="state-item">Basis: × (|-⟩)</div>
              </div>
              <div className="qber-meter">
                <span>Quantum Bit Error Rate (QBER):</span>
                <span style={{ color: '#a3e635', fontWeight: 700 }}>1.8% (Threshold: &lt; 11%)</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center' }}>
                Eavesdropping Detection: Negative • Chained Ballot Root: 0x9e12...b5a7
              </div>
            </div>
          </div>
        </div>
      );

    case 'expense-tracker':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <DollarSign size={13} color="#a3e635" />
              <span>FINANCIAL TELEMETRY — MONTHLY SUMMARY</span>
            </div>
            <span>TOTAL: $1,420</span>
          </div>
          <div className="preview-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontFamily: 'var(--font-mono)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 4 }}>
                  <span style={{ color: '#94a3b8' }}>Infrastructure & Tools</span>
                  <span style={{ color: '#a3e635' }}>$340 (24%)</span>
                </div>
                <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: '24%', height: '100%', background: '#a3e635' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 4 }}>
                  <span style={{ color: '#94a3b8' }}>Academic & Certifications</span>
                  <span style={{ color: '#38bdf8' }}>$480 (34%)</span>
                </div>
                <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: '34%', height: '100%', background: '#38bdf8' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 4 }}>
                  <span style={{ color: '#94a3b8' }}>Living & Hardware</span>
                  <span style={{ color: '#fbbf24' }}>$600 (42%)</span>
                </div>
                <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: '42%', height: '100%', background: '#fbbf24' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'attendance-system':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Users size={13} color="#a3e635" />
              <span>ACADEMIC ATTENDANCE MONITOR</span>
            </div>
            <span style={{ color: '#34d399' }}>ELIGIBLE: &gt;75%</span>
          </div>
          <div className="preview-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginBottom: '0.8rem' }}>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#a3e635' }}>88.5%</div>
                <div style={{ color: '#64748b', fontSize: '0.7rem' }}>OVERALL ATTENDANCE</div>
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>24 / 27</div>
                <div style={{ color: '#64748b', fontSize: '0.7rem' }}>WEEKS COMPLETED</div>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: 4 }}>
              Distributed Systems: 92% • Network Security: 86% • Cloud: 88%
            </div>
          </div>
        </div>
      );

    case 'summarizer':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Video size={13} color="#38bdf8" />
              <span>LLM LECTURE SUMMARIZER</span>
            </div>
            <span style={{ color: '#38bdf8' }}>CHUNKS: 8</span>
          </div>
          <div className="preview-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8' }}>
            <div style={{ color: '#a3e635', marginBottom: 4, fontWeight: 600 }}>[00:14:20] KEY TAKEAWAY:</div>
            <div style={{ lineHeight: 1.5, background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 4 }}>
              "Byzantine Fault Tolerance requires at least 3f + 1 nodes to reach consensus in asynchronous environments."
            </div>
          </div>
        </div>
      );

    case 'skillswap':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <ArrowRightLeft size={13} color="#a3e635" />
              <span>SKILL EXCHANGE MATCH ENGINE</span>
            </div>
            <span style={{ color: '#a3e635' }}>MATCH: 94%</span>
          </div>
          <div className="preview-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: 4 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.68rem' }}>OFFERING</div>
                <div style={{ color: '#a3e635', fontWeight: 600 }}>Rust Systems & Concurrency</div>
              </div>
              <ArrowRightLeft size={16} style={{ alignSelf: 'center', color: '#94a3b8' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#64748b', fontSize: '0.68rem' }}>WANTING TO LEARN</div>
                <div style={{ color: '#38bdf8', fontWeight: 600 }}>React UI Design Systems</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'smart-fridge':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Thermometer size={13} color="#34d399" />
              <span>SMART APPLIANCE TELEMETRY</span>
            </div>
            <span>TEMP: 3.6°C</span>
          </div>
          <div className="preview-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: 4 }}>
                <div style={{ color: '#64748b', fontSize: '0.68rem' }}>INVENTORY ITEMS</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>28 Tracked</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: 4 }}>
                <div style={{ color: '#64748b', fontSize: '0.68rem' }}>EXPIRING SOON</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fbbf24' }}>2 Items (&lt;48h)</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'expresschat':
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <MessageSquare size={13} color="#38bdf8" />
              <span>#SYSTEMS-ARCH • SECURE CHANNEL</span>
            </div>
            <span style={{ color: '#38bdf8' }}>AI COPILOT: ACTIVE</span>
          </div>
          <div className="preview-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ color: '#94a3b8' }}>
                <span style={{ color: '#a3e635' }}>@piyush:</span> /summarize-deployment
              </div>
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', borderLeft: '2px solid #38bdf8', padding: '0.45rem', borderRadius: '0 4px 4px 0', color: '#f1f5f9' }}>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>AI Bot:</span> SonarQube scan clean, Trivy report attached, ready for staging release.
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="preview-container">
          <div className="preview-bar">
            <div className="preview-bar-title">
              <Terminal size={13} color="#a3e635" />
              <span>PROJECT PREVIEW</span>
            </div>
          </div>
          <div className="preview-body" style={{ alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            System Architecture Preview
          </div>
        </div>
      );
  }
};

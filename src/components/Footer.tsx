import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 relative overflow-hidden border-t border-slate-800">
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.5) 50%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <div className="flex items-center gap-3">
              <img
                src="/3d_lll.png"
                alt="3D Transify"
                className="h-10 w-auto"
              />
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} 3Dtransify
              </span>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <a
                href="mailto:info@3d-transify.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Mail size={16} className="group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
                <span>info@3d-transify.com</span>
              </a>

              <span className="text-gray-500">Nasr City, Cairo</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-md" style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(251, 146, 60, 0.08) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
              <span className="text-xs text-gray-400">Authorized Partner</span>
              <span className="text-xs text-cyan-400 font-medium">Scantech</span>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/omar-zaher-4812717a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors group text-xs"
          >
            <Linkedin size={14} className="group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
            <span>Website designed by Omar Zaher</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, Target, Users, Award, Globe2, Sparkles, Shield } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Metrology-grade accuracy in every solution we deliver. No compromises, no shortcuts.',
      color: 'cyan'
    },
    {
      icon: Sparkles,
      title: 'Innovation First',
      description: 'Leading the digital transformation with cutting-edge technology and forward-thinking solutions.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Long-term relationships built on reliability, expertise, and unwavering support.',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 pt-24">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(251, 146, 60)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(234, 88, 12)" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cyanGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(8, 145, 178)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(14, 116, 144)" stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path d="M 0,150 Q 250,100 500,150 T 1000,200 L 1000,0 L 0,0 Z" fill="url(#orangeGrad)" filter="url(#glow)">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M 0,150 Q 250,100 500,150 T 1000,200 L 1000,0 L 0,0 Z;
                        M 0,100 Q 250,150 500,100 T 1000,150 L 1000,0 L 0,0 Z;
                        M 0,150 Q 250,100 500,150 T 1000,200 L 1000,0 L 0,0 Z" />
            </path>

            <path d="M 0,250 Q 250,200 500,250 T 1000,300 L 1000,0 L 0,0 Z" fill="url(#cyanGrad)" filter="url(#glow)">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M 0,250 Q 250,200 500,250 T 1000,300 L 1000,0 L 0,0 Z;
                        M 0,200 Q 250,250 500,200 T 1000,250 L 1000,0 L 0,0 Z;
                        M 0,250 Q 250,200 500,250 T 1000,300 L 1000,0 L 0,0 Z" />
            </path>

            <path d="M 0,600 Q 250,500 500,550 T 1000,500 L 1000,600 L 0,600 Z" fill="url(#orangeGrad)" filter="url(#glow)">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M 0,600 Q 250,500 500,550 T 1000,500 L 1000,600 L 0,600 Z;
                        M 0,600 Q 250,550 500,500 T 1000,550 L 1000,600 L 0,600 Z;
                        M 0,600 Q 250,500 500,550 T 1000,500 L 1000,600 L 0,600 Z" />
            </path>

            <path d="M 0,600 Q 250,450 500,500 T 1000,450 L 1000,600 L 0,600 Z" fill="url(#cyanGrad)" filter="url(#glow)">
              <animate attributeName="d" dur="9s" repeatCount="indefinite"
                values="M 0,600 Q 250,450 500,500 T 1000,450 L 1000,600 L 0,600 Z;
                        M 0,600 Q 250,500 500,450 T 1000,500 L 1000,600 L 0,600 Z;
                        M 0,600 Q 250,450 500,500 T 1000,450 L 1000,600 L 0,600 Z" />
            </path>
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-neutral-950/80" />
        </div>

        <div className="absolute right-0 md:right-1/4 top-0 bottom-0 pointer-events-none">
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent shadow-[0_0_20px_rgba(251,146,60,0.6)]" />

          <div className="absolute left-12 top-1/3 w-32 h-32 bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <div className="absolute left-20 bottom-1/3 w-40 h-40 bg-cyan-500/20 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base text-white/80 font-medium tracking-[0.3em] uppercase mb-6">
              About 3Dtransify
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.95] mb-8 drop-shadow-2xl">
              Pioneering Digital<br />
              Transformation.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl font-normal leading-relaxed drop-shadow-lg">
              The authorized Scantech reseller for the Middle East. Empowering regional industries with world-class 3D digitalization technology, comprehensive training, and unparalleled local support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs md:text-sm text-cyan-400 font-medium tracking-[0.2em] uppercase mb-4">
                  Our Story
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
                  Built on Excellence
                </h2>
              </div>

              <div className="space-y-6 text-neutral-200 font-normal leading-relaxed">
                <p>
                  3Dtransify was founded to bridge a critical gap in the Middle Eastern industrial landscape. Businesses were forced to choose between expensive, often obsolete solutions and having no digital transformation at all.
                </p>
                <p>
                  As the authorized reseller for Scantech – a global leader and China's first publicly-listed 3D scanning company on the STAR Market – we provide a better alternative. We deliver cutting-edge 3D scanning and reverse engineering solutions that are both accessible and adaptable.
                </p>
                <p>
                  Our integrated approach combines metrology-grade scanners with powerful software like QuickSurface, enabling a seamless workflow from physical object to digital CAD model to final inspection. This saves time, reduces errors, and accelerates innovation across the region.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden h-full max-h-[500px]">
              <img
                src="/Built copy.png"
                alt="Robotic 3D Scanning System"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xs md:text-sm text-white/80 font-medium tracking-[0.3em] uppercase">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-2xl">
            Catalyzing a Digitized<br />
            Industrial Revolution
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-lg">
            We envision a future where every manufacturer, engineer, and innovator in the Middle East has access to the same world-class digitalization tools as their global counterparts.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs md:text-sm text-neutral-300 font-medium tracking-[0.3em] uppercase mb-6">
              Core Values
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight drop-shadow-lg">
              What Defines Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-neutral-900 p-10 transition-all duration-700 hover:bg-neutral-800"
                >
                  <div className={`w-16 h-16 ${value.color === 'cyan' ? 'bg-cyan-500' : 'bg-orange-500'} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-300 font-normal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden h-full max-h-[500px]">
              <img
                src="/images/kscan-e/17.jpg"
                alt="Expert Team"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-xs md:text-sm text-orange-400 font-medium tracking-[0.2em] uppercase mb-4">
                  Expert Team
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
                  Technical Partners,<br />
                  Not Just Vendors
                </h2>
              </div>

              <div className="space-y-6 text-neutral-200 font-normal leading-relaxed">
                <p>
                  Our strength lies in our team of metrology specialists and application engineers. Trained and certified by Scantech, we possess deep knowledge in laser scanning, photogrammetry, and metrology principles.
                </p>
                <p>
                  More importantly, we have real-world experience applying this technology to solve critical challenges across industries. From ensuring aerospace tolerances to maximizing automotive production uptime, we provide expert guidance and responsive local support.
                </p>
                <p>
                  We don't just sell hardware – we become your long-term partner in digital transformation, ensuring your investment drives productivity today and remains relevant tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs md:text-sm text-cyan-400 font-medium tracking-[0.2em] uppercase mb-4">
                  Partnership Excellence
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
                  Authorized Scantech<br />
                  Reseller
                </h2>
              </div>

              <div className="space-y-6 text-neutral-200 font-normal leading-relaxed">
                <p>
                  As the official authorized reseller for Scantech in the Middle East, we bring you world-class 3D scanning technology backed by comprehensive local support, training, and service.
                </p>
                <p>
                  Scantech is a globally recognized leader, the first publicly-listed 3D scanning company on China's STAR Market. Their technology is trusted for critical projects including the China Space Station and C919 aircraft.
                </p>
                <p>
                  We combine Scantech's cutting-edge hardware with our regional expertise to deliver solutions that truly work for Middle Eastern industries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe2 className="text-cyan-400" size={20} />
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase">
                      Global Leader
                    </p>
                  </div>
                  <p className="text-white font-medium text-lg">
                    STAR Market Listed
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="text-orange-400" size={20} />
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase">
                      Trusted By
                    </p>
                  </div>
                  <p className="text-white font-medium text-lg">
                    Space & Aviation
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden h-full max-h-[500px]">
              <img
                src="/Built copy.png"
                alt="Advanced 3D Scanning Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-xs md:text-sm text-neutral-300 font-medium tracking-[0.3em] uppercase">
              Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight drop-shadow-lg">
              Transform Your Operations
            </h2>
            <p className="text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Discover how 3Dtransify can elevate your manufacturing excellence with world-class digitalization solutions.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="group bg-white text-black px-12 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-cyan-400 transition-all duration-500 inline-flex items-center gap-4"
          >
            Start Your Digital Journey
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </section>
    </div>
  );
}

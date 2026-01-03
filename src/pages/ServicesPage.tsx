import { useState } from 'react';
import { ArrowRight, Scan, Box, CheckCircle2, GraduationCap } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: '3D Scanning',
      subtitle: 'Precision Digitalization',
      description: 'State-of-the-art Scantech scanners capture your objects, parts, or entire facilities with metrology-grade accuracy. Our experts bring the technology to your location.',
      deliverable: 'High-resolution, inspection-ready scan data with comprehensive documentation',
      image: '/3dscan.png',
      icon: Scan,
      color: 'cyan'
    },
    {
      title: 'Reverse Engineering',
      subtitle: 'Parametric Transformation',
      description: 'Transform physical components into production-ready, editable CAD models. Using Quicksurface and industry best practices, we preserve every critical detail.',
      deliverable: 'Parametric CAD models in STEP, IGES formats or direct CAD software integration',
      image: '/reverse engineering.png',
      icon: Box,
      color: 'orange'
    },
    {
      title: 'Quality Control',
      subtitle: 'Inspection Excellence',
      description: 'Comprehensive comparisons of manufactured parts against original CAD designs. Automated deviation analysis ensures absolute quality assurance.',
      deliverable: 'Detailed color-map deviation reports with pass/fail analysis and traceability',
      image: '/Quality control.png',
      icon: CheckCircle2,
      color: 'cyan'
    },
    {
      title: 'Training & Consultation',
      subtitle: 'Expert Empowerment',
      description: 'Comprehensive on-site or virtual training programs for Scantech hardware and Quicksurface software. Maximize your investment through expert knowledge transfer.',
      deliverable: 'Certified training completion with ongoing technical support and consultation',
      image: '/Training.png',
      icon: GraduationCap,
      color: 'orange'
    }
  ];

  const packages = [
    {
      name: 'Starter Collection',
      tagline: 'Entry into Excellence',
      ideal: 'SMEs, Startups, Educational Institutions & R&D Departments',
      hardware: 'SIMSCAN 3D Scanner',
      software: 'Quicksurface License',
      services: 'Comprehensive Onboarding Training & 1-Year Basic Support',
      value: 'Your all-in-one, cost-effective entry into professional 3D digitization. Perfect for prototyping, small-batch reverse engineering, and academic excellence.',
      image: '/Starterr.png',
      cta: 'Request Starter Collection',
      color: 'cyan'
    },
    {
      name: 'Professional Suite',
      tagline: 'Precision Without Compromise',
      ideal: 'Engineering Firms, Manufacturing Plants & Specialized Service Bureaus',
      hardware: 'KSCAN Series Composite Scanner',
      software: 'Quicksurface Premium License',
      services: 'Professional Application Training & Annual Priority Support Contract',
      value: 'The ultimate toolset for demanding applications. Achieve metrology-grade accuracy and streamlined scan-to-CAD workflow for the most complex projects.',
      image: '/Screenshot 2025-11-23 193625.png',
      cta: 'Request Professional Suite',
      color: 'orange'
    },
    {
      name: 'Enterprise Automation',
      tagline: 'Industrial Excellence',
      ideal: 'Automotive/Aerospace Suppliers & High-Volume Manufacturing',
      hardware: 'AM-CELL Automated Inspection Cell or AM-DESK Station',
      software: 'Quicksurface + DefinSight-AM Automated Software',
      services: 'Full Installation, System Commissioning & Gold SLA Support',
      value: 'Achieve 100% quality control with unparalleled efficiency. Integrate automated 3D inspection directly into your production line for maximum throughput and traceability.',
      image: '/Enterprise copy.png',
      cta: 'Schedule Automation Consultation',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 pt-24">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/trackscan/Banner.png)',
              backgroundPosition: 'center center',
              opacity: 0.8
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/50" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent shadow-[0_0_20px_rgba(251,146,60,0.6)]" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/30 via-orange-400/60 to-orange-500/30" />

          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-neutral-950 via-orange-500/5 to-transparent" style={{
            maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)'
          }} />

          <div className="absolute left-0 top-0 h-px w-64 bg-gradient-to-r from-transparent via-orange-400/80 to-transparent" />
          <div className="absolute left-0 bottom-0 h-px w-64 bg-gradient-to-r from-transparent via-orange-400/80 to-transparent" />

          <div className="absolute left-12 top-1/3 w-32 h-32 bg-orange-500/5 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <div className="absolute left-20 bottom-1/3 w-40 h-40 bg-orange-400/5 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-sm md:text-base text-white/80 font-medium tracking-[0.3em] uppercase mb-6">
              Professional Services
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.95] mb-8 drop-shadow-2xl">
              Bespoke Solutions.<br />
              Uncompromising Quality.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl font-normal leading-relaxed drop-shadow-lg">
              Your end-to-end digitalization partner. From individual services to complete turnkey solutions, every project receives our unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs md:text-sm text-neutral-300 font-medium tracking-[0.3em] uppercase mb-6">
              Professional Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8 drop-shadow-lg">
              Crafted to Your Specification
            </h2>
            <p className="text-lg text-neutral-200 font-normal max-w-3xl mx-auto">
              Select individual services or combine them into a comprehensive solution tailored to your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-neutral-800 transition-all duration-700 hover:bg-neutral-750"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/50 to-transparent" />

                    <div className="absolute top-8 left-8">
                      <div className={`w-16 h-16 ${service.color === 'cyan' ? 'bg-cyan-500' : 'bg-orange-500'} flex items-center justify-center transition-transform duration-500 ${hoveredService === index ? 'scale-110' : ''}`}>
                        <Icon className="text-black" size={32} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div>
                      <p className={`text-xs ${service.color === 'cyan' ? 'text-cyan-400' : 'text-orange-400'} font-medium tracking-[0.2em] uppercase mb-2`}>
                        {service.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
                        {service.title}
                      </h3>
                      <p className="text-neutral-200 font-normal leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-700">
                      <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase mb-2">
                        Deliverable
                      </p>
                      <p className="text-white font-normal text-sm">
                        {service.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
            Tailored Excellence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-2xl">
            Every Service.<br />
            Meticulously Delivered.
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-lg">
            Our expert team combines decades of experience with cutting-edge technology to ensure your project exceeds expectations.
          </p>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs md:text-sm text-neutral-300 font-medium tracking-[0.3em] uppercase mb-6">
              Solution Packages
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8 drop-shadow-lg">
              Complete Ecosystems
            </h2>
            <p className="text-lg text-neutral-200 font-normal max-w-3xl mx-auto">
              Comprehensive packages designed for immediate productivity. Hardware, software, and expert services combined for seamless integration.
            </p>
          </div>

          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="group relative bg-neutral-950 overflow-hidden transition-all duration-700 hover:shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[500px]">
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} relative overflow-hidden`}>
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                  </div>

                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-10 lg:p-16 flex flex-col justify-center`}>
                    <div className="space-y-6">
                      <div>
                        <p className={`text-xs ${pkg.color === 'cyan' ? 'text-cyan-400' : 'text-orange-400'} font-medium tracking-[0.2em] uppercase mb-3`}>
                          {pkg.tagline}
                        </p>
                        <h3 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
                          {pkg.name}
                        </h3>
                        <p className="text-sm text-neutral-300 font-normal tracking-wide mb-8">
                          {pkg.ideal}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-4 pb-4 border-b border-neutral-700">
                          <span className="text-neutral-300 font-normal text-sm w-24">Hardware</span>
                          <span className="text-white font-medium text-sm flex-1">{pkg.hardware}</span>
                        </div>
                        <div className="flex gap-4 pb-4 border-b border-neutral-700">
                          <span className="text-neutral-300 font-normal text-sm w-24">Software</span>
                          <span className="text-white font-medium text-sm flex-1">{pkg.software}</span>
                        </div>
                        <div className="flex gap-4 pb-4 border-b border-neutral-700">
                          <span className="text-neutral-300 font-normal text-sm w-24">Services</span>
                          <span className="text-white font-medium text-sm flex-1">{pkg.services}</span>
                        </div>
                      </div>

                      <p className="text-neutral-200 font-normal leading-relaxed pt-4">
                        {pkg.value}
                      </p>

                      <button
                        onClick={() => onNavigate('contact')}
                        className={`group/btn ${pkg.color === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-orange-500 hover:bg-orange-400'} text-black px-10 py-4 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 flex items-center gap-4 mt-6`}
                      >
                        {pkg.cta}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-32 px-6 md:px-12 lg:px-20 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <p className="text-xs md:text-sm text-neutral-300 font-medium tracking-[0.3em] uppercase">
              Bespoke Solutions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight drop-shadow-lg">
              Beyond Standard Offerings
            </h2>
            <p className="text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Your requirements are unique. Let us craft a solution specifically for your challenges, combining our services in ways that perfectly match your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center mx-auto mb-4">
                <Scan className="text-black" size={24} />
              </div>
              <h3 className="text-lg font-light text-white">Custom Integration</h3>
              <p className="text-sm text-neutral-300 font-normal">
                Seamlessly integrate our solutions into your existing production environment
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center mx-auto mb-4">
                <Box className="text-black" size={24} />
              </div>
              <h3 className="text-lg font-light text-white">Flexible Engagement</h3>
              <p className="text-sm text-neutral-300 font-normal">
                Project-based or ongoing partnerships tailored to your business model
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-black" size={24} />
              </div>
              <h3 className="text-lg font-light text-white">Continuous Support</h3>
              <p className="text-sm text-neutral-300 font-normal">
                Ongoing training, consultation, and technical expertise at your disposal
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group bg-white text-black px-12 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-neutral-200 transition-all duration-500 inline-flex items-center gap-4"
            >
              Discuss Your Requirements
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

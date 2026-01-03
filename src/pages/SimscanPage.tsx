import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Download } from 'lucide-react';

interface SimscanPageProps {
  onNavigate: (page: string) => void;
}

interface SpecItem {
  label: string;
  value: string;
}

interface SpecGroup {
  label: string;
  isGroup: true;
  items: SpecItem[];
}

type Specification = SpecItem | SpecGroup;

const simscanGalleries = {
  'SIMSCAN-E': [
    '/images/simscan-e/ss1.jpg',
    '/images/simscan-e/ss2.jpg',
    '/images/simscan-e/ss3.jpg',
    '/images/simscan-e/ss4.jpg',
    '/images/simscan-e/ss5.jpg'
  ],
  'SIMSCAN Gen2': [
    '/images/simscan-e/ss11.jpg',
    '/images/simscan-e/ss12.jpg',
    '/images/simscan-e/ss15.jpg',
    '/images/simscan-e/ss14.jpg',
    '/images/simscan-e/ss13.jpg'
  ]
};

export default function SimscanPage({ onNavigate }: SimscanPageProps) {
  const [activeTab, setActiveTab] = useState<'SIMSCAN-E' | 'SIMSCAN Gen2'>('SIMSCAN-E');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxImage(simscanGalleries[activeTab][index]);
  };

  const handleLightboxPrev = () => {
    const gallery = simscanGalleries[activeTab];
    const newIndex = (lightboxImageIndex - 1 + gallery.length) % gallery.length;
    setLightboxImageIndex(newIndex);
    setLightboxImage(gallery[newIndex]);
  };

  const handleLightboxNext = () => {
    const gallery = simscanGalleries[activeTab];
    const newIndex = (lightboxImageIndex + 1) % gallery.length;
    setLightboxImageIndex(newIndex);
    setLightboxImage(gallery[newIndex]);
  };

  const specifications = {
    'SIMSCAN-E': [
      {
        label: 'Scan mode',
        isGroup: true,
        items: [
          { label: 'Ultra-fast scanning', value: '63 blue laser lines (Triple Cross Technology)' },
          { label: 'Hyperfine scanning', value: '17 blue parallel laser lines' },
          { label: 'Deep hole scanning', value: '1 extra blue laser line' }
        ]
      },
      { label: 'Accuracy', value: 'Up to 0.020 mm' },
      { label: 'Scanning rate up to', value: '6,300,000 measurements/s' },
      { label: 'Scanning area up to', value: '700 mm × 600 mm' },
      { label: 'Resolution up to', value: '0.020 mm' },
      { label: 'Wireless', value: 'Yes' }
    ],
    'SIMSCAN Gen2': [
      {
        label: 'Scan mode',
        isGroup: true,
        items: [
          { label: 'Ultra-fast scanning (22)', value: '11 blue laser crosses' },
          { label: 'Ultra-fast scanning (30)', value: '17 blue laser crosses' },
          { label: 'Ultra-fast scanning (42)', value: '27 blue laser crosses' },
          { label: 'Hyperfine scanning (22)', value: '7 blue parallel laser lines' },
          { label: 'Hyperfine scanning (30/42)', value: '17 blue parallel laser lines' },
          { label: 'Deep hole scanning', value: '1 extra blue laser line' }
        ]
      },
      { label: 'Accuracy', value: 'Up to 0.020 mm' },
      {
        label: 'Scanning rate up to',
        isGroup: true,
        items: [
          { label: 'SIMSCAN 22 Gen2', value: '2,020,000 measurements/s' },
          { label: 'SIMSCAN 30 Gen2', value: '4,580,000 measurements/s' },
          { label: 'SIMSCAN 42 Gen2', value: '5,800,000 measurements/s' }
        ]
      },
      {
        label: 'Scanning area up to',
        isGroup: true,
        items: [
          { label: 'SIMSCAN 22 Gen2', value: '650 mm × 550 mm' },
          { label: 'SIMSCAN 30/42 Gen2', value: '700 mm × 600 mm' }
        ]
      },
      { label: 'Resolution up to', value: '0.020 mm' },
      { label: 'Wireless', value: 'No' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24">
      <div className="relative pt-[8.8rem] pb-[12.0285rem] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Simscan banner1.png"
            alt="SIMSCAN Series"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative flex flex-col items-center justify-center px-8">
          <div className="text-center">
            <p className="text-cyan-400 text-sm tracking-[0.3em] mb-8 uppercase drop-shadow-lg">Portable Precision Scanners</p>
            <h1 className="text-7xl md:text-8xl font-extralight text-white leading-none mb-6 tracking-tight drop-shadow-2xl backdrop-blur-md bg-black/10 px-12 py-4 rounded-lg">
              SIMSCAN
            </h1>
            <p className="text-2xl text-white font-light tracking-wide drop-shadow-lg">
              Professional-Grade Portability
            </p>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="bg-white py-32 transition-all duration-1000 ease-out"
        style={{
          opacity: visibleSections.has(0) ? 1 : 0,
          transform: visibleSections.has(0) ? 'translateY(0)' : 'translateY(80px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-32 mb-32">
            <div>
              <h2 className="text-5xl font-light text-black mb-8 leading-tight">
                Accessible Precision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The SIMSCAN series delivers professional-grade 3D scanning in a compact, easy-to-use design, from the fully wireless SIMSCAN-E to the versatile SIMSCAN Gen2. With accuracy up to 0.020 mm and specialized modes for tight spaces, it makes high-precision metrology accessible and affordable for any application.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">0.020mm</p>
                <p className="text-gray-600">Accuracy</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">6.3M measurements/s</p>
                <p className="text-gray-600">Scanning Rate (SIMSCAN-E)</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">Compact</p>
                <p className="text-gray-600">Portable design for tight spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="bg-slate-50 py-32 transition-all duration-1000 ease-out"
        style={{
          opacity: visibleSections.has(1) ? 1 : 0,
          transform: visibleSections.has(1) ? 'translateY(0)' : 'translateY(80px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <p className="text-sm text-cyan-600 mb-4 tracking-widest uppercase">Choose your model</p>
            <div className="flex gap-8 border-b border-gray-300">
              {(['SIMSCAN-E', 'SIMSCAN Gen2'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-6 text-3xl font-light transition-all duration-300 relative ${
                    activeTab === tab
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'SIMSCAN-E' && (
            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-cyan-600 mb-4 tracking-widest uppercase">Fully Wireless</p>
                  <h3 className="text-5xl font-extralight text-black mb-8 leading-tight">
                    Palm-Sized Power
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    The SIMSCAN-E is an affordable, palm-sized 3D scanner that brings professional-grade scanning to everyone. Fully wireless, it delivers 6.3 million measurements/sec and 0.020 mm accuracy, with a short-distance camera for tight spaces—making high-precision inspection easy and portable anywhere.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300 mb-8"
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-sm tracking-widest uppercase">Download Datasheet</span>
                  </a>
                  <div className="space-y-6">
                    <div className="border-l-2 border-cyan-500 pl-6">
                      <p className="text-4xl font-light text-black mb-2">6.3M measurements/s</p>
                      <p className="text-gray-500">Scanning Rate</p>
                    </div>
                    <div className="border-l-2 border-cyan-500 pl-6">
                      <p className="text-4xl font-light text-black mb-2">Wireless</p>
                      <p className="text-gray-500">Complete Freedom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative bg-white overflow-hidden group cursor-pointer h-[500px]"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={simscanGalleries[activeTab][0]}
                  alt="SIMSCAN-E 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
          )}

          {activeTab === 'SIMSCAN Gen2' && (
            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-cyan-600 mb-4 tracking-widest uppercase">Versatile & Affordable</p>
                  <h3 className="text-5xl font-extralight text-black mb-8 leading-tight">
                    Award-Winning Design
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    The SIMSCAN Gen2 makes professional 3D scanning accessible and affordable for everyone. Compact and award-winning, it delivers 0.020 mm accuracy and up to 5.8 million measurements/sec, with three adaptive modes—Ultra-Fast, Hyperfine, and Deep Hole—handling both quick scans and intricate geometries. Its versatile, wired design excels in tight spaces and integrates easily with automated workflows.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300 mb-8"
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-sm tracking-widest uppercase">Download Datasheet</span>
                  </a>
                  <div className="space-y-6">
                    <div className="border-l-2 border-cyan-500 pl-6">
                      <p className="text-4xl font-light text-black mb-2">5.8M measurements/s</p>
                      <p className="text-gray-500">Scanning Rate (42 Gen2)</p>
                    </div>
                    <div className="border-l-2 border-cyan-500 pl-6">
                      <p className="text-4xl font-light text-black mb-2">3 Variants</p>
                      <p className="text-gray-500">22, 30, and 42 Gen2</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative bg-white overflow-hidden group cursor-pointer h-[500px]"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={simscanGalleries[activeTab][0]}
                  alt="SIMSCAN Gen2 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-16 mb-20">
            <div className="grid grid-cols-2 gap-4">
              {simscanGalleries[activeTab].slice(1).map((image, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square bg-white overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(idx + 1)}
                >
                  <img
                    src={image}
                    alt={`${activeTab} ${idx + 2}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <h3 className="text-4xl font-light text-black mb-8">Technical Specifications</h3>
              {specifications[activeTab].map((spec, idx) => {
                if ('isGroup' in spec && spec.isGroup) {
                  return (
                    <div key={idx} className="border-b border-gray-200">
                      <div className="py-4 hover:bg-white transition-colors duration-300">
                        <p className="text-gray-600 font-light mb-3">{spec.label}</p>
                        <div className="space-y-2 ml-6">
                          {spec.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="grid grid-cols-2 gap-4">
                              <p className="text-gray-500 text-sm font-light">• {item.label}</p>
                              <p className="text-black text-sm font-light">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-2 py-4 border-b border-gray-200 hover:bg-white transition-colors duration-300"
                  >
                    <p className="text-gray-600 font-light">{spec.label}</p>
                    <p className="text-black font-light">{spec.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="relative py-32 overflow-hidden transition-all duration-1000 ease-out"
        style={{
          opacity: visibleSections.has(2) ? 1 : 0,
          transform: visibleSections.has(2) ? 'translateY(0)' : 'translateY(80px)'
        }}
      >
        <div className="absolute inset-0">
          <img
            src="/Simscan body2.png"
            alt="SIMSCAN Series"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-white mb-8 leading-tight">
            Ready to experience portable precision?
          </h2>
          <p className="text-white/90 text-lg mb-12 leading-relaxed">
            Contact us to schedule a demonstration or learn more about how the SIMSCAN series
            can transform your workflow.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block px-12 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-cyan-400 hover:text-black transition-colors duration-300"
          >
            Get in touch
          </button>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightboxImageIndex}
              src={lightboxImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-light">
            {lightboxImageIndex + 1} / {simscanGalleries[activeTab].length}
          </div>
        </div>
      )}
    </div>
  );
}

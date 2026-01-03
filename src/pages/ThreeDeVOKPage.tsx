import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Download } from 'lucide-react';

interface ThreeDeVOKPageProps {
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

const threeDeVOKGalleries = {
  '3DeVOK MQ': [
    '/images/3devok/de11.jpg',
    '/images/3devok/12.png',
    '/images/3devok/13.png',
    '/images/3devok/14.png',
    '/images/3devok/15.png'
  ],
  '3DeVOK MT': [
    '/images/3devok/1.jpg',
    '/images/3devok/7.webp',
    '/images/3devok/2.png',
    '/images/3devok/4.jpg',
    '/images/3devok/5.webp'
  ]
};

export default function ThreeDeVOKPage({ onNavigate }: ThreeDeVOKPageProps) {
  const [activeTab, setActiveTab] = useState<'3DeVOK MQ' | '3DeVOK MT'>('3DeVOK MQ');
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
    setLightboxImage(threeDeVOKGalleries[activeTab][index]);
  };

  const handleLightboxPrev = () => {
    const gallery = threeDeVOKGalleries[activeTab];
    const newIndex = (lightboxImageIndex - 1 + gallery.length) % gallery.length;
    setLightboxImageIndex(newIndex);
    setLightboxImage(gallery[newIndex]);
  };

  const handleLightboxNext = () => {
    const gallery = threeDeVOKGalleries[activeTab];
    const newIndex = (lightboxImageIndex + 1) % gallery.length;
    setLightboxImageIndex(newIndex);
    setLightboxImage(gallery[newIndex]);
  };

  const specifications: Record<typeof activeTab, Specification[]> = {
    '3DeVOK MQ': [
      {
        label: 'Light Sources',
        isGroup: true,
        items: [
          { label: '22 Infrared Laser Lines', value: 'Invisible' },
          { label: 'Infrared VCSEL Structured Light', value: 'Invisible' }
        ]
      },
      {
        label: 'Scan Modes',
        isGroup: true,
        items: [
          { label: 'Infrared Laser Lines', value: 'Markerless and invisible-light scanning' },
          { label: 'Infrared Linear-array Structured Light', value: 'Markerless, invisible-light, partial fine, rapid scanning' }
        ]
      },
      { label: 'Wireless Scanning', value: 'Supported (with optional handle)' },
      { label: 'Accuracy', value: 'Up to 0.08 mm' },
      {
        label: 'Alignment Mode',
        isGroup: true,
        items: [
          { label: 'Infrared Laser', value: 'Hybrid, markers, texture, geometric features' },
          { label: 'Structured Light', value: 'Hybrid, texture, geometric features' }
        ]
      },
      { label: 'Ability to Capture Texture', value: 'Yes' },
      {
        label: 'Field of View',
        isGroup: true,
        items: [
          { label: 'Infrared Laser', value: '140 mm × 140 mm - 490 mm × 490 mm' },
          { label: 'Structured Light', value: '50 mm × 75 mm - 1,100mm × 1,000mm' }
        ]
      },
      {
        label: 'Scanning Speed',
        isGroup: true,
        items: [
          { label: 'Infrared Laser', value: 'Up to 2,450,000 Points/s' },
          { label: 'Structured Light', value: 'Up to 4,500,000 Points/s' }
        ]
      }
    ],
    '3DeVOK MT': [
      {
        label: 'Light Sources',
        isGroup: true,
        items: [
          { label: '34 Blue Laser Lines', value: 'Visible' },
          { label: '22 Infrared Laser Lines', value: 'Invisible' },
          { label: 'Infrared VCSEL Structured Light', value: 'Invisible' }
        ]
      },
      {
        label: 'Scan Modes',
        isGroup: true,
        items: [
          { label: 'Blue Line Laser', value: 'Markerless scanning' },
          { label: 'Infrared Line Laser', value: 'Markerless and invisible-light scanning' },
          { label: 'Infrared Structured Light', value: 'Markerless, invisible-light, partial fine, rapid scanning' }
        ]
      },
      { label: 'Wireless Scanning', value: 'Not available' },
      { label: 'Accuracy', value: 'Up to 0.04 mm' },
      {
        label: 'Alignment Mode',
        isGroup: true,
        items: [
          { label: 'Blue & Infrared Laser', value: 'Hybrid, marker, texture, geometric features' },
          { label: 'Structured Light', value: 'Hybrid, texture, geometric features' }
        ]
      },
      { label: 'Ability to Capture Texture', value: 'Yes' },
      {
        label: 'Field of View',
        isGroup: true,
        items: [
          { label: 'Blue & Infrared Laser', value: '140 mm × 140 mm - 490 mm × 490 mm' },
          { label: 'Structured Light', value: '50 mm × 75 mm - 1,100mm × 1,000mm' }
        ]
      },
      {
        label: 'Scanning Speed',
        isGroup: true,
        items: [
          { label: 'Blue Laser', value: 'Up to 3,300,000 Points/s' },
          { label: 'Infrared Laser', value: 'Up to 2,450,000 Points/s' },
          { label: 'Structured Light', value: 'Up to 4,500,000 Points/s' }
        ]
      }
    ]
  };

  const modelDescriptions = {
    '3DeVOK MQ': '3DeVOK MQ focuses on ease of use, mobility, and affordability. It uses infrared laser + infrared speckle, supports wireless operation, captures color and texture, and is best suited for creators, educators, and general-purpose users working in design, 3D printing, and visualization.',
    '3DeVOK MT': '3DeVOK MT is a higher-performance, more professional model designed for demanding industrial applications. It uses blue laser + infrared speckle, offers faster scan speeds, better handling of dark and reflective surfaces, and is ideal for reverse engineering, precision measurement, and professional workflows.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24">
      <div className="relative pt-[8.8rem] pb-[12.0285rem] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/3devok/de3.jpg"
            alt="3DeVOK Series"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative flex flex-col items-center justify-center px-8">
          <div className="text-center">
            <p className="text-cyan-400 text-sm tracking-[0.3em] mb-8 uppercase drop-shadow-lg">Affordable Professional 3D Scanning</p>
            <h1 className="text-7xl md:text-8xl font-extralight text-white leading-none mb-6 tracking-tight drop-shadow-2xl backdrop-blur-md bg-black/10 px-12 py-4 rounded-lg">
              3DeVOK Series
            </h1>
            <p className="text-2xl text-white font-light tracking-wide drop-shadow-lg">
              Professional Quality for Everyone
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
                Accessible Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The 3DeVOK series offers affordable, easy-to-use 3D scanners for artistic creation, design, 3D printing, reverse engineering, and education. With laser and structured light technologies, they capture accurate geometry along with color and texture, making professional-quality 3D scanning accessible to everyone.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">0.04mm</p>
                <p className="text-gray-600">Accuracy (MT)</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">4.5M points/s</p>
                <p className="text-gray-600">Maximum Scanning Speed</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-8">
                <p className="text-4xl font-light text-black mb-2">Wireless Option</p>
                <p className="text-gray-600">Mobile scanning with MQ</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="relative overflow-hidden max-h-[500px]">
              <img
                src="/images/3devok/de6.jpg"
                alt="3DeVOK Scanner in Use"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-cyan-600 mb-4 tracking-widest uppercase">Versatile Applications</p>
              <h2 className="text-5xl font-extralight text-black mb-8 leading-tight">
                From Art to Industry
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're an artist capturing intricate sculptures, an educator teaching 3D design principles, or an engineer conducting reverse engineering projects, the 3DeVOK series delivers professional results. With both infrared and blue laser technologies, texture capture capabilities, and flexible scanning modes, these scanners adapt to your specific needs.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-4xl font-light text-black mb-2">Color & Texture</p>
                  <p className="text-gray-500">Full visual capture</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-4xl font-light text-black mb-2">Multiple Modes</p>
                  <p className="text-gray-500">Laser and structured light</p>
                </div>
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
            <div className="flex gap-6 border-b border-gray-300 overflow-x-auto">
              {(['3DeVOK MQ', '3DeVOK MT'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-6 text-2xl font-light transition-all duration-300 relative whitespace-nowrap ${
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

          <div className="grid grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-cyan-600 mb-4 tracking-widest uppercase">
                  {activeTab === '3DeVOK MQ' ? 'Mobile & Affordable' : 'Professional Performance'}
                </p>
                <h3 className="text-5xl font-extralight text-black mb-8 leading-tight">
                  {activeTab}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {modelDescriptions[activeTab]}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300 mb-8"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-sm tracking-widest uppercase">Download Datasheet</span>
                </a>
                <div className="space-y-6">
                  {activeTab === '3DeVOK MQ' ? (
                    <>
                      <div className="border-l-2 border-cyan-500 pl-6">
                        <p className="text-4xl font-light text-black mb-2">0.08mm</p>
                        <p className="text-gray-500">Accuracy</p>
                      </div>
                      <div className="border-l-2 border-cyan-500 pl-6">
                        <p className="text-4xl font-light text-black mb-2">Wireless</p>
                        <p className="text-gray-500">Optional handle</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="border-l-2 border-cyan-500 pl-6">
                        <p className="text-4xl font-light text-black mb-2">0.04mm</p>
                        <p className="text-gray-500">Accuracy</p>
                      </div>
                      <div className="border-l-2 border-cyan-500 pl-6">
                        <p className="text-4xl font-light text-black mb-2">34 Blue Lasers</p>
                        <p className="text-gray-500">Enhanced performance</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div
              className="relative bg-white overflow-hidden group cursor-pointer h-[500px]"
              onClick={() => openLightbox(0)}
            >
              <img
                src={threeDeVOKGalleries[activeTab][0]}
                alt={`${activeTab} 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-20">
            <div className="grid grid-cols-2 gap-4">
              {threeDeVOKGalleries[activeTab].slice(1).map((image, idx) => (
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
            src="/nt5.jpg"
            alt="3DeVOK Series in Action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-white mb-8 leading-tight">
            Ready to start your 3D scanning journey?
          </h2>
          <p className="text-white/90 text-lg mb-12 leading-relaxed">
            Contact us to discover which 3DeVOK model is right for you and schedule a demonstration
            to see how accessible professional 3D scanning can be.
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
            {lightboxImageIndex + 1} / {threeDeVOKGalleries[activeTab].length}
          </div>
        </div>
      )}
    </div>
  );
}

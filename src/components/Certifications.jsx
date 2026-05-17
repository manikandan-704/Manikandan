import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, FileText, Eye } from 'lucide-react';

// ─── Vite glob — picks up images AND PDFs in src/assets/certs/ ───────────────
const certGlob = import.meta.glob(
  '../assets/certs/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,pdf,PDF}',
  { eager: true }
);

// Get the processed asset URL by bare filename
const getUrl = (filename) => {
  const key = `../assets/certs/${filename}`;
  return certGlob[key]?.default ?? null;
};

const isPdf = (filename) => /\.pdf$/i.test(filename);

// ─── YOUR CERTIFICATES — update names/issuer/date as needed ──────────────────
const certMeta = [
  {
    file: 'src/assets/certs/Full stack certificate.pdf',
    name: '30-Day Full Stack Dev Masterclass',
    issuer: 'NoviTech R&D Private Limited',
    date: 'Jan 2026',
    color: '#6366f1',
  },
  {
    file: 'XploCode_Intern_Certificate.pdf',
    name: 'Internship Certificate',
    issuer: 'XploCode',
    date: '2025',
    color: '#f97316',
  },
  {
    file: 'Manikandan N (2).pdf',
    name: 'Achievement Certificate',
    issuer: 'Certification Body',
    date: '2025',
    color: '#22c55e',
  },
  {
    file: 'WhatsApp Image 2026-03-26 at 11.58.53 AM.jpeg',
    name: 'Certificate of Completion',
    issuer: 'Certification Body',
    date: 'Mar 2026',
    color: '#06b6d4',
  },
  {
    file: 'WhatsApp Image 2026-03-26 at 12.21.10 PM.jpeg',
    name: 'Professional Certificate',
    issuer: 'Certification Body',
    date: 'Mar 2026',
    color: '#a855f7',
  },
];

// ─── PDF Card: beautiful styled card with View button ────────────────────────
const PdfCard = ({ url, cert }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center gap-3 px-4 text-center relative overflow-hidden"
    style={{ height: 190, background: `${cert.color}14` }}
  >
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `repeating-linear-gradient(0deg,${cert.color} 0,${cert.color} 1px,transparent 0,transparent 50%),
                          repeating-linear-gradient(90deg,${cert.color} 0,${cert.color} 1px,transparent 0,transparent 50%)`,
        backgroundSize: '24px 24px',
      }}
    />

    {/* Icon */}
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
      style={{ background: `${cert.color}22`, border: `1.5px solid ${cert.color}55` }}
    >
      <FileText size={26} style={{ color: cert.color }} />
    </div>

    {/* Cert name */}
    <p className="text-sm font-semibold leading-snug max-w-[210px] relative z-10" style={{ color: cert.color }}>
      {cert.name}
    </p>

    {/* View link */}
    {url && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full relative z-10 transition-all hover:scale-105"
        style={{
          background: `${cert.color}22`,
          color: cert.color,
          border: `1px solid ${cert.color}44`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Eye size={13} />
        View Certificate
      </a>
    )}
  </div>
);

// ─── Image Card ───────────────────────────────────────────────────────────────
const ImgCard = ({ url, cert }) => (
  <div className="relative overflow-hidden" style={{ height: 190 }}>
    <img
      src={url}
      alt={cert.name}
      className="cert-card-img group-hover:scale-105 transition-transform duration-500"
    />
    {/* Bottom fade */}
    <div
      className="absolute bottom-0 left-0 right-0 h-10"
      style={{ background: 'linear-gradient(to top,rgba(17,17,17,0.95),transparent)' }}
    />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certs = useMemo(
    () => certMeta.map((c) => ({ ...c, url: getUrl(c.file) })),
    []
  );

  // Duplicate for seamless infinite loop
  const doubled = [...certs, ...certs];

  return (
    <section id="certifications" className="py-24 overflow-hidden bg-dark-card/20" ref={ref}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent-primary/10">
            <Award className="text-accent-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mb-5" />
        <p className="text-dark-textSecondary max-w-xl mx-auto text-base leading-relaxed">
          Credentials earned through structured learning and hands-on practice.
          Hover any card to pause the scroll.
        </p>
      </motion.div>

      {/* Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubled.map((cert, i) => (
              <div key={i} className="cert-card group">

                {/* Image area — PDF or raster image */}
                {cert.url && isPdf(cert.file) ? (
                  <PdfCard url={cert.url} cert={cert} />
                ) : cert.url ? (
                  <ImgCard url={cert.url} cert={cert} />
                ) : (
                  /* File not found in assets */
                  <div
                    className="w-full flex items-center justify-center"
                    style={{ height: 190, background: `${cert.color}0d` }}
                  >
                    <FileText size={36} style={{ color: cert.color, opacity: 0.35 }} />
                  </div>
                )}

                {/* Accent dot */}
                <div
                  className="absolute top-3 right-3 w-3 h-3 rounded-full z-10"
                  style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}` }}
                />

                {/* Card Body */}
                <div className="cert-card-body">
                  <div className="w-8 h-0.5 rounded-full mb-1" style={{ background: cert.color }} />
                  <p className="font-semibold text-sm leading-snug" style={{ color: cert.color }}>
                    {cert.name}
                  </p>
                  <p className="text-dark-textSecondary text-xs">{cert.issuer}</p>
                  <p className="text-dark-textSecondary text-[11px] mt-1 opacity-70">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Colour indicator dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="flex justify-center mt-10 gap-2"
      >
        {certs.map((c, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: c.color, opacity: 0.6 }} />
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;

'use client';
import { useState } from 'react';

export default function Media() {
  const [selected, setSelected] = useState(null);

  const images = [
    { src: '/media/1.png', caption: 'Screenshot 1' },
    { src: '/media/2.png', caption: 'Screenshot 2' },
    { src: '/media/3.png', caption: 'Screenshot 3' },
    { src: '/media/4.png', caption: 'Screenshot 4' },
    { src: '/media/5.png', caption: 'Screenshot 5' },
    { src: '/media/6.png', caption: 'Screenshot 6' },
    { src: '/media/7.png', caption: 'Screenshot 7' },
    { src: '/media/8.png', caption: 'Screenshot 8' },
    { src: '/media/10.png', caption: 'Screenshot 9' },
    { src: '/media/11.png', caption: 'Screenshot 10' },
    { src: '/media/12.png', caption: 'Screenshot 11' },
    { src: '/media/13.png', caption: 'Screenshot 12' },
    { src: '/media/14.png', caption: 'Screenshot 13' },
    { src: '/media/15.png', caption: 'Screenshot 14' },
    { src: '/media/16.png', caption: 'Screenshot 15' },
    { src: '/media/17.png', caption: 'Screenshot 16' },
  ];

  const prev = () => setSelected((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setSelected((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="newsSection">
      <div className="sectionHeading">
        <div className="newsDot" />
        <h2>Media <span>Gallery</span></h2>
        <div className="sectionLine" />
      </div>

      <div className="newsGrid">
        {images.map((img, index) => (
          <div
            className="newsCard"
            key={index}
            onClick={() => setSelected(index)}
            style={{ padding: 0, overflow: 'hidden', cursor: 'zoom-in' }}
          >
            <img
              src={img.src}
              alt={img.caption}
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ padding: '12px 16px', fontSize: '13px', color: 'rgba(240,236,224,0.45)' }}>
              {img.caption}
            </p>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute', left: '24px',
              background: 'none', border: '2px solid #f5c400',
              color: '#f5c400', fontSize: '28px', width: '48px', height: '48px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >‹</button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '90vw' }}>
            <img
              src={images[selected].src}
              alt={images[selected].caption}
              style={{ maxHeight: '80vh', maxWidth: '90vw', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
            <p style={{ marginTop: '16px', color: 'rgba(240,236,224,0.5)', fontSize: '14px', letterSpacing: '2px' }}>
              {images[selected].caption}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute', right: '24px',
              background: 'none', border: '2px solid #f5c400',
              color: '#f5c400', fontSize: '28px', width: '48px', height: '48px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >›</button>

          {/* Close hint */}
          <span style={{
            position: 'absolute', top: '24px', right: '24px',
            color: 'rgba(240,236,224,0.4)', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer'
          }}>
            ESC / CLICK TO CLOSE
          </span>
        </div>
      )}
    </section>
  );
}
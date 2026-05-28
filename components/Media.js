'use client';
import { useState } from 'react';

export default function Media() {
  const [selected, setSelected] = useState(null);

  const images = [
    { src: '/media/1.png' },
    { src: '/media/2.png' },
    { src: '/media/3.png' },
    { src: '/media/4.png' },
    { src: '/media/5.png' },
    { src: '/media/6.png' },
    { src: '/media/7.png' },
    { src: '/media/8.png' },
    { src: '/media/10.png' },
    { src: '/media/11.png' },
    { src: '/media/12.png' },
    { src: '/media/13.png' },
    { src: '/media/14.png' },
    { src: '/media/15.png' },
    { src: '/media/16.png' },
    { src: '/media/17.png' },
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
              alt={`Screenshot ${index + 1}`}
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute', left: '24px',
              background: 'none', border: '2px solid #f5c400',
              color: '#f5c400', fontSize: '28px', width: '48px', height: '48px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >‹</button>

          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '90vw' }}>
            <img
              src={images[selected].src}
              alt={`Screenshot ${selected + 1}`}
              style={{ maxHeight: '80vh', maxWidth: '90vw', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute', right: '24px',
              background: 'none', border: '2px solid #f5c400',
              color: '#f5c400', fontSize: '28px', width: '48px', height: '48px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >›</button>

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
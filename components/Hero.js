export default function Hero() {
  return (
    <section className="hero">
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/media/1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px) brightness(0.25)',
        transform: 'scale(1.05)',
        zIndex: 0,
      }} />
      <div className="heroGrid" style={{zIndex: 1}} />
      <div className="heroSlash" style={{zIndex: 1}} />
      <div className="heroSlash2" style={{zIndex: 1}} />
      <div className="scanlines" style={{zIndex: 1}} />

      <div className="heroContent" style={{zIndex: 2}}>
        <h1 className="heroTitle">
          MIDNIGHT<span> HOUR</span>
        </h1>
      </div>
    </section>
  );
}
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const sectionsRef = useRef([]);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px) rotateY(${scrollY * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div>
      <section className="section hero">
        <div className="fade-in" ref={addToRefs}>
          <h1>Bienvenido a NotesApp</h1>
          <p>La aplicación definitiva para gestionar tus notas de manera eficiente y organizada. Crea, edita y organiza tus ideas con facilidad.</p>
          <button className="btn"><Link className='iniciarsesion' to="/login">Empezar</Link></button>
        </div>
        <div className="parallax-3d" ref={parallaxRef}>
          📓
        </div>
      </section>

      <section className="section features">
        <div className="fade-in" ref={addToRefs}>
          <h2>Características Principales</h2>
        </div>
        <div className="features-grid">
          <div className="card fade-in" ref={addToRefs}>
            <div className="card-icon">📝</div>
            <h3>Crea Notas Rápidamente</h3>
            <p>Agrega nuevas notas en segundos con nuestro editor intuitivo. Soporta texto enriquecido, imágenes y enlaces.</p>
          </div>
          <div className="card fade-in" ref={addToRefs}>
            <div className="card-icon">📁</div>
            <h3>Organiza tus Ideas</h3>
            <p>Clasifica tus notas en categorías, etiquetas y carpetas para mantener todo ordenado y accesible.</p>
          </div>
          <div className="card fade-in" ref={addToRefs}>
            <div className="card-icon">🔍</div>
            <h3>Búsqueda Avanzada</h3>
            <p>Encuentra cualquier nota al instante con nuestra potente función de búsqueda que indexa todo tu contenido.</p>
          </div>
          <div className="card fade-in" ref={addToRefs}>
            <div className="card-icon">☁️</div>
            <h3>Sincronización en la Nube</h3>
            <p>Accede a tus notas desde cualquier dispositivo con sincronización automática y segura.</p>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="fade-in" ref={addToRefs}>
          <h2>Por Qué Elegir NotesApp</h2>
          <ul className="benefits-list">
            <li className="fade-in" ref={addToRefs}>Interfaz intuitiva y fácil de usar</li>
            <li className="fade-in" ref={addToRefs}>Seguridad de datos de nivel empresarial</li>
            <li className="fade-in" ref={addToRefs}>Actualizaciones constantes con nuevas funciones</li>
            <li className="fade-in" ref={addToRefs}>Soporte multiplataforma: web, móvil y escritorio</li>
          </ul>
        </div>
      </section>

      <section className="section footer">
        <div className="fade-in" ref={addToRefs}>
          <h2>¡Únete a Miles de Usuarios!</h2>
          <p>Descarga NotesApp hoy y transforma la forma en que tomas notas.</p>
          <button className="btn">Descargar Ahora</button>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem' }}>© 2026 NotesApp. Todos los derechos reservados.</p>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}courses.json`)
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleEnroll = (id) => {
    if (!enrolled.includes(id)) {
      setEnrolled([...enrolled, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${name}! Nos comunicaremos a: ${email}`);
  };

  return (
    <main>
      <nav>
        <h2>🎵 Music Academy Online</h2>
      </nav>

      <header>
        <h1>Start Your Musical Journey</h1>
        <p>Expert-led lessons for all skill levels.</p>
        <button>Explore All Courses</button>
      </header>

      <div className="search-container">
  <input
    type="text"
    placeholder="Search courses..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

      <section className="courses">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.img} alt={course.title} className="course-img" />
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button 
              className={enrolled.includes(course.id) ? "btn-enrolled" : "btn-enroll"}
              onClick={() => handleEnroll(course.id)}
            >
              {enrolled.includes(course.id) ? "Enrolled ✅" : "Enroll Now"}
            </button>
          </div>
        ))}
      </section>

      <section className="contact-form">
        <h2>Inscríbete a la Academia</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Tu nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Tu correo" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button type="submit">Enviar información</button>
        </form>
      </section> 
    </main>
  );
}

export default App;
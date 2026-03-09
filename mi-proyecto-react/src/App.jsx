import './App.css'

function App() {
  const courses = [
  {
    id: 1,
    title: "Piano Lessons",
    desc: "Master the keys with classical and modern techniques.",
    img: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Guitar Lessons",
    desc: "From basic chords to advanced electric solos.",
    img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Singing Lessons",
    desc: "Improve your range and vocal health with professionals.",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Drum Lessons",
    desc: "Find your rhythm and master the beat with our drum kit basics.",
    img: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?q=80&w=600&auto=format&fit=crop"
  } 
  
];
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

      <section className="courses">
        {courses.map((course) => (
    <div className="course-card" key={course.id}>
      <img src={course.img} alt={course.title} className="course-img" />
      <h3>{course.title}</h3>
      <p>{course.desc}</p>
    </div>
    ))}
      </section>
    </main>
  )
}

export default App
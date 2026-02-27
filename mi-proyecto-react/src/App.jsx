import './App.css'

function App() {
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
        <div className="course-card">
          <h3>Piano Lessons</h3>
          <p>Master the keys with classical and modern techniques.</p>
        </div>

        <div className="course-card">
          <h3>Guitar Lessons</h3>
          <p>From basic chords to advanced electric solos.</p>
        </div>

        <div className="course-card">
          <h3>Singing Lessons</h3>
          <p>Improve your range and vocal health with professionals.</p>
        </div>
      </section>
    </main>
  )
}

export default App
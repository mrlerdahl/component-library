import { useState } from 'react'
import './App.css'
import Badge from "./Components/Badge"
import Banner from "./Components/Banner"

function App() {

  return (
     <>
      <header className="header bounded">
        <h1>My App Header</h1>
      </header>

      <main className="stack bounded">
        <section className="card">
          <Badge />
        </section>

        <section className="card">
          <Banner />
        </section>

        {/* add more <section className="card">…</section> as needed */}
      </main>
    </>
  )
}

export default App

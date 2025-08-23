import { useState } from 'react'
import './App.css'
import Badge from "./Components/Badge"
import Banner from "./Components/Banner"

function App() {

  const colorArr = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'gray']
  const shapeArr = ['square', 'pill']

  const colorSelector = colorArr.map(color => {
    return (
      <button>{color}</button>
    )
  })

  return (
     <>
      <header className="header bounded">
        <h1>My App Header</h1>
      </header>

      <main className="stack bounded">
        <section className="card">
          <h2>Badge Component</h2>
          <div className="badge-selector">
            {colorSelector}
          </div>
          <Badge 
            color = 'red'
            shape = 'pill'
          />
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

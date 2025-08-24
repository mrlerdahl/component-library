import React from 'react'
import './App.css'
import Badge from "./Components/Badge"
import Banner from "./Components/Banner"

function App() {

  const [changeColor, setChangeColor] = React.useState('red')
  const [changeShape, setChangeShape] = React.useState('square')
  const colorArr = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'gray']
  const shapeArr = ['square', 'pill']

  function setColor(e) {
    setChangeColor(color => color=e.target.textContent)
  }
  
  function setShape(e) {
    setChangeShape(shape => shape=e.target.textContent)
  }

  const colorSelector = colorArr.map(color => {
    return (
      <button onClick={setColor}>{color}</button>
    )
  })

  const shapeSelector = shapeArr.map(shape => {
    return (
      <button onClick={setShape}>{shape}</button>
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
            {shapeSelector}
          </div>
          <Badge 
            color = {changeColor}
            shape = {changeShape}
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

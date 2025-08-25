import React from 'react'
import './App.css'
import OptionSelector from './OptionSelector' 
import Badge from "./Components/Badge"
import Banner from "./Components/Banner"

function App() {

  const [changeColor, setChangeColor] = React.useState('red')
  const [changeShape, setChangeShape] = React.useState('square')
  const colorArr = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'gray']
  const shapeArr = ['square', 'pill']

  function setOption(value) {
    colorArr.includes(value) ?
    setChangeColor(value)
    : setChangeShape(value)
  }

  return (
     <>
      <header className="header bounded">
        <h1>My App Header</h1>
      </header>

      <main className="stack bounded">

        <section className="box">
          <h2>
            Badge Component
          </h2>
          <div className="badge-selector">
            <div className="badge-option">
              Color &nbsp;: &nbsp;<OptionSelector 
              options = {colorArr}
              setOption = {setOption}
              />
            </div>
            <div className="badge-option">
              Shape : &nbsp;<OptionSelector 
              options = {shapeArr}
              setOption = {setOption}
              />
            </div>
          </div>
          <Badge 
            color = {changeColor}
            shape = {changeShape}
          />
        </section>

        <section className="box">
          <Banner />
        </section>

        {/* add more <section className="card">…</section> as needed */}
      </main>
    </>
  )
}

export default App

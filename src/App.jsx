import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navarea from './components/Navarea'
import data from './assets/data'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  console.log(data);
  const cards = data.map(card=> {
    return (
        <Card
          key={card.id}
          card={card}
          // title={card.title}
          // location={card.location}
          // googleMapsUrl={card.googleMapsUrl}
          // startDate={card.startDate}
          // endDate={card.endDate}
          // description={card.description}
          // imageUrl={card.imageUrl}
        />
    )
  })
  return (
    <div className="app--div">
      <Navarea />
      {cards}
    </div>
  )
}

export default App

//   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>

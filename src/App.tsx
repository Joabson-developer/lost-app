import React, { useState } from "react"
import { Cards } from "./components/Cards"

import "./App.scss"
import { Header } from "./components/Header"
import { PlayersDialog } from "./components/PlayersDialog"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Header dispatch={() => setOpen(true)} className="header--fixed" />
      <Cards />
      <PlayersDialog open={open} dispatch={() => setOpen(false)} />
    </div>
  )
}

export default App

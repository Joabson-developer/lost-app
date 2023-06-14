import React, { useState } from "react"
import { Card } from "./components/Card"

import "./App.scss"
import { Table } from "./components/Table"
import { Header } from "./components/Header"
import { PlayersDialog } from "./components/PlayersDialog"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Header dispatch={() => setOpen(true)} />
      <Card />
      <PlayersDialog open={open} dispatch={() => setOpen(false)} />
    </div>
  )
}

export default App

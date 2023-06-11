import React, { useState } from "react"
import { Dialog } from "@mui/material"
import { Card } from "./components/Card"

import "./App.scss"

type Clash = {
  title: string
  description: string
  points: number
  length: "unlimited" | number
  time: string
  color: "purple" | "green" | "red"
}

function App() {
  const [open, setOpen] = useState(false)
  const clash: Clash[] = [
    {
      title: "Team Battle",
      description: "All Members can join",
      points: 5,
      length: "unlimited",
      time: "21:00",
      color: "purple"
    },
    {
      title: "Vanguard Battle 1",
      description: "3 V 3",
      points: 2,
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 2",
      description: "3 V 3",
      points: 2,
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 3",
      description: "3 V 3",
      points: 2,
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 4",
      description: "3 V 3",
      points: 2,
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "General Battle 1",
      description: "3 V 3",
      points: 4,
      length: 3,
      time: "21:20",
      color: "green"
    },
    {
      title: "General Battle 2",
      description: "3 V 3",
      points: 4,
      length: 3,
      time: "21:20",
      color: "green"
    },
    {
      title: "Team Battle",
      description: "All Members can join",
      points: 5,
      length: "unlimited",
      time: "21:33",
      color: "purple"
    },
    {
      title: "Ace Battle 1",
      description: "1 V 1",
      points: 3,
      length: 1,
      time: "21:40",
      color: "red"
    },
    {
      title: "Ace Battle 2",
      description: "1 V 1",
      points: 3,
      length: 1,
      time: "21:40",
      color: "red"
    },
    {
      title: "Final Battle",
      description: "1 V 1",
      points: 7,
      length: 1,
      time: "21:53",
      color: "red"
    }
  ]

  return (
    <div className="App">
      <button className="add-member" onClick={() => setOpen(true)}>
        +
      </button>

      <Card clash={clash} />

      <Dialog onClose={() => setOpen(false)} open={open}>
        <h3>xpto</h3>
      </Dialog>
    </div>
  )
}

export default App

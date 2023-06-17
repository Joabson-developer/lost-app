import React, { useContext, useState } from "react"
import { Cards } from "./components/Cards"

import "./App.scss"
import { Header } from "./components/Header"
import { PlayersDialog } from "./components/PlayersDialog"
import { BsWhatsapp } from "react-icons/bs"
import { ClashContext } from "./contexts/clash/clash.context"

function App() {
  const { clash } = useContext(ClashContext)
  const [open, setOpen] = useState(false)

  function sendMessage() {
    const message =
      `*LOST - Clan Clash*
  
` +
      clash
        .map(
          ({ title, description, time, player }) => `title: ${title}
description: ${description}
time: ${time}
players: ${player?.map(({ nickname }) => nickname).join(", ")}`
        )
        .join("\n\n")

    window.open(
      "https://api.whatsapp.com/send?text=" +
        window.encodeURIComponent(message),
      "_blank"
    )
  }

  return (
    <div className="App">
      <Header dispatch={() => setOpen(true)} className="header--fixed" />
      <Cards />
      <PlayersDialog open={open} dispatch={() => setOpen(false)} />

      <button className="whatsapp" onClick={sendMessage}>
        <BsWhatsapp />
      </button>
    </div>
  )
}

export default App

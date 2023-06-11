import React from "react"
import "./App.scss"

function App() {
  const clash = [
    {
      title: "Team Battle",
      description: "All Members can join",
      points: `The winner will obtain 5 Points`,
      length: "unlimited",
      time: "21:00",
      color: "purple"
    },
    {
      title: "Vanguard Battle 1",
      description: "3 V 3",
      points: "The winner will obtain 2 Points",
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 2",
      description: "3 V 3",
      points: "The winner will obtain 2 Points",
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 3",
      description: "3 V 3",
      points: "The winner will obtain 2 Points",
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "Vanguard Battle 4",
      description: "3 V 3",
      points: "The winner will obtain 2 Points",
      length: 3,
      time: "21:07",
      color: "green"
    },
    {
      title: "General Battle 1",
      description: "3 V 3",
      points: "The winner will obtain 4 Points",
      length: 3,
      time: "21:20",
      color: "green"
    },
    {
      title: "General Battle 2",
      description: "3 V 3",
      points: "The winner will obtain 4 Points",
      length: 3,
      time: "21:20",
      color: "green"
    },
    {
      title: "Team Battle",
      description: "All Members can join",
      points: "The winner will obtain 5 Points",
      length: "unlimited",
      time: "21:33",
      color: "purple"
    },
    {
      title: "Ace Battle 1",
      description: "1 V 1",
      points: "The winner will obtain 3 Points",
      length: 1,
      time: "21:40",
      color: "red"
    },
    {
      title: "Ace Battle 2",
      description: "1 V 1",
      points: "The winner will obtain 3 Points",
      length: 1,
      time: "21:40",
      color: "red"
    },
    {
      title: "Final Battle",
      description: "1 V 1",
      points: "The winner will obtain 7 Points",
      length: 1,
      time: "21:53",
      color: "red"
    }
  ]
  return (
    <div className="App">
      {clash.map((card) => (
        <div className="card">
          <h2 className="card__title">{card.title}</h2>
          <div className={`card__content card__content--${card.color}`}>
            <p
              className={`card__description ${
                card.length !== "unlimited" ? "card__description--versus" : ""
              }`}
            >
              {card.description}
            </p>
            <span className="card__points">{card.points}</span>
            <div className="card__time">
              <span>{card.time}Start</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App

import { useContext } from "react"
import { ClashContext } from "../../contexts/clash/clash.context"
import "./style.scss"

export function Card() {
  const { clash, setClash } = useContext(ClashContext)
  return (
    <>
      {clash.map((card: Clash, index) => (
        <div className="card" key={index}>
          <h2 className="card__title">{card.title}</h2>
          <div className={`card__content card__content--${card.color}`}>
            <p
              className={`card__description ${
                card.length !== "unlimited" ? "card__description--versus" : ""
              }`}
            >
              {card.description}
            </p>
            <span className="card__points">
              The winner will obtain <strong>{card.points}</strong> Points
            </span>
            <div className="card__time">
              <span>{card.time}Start</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

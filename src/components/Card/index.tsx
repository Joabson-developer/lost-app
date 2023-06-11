import "./style.scss"

export function Card<T>(props: { clash: T[] }) {
  return (
    <>
      {props.clash.map((card: any) => (
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

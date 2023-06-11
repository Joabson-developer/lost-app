export function Card(props: any) {
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
            <span className="card__points">{card.points}</span>
            <div className="card__time">
              <span>{card.time}Start</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

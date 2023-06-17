import { useContext, useState } from "react"
import { ClashContext } from "../../contexts/clash/clash.context"
import "./style.scss"
import { SelectPlayersDialog } from "../SelectPlayersDialog"

import shortid from "shortid"

import iconProfile from "../../assets/icon-profile.png"

export function Cards() {
  const { clash } = useContext(ClashContext)

  const [controlDialog, setControlDialog] = useState(clash.map(() => false))

  return (
    <>
      {clash.map((card: Clash, index) => (
        <>
          <div className="card" key={shortid.generate()}>
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
              <div className="card__content__players">
                <button
                  className="add-member"
                  onClick={() => {
                    setControlDialog((current) =>
                      current.map(
                        (control, controlIndex) => controlIndex === index
                      )
                    )
                  }}
                >
                  <img src={iconProfile} aria-hidden="true" alt="" />
                  Add players
                </button>
                <ul className="card__content__players__list">
                  {card.player?.map((player: Player) => (
                    <li>
                      <span className="nickname">{player.nickname}</span>
                      <span className="atk">
                        <strong>atk:</strong> {player.atk}
                      </span>
                      <span className="hp">
                        <strong>hp:</strong> {player.hp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__time">
                <span>{card.time}Start</span>
              </div>
            </div>
            <SelectPlayersDialog
              open={controlDialog[index]}
              close={() =>
                setControlDialog((current) => current.map(() => false))
              }
              clash={card}
            />
          </div>
        </>
      ))}
    </>
  )
}

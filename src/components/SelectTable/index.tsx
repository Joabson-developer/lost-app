import "./style.scss"
import { useContext } from "react"
import { PlayersContext } from "../../contexts/players/players.context"

import shortid from "shortid"

type SelectTablePros = {
  clash: Clash
  selected: Player[]
  setSelected: React.Dispatch<React.SetStateAction<Player[]>>
}

export function SelectTable({ clash, selected, setSelected }: SelectTablePros) {
  const { players } = useContext(PlayersContext)

  return (
    <>
      {players.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope="col">--</th>
              <th scope="col">#</th>
              <th scope="col">nick</th>
              <th scope="col">ATK</th>
              <th scope="col">HP</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={shortid.generate()}>
                <th scope="row">
                  <input
                    type="checkbox"
                    name={player.nickname}
                    checked={selected.some(
                      ({ nickname }) => player.nickname === nickname
                    )}
                    onChange={(e) => {
                      if (e.target.checked)
                        setSelected((current) => [...current, player])
                      else
                        setSelected((current) =>
                          current.filter(
                            (currentPlayer) =>
                              currentPlayer.nickname !== player.nickname
                          )
                        )
                    }}
                  />
                </th>
                <th scope="row">{index + 1}</th>
                <td>{player.nickname}</td>
                <td>{player.atk}</td>
                <td>{player.hp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

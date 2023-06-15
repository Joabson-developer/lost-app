import "./style.scss"
import { useContext } from "react"
import { PlayersContext } from "../../contexts/players/players.context"

type SelectTablePros = {
  clash: Clash
}

export function SelectTable({ clash }: SelectTablePros) {
  const { players, setPlayers } = useContext(PlayersContext)
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
              <tr key={index}>
                <th scope="row">
                  <input type="checkbox" name={player.nickname} />
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

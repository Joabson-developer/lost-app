import { BsFillTrashFill, BsPencilFill } from "react-icons/bs"

import "./style.scss"
import { useContext } from "react"
import { PlayersContext } from "../../contexts/players/players.context"

export function Table() {
  const { players, setPlayers } = useContext(PlayersContext)
  return (
    <>
      {players.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">nick</th>
              <th scope="col">ATK</th>
              <th scope="col">HP</th>
              <th scope="col" className="actions">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{player.nickName}</td>
                <td>{player.atk}</td>
                <td>{player.hp}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log("editar")
                    }}
                  >
                    <BsPencilFill />
                  </button>
                  <button
                    onClick={() => {
                      console.log("excluir")
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

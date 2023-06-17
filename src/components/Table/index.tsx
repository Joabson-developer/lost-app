import { useContext } from "react"
import { PlayersContext } from "../../contexts/players/players.context"
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs"
import shortid from "shortid"

import "./style.scss"

export function Table() {
  const { players, setPlayers } = useContext(PlayersContext)
  return (
    <>
      {players.length > 0 && (
        <table>
          <thead>
            <tr>
              <th scope="col" className="px50">
                #
              </th>
              <th scope="col" className="scroll-h">
                nick
              </th>
              <th scope="col">ATK</th>
              <th scope="col">HP</th>
              <th scope="col" className="px75">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={shortid.generate()}>
                <th scope="row" className="px50">
                  {index + 1}
                </th>
                <td className="scroll-h">{player.nickname}</td>
                <td>{player.atk}</td>
                <td>{player.hp}</td>
                <td className="px75">
                  <button
                    onClick={() => {
                      setPlayers((current) =>
                        current.map((currentPlayer, currentIndex) =>
                          currentIndex !== index
                            ? { ...currentPlayer, edit: false }
                            : {
                                ...currentPlayer,
                                edit: true
                              }
                        )
                      )
                    }}
                  >
                    <BsPencilFill />
                  </button>
                  <button
                    onClick={() => {
                      setPlayers((current) =>
                        current.filter(
                          (_, currentIndex) => currentIndex !== index
                        )
                      )
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

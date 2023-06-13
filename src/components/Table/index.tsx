import { BsFillTrashFill, BsPencilFill } from "react-icons/bs"

import "./style.scss"

export function Table<T extends Player>({ players }: { players: T[] }) {
  return (
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
              <button>
                <BsPencilFill />
              </button>
              <button>
                <BsFillTrashFill />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

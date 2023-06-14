import { Button, Dialog, TextField } from "@mui/material"
import { Table } from "../Table"
import "./style.scss"
import { PlayersContext } from "../../contexts/players/players.context"
import { useContext, useState } from "react"

type PlayersDialogProps = {
  open: boolean
  dispatch: () => void
}

export function PlayersDialog({ open, dispatch }: PlayersDialogProps) {
  const { setPlayers } = useContext(PlayersContext)

  const [nickName, setNickName] = useState("")
  const [atk, setAtk] = useState(0)
  const [hp, setHp] = useState(0)

  return (
    <Dialog onClose={dispatch} open={open} maxWidth="sm" fullWidth>
      <div className="form-content">
        <TextField
          id="nickname"
          className="nickname"
          label="nickname"
          variant="standard"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <TextField
          id="atk"
          className="atk"
          label="ATK"
          variant="standard"
          value={atk}
          onChange={(e) => setAtk(+e.target.value)}
        />
        <TextField
          id="hp"
          className="hp"
          label="HP"
          variant="standard"
          value={hp}
          onChange={(e) => setHp(+e.target.value)}
        />

        <div className="button">
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              if (hp && atk && nickName) {
                setPlayers((current) => {
                  return [
                    ...current,
                    {
                      atk,
                      hp,
                      nickName
                    }
                  ]
                })
                setAtk(0)
                setHp(0)
                setNickName("")
              }
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
      <Table />
    </Dialog>
  )
}

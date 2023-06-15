import { Button, Dialog } from "@mui/material"
import { Table } from "../Table"
import { styled } from "@mui/material/styles"
import "./style.scss"
import { PlayersContext } from "../../contexts/players/players.context"
import { useContext, useEffect, useState } from "react"

import closeButton from "../../assets/close-button.png"

type PlayersDialogProps = {
  open: boolean
  dispatch: () => void
}

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#0b2042",
    color: "#fbffff",
    padding: "8px",
    paddingTop: "50px"
  }
}))

export function PlayersDialog({ open, dispatch }: PlayersDialogProps) {
  const { players, setPlayers } = useContext(PlayersContext)

  const [nickname, setNickname] = useState("")
  const [atk, setAtk] = useState("")
  const [hp, setHp] = useState("")

  function onPlayerEdit(): Player | undefined {
    const [edited] = players.filter(({ edit }) => edit)
    return edited
  }

  useEffect(() => {
    const [edited] = players.filter(({ edit }) => edit)
    setNickname(edited?.nickname || "")
    setAtk(edited?.atk || "")
    setHp(edited?.hp || "")
  }, [players])

  return (
    <BootstrapDialog onClose={dispatch} open={open} maxWidth="sm" fullWidth>
      <button aria-label="fechar" className="close" onClick={dispatch}>
        <img src={closeButton} alt="" aria-hidden="true" />
      </button>
      <div className="container">
        <div className="form-content">
          <input
            type="text"
            className="nickname"
            value={nickname}
            placeholder="Digite o nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="number"
            className="atk"
            value={atk}
            placeholder="Digite o ATK"
            onChange={(e) => setAtk(e.target.value)}
          />
          <input
            type="number"
            className="hp"
            value={hp}
            placeholder="Digite o HP"
            onChange={(e) => setHp(e.target.value)}
          />

          <div className="button-group">
            {onPlayerEdit() ? (
              <>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => {
                    if (nickname && atk && hp)
                      setPlayers((current) =>
                        current.map((player) =>
                          player.edit
                            ? {
                                hp,
                                atk,
                                nickname,
                                edit: false
                              }
                            : player
                        )
                      )
                  }}
                >
                  Salvar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  disableElevation
                  onClick={() => {
                    setPlayers((current) =>
                      current.map((player) => ({
                        ...player,
                        edit: false
                      }))
                    )
                  }}
                >
                  Cancelar
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                disableElevation
                onClick={() => {
                  if (hp && atk && nickname) {
                    setPlayers((current) => {
                      return [
                        ...current,
                        {
                          atk,
                          hp,
                          nickname
                        }
                      ]
                    })
                    setAtk("")
                    setHp("")
                    setNickname("")
                  }
                }}
              >
                Adicionar
              </Button>
            )}
          </div>
        </div>
        <Table />
      </div>
    </BootstrapDialog>
  )
}

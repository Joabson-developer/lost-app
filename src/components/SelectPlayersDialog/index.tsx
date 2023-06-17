import { useState, useContext } from "react"
import { Button, Dialog } from "@mui/material"
import { styled } from "@mui/material/styles"
import "./style.scss"

import closeButton from "../../assets/close-button.png"
import { SelectTable } from "../SelectTable"
import { ClashContext } from "../../contexts/clash/clash.context"

type PlayersDialogProps = {
  open: boolean
  close?: () => void
  clash: Clash
}

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#0b2042",
    color: "#fbffff",
    padding: "8px",
    paddingTop: "50px"
  }
}))

export function SelectPlayersDialog({
  open,
  close,
  clash
}: PlayersDialogProps) {
  const { setClash } = useContext(ClashContext)
  const [selected, setSelected] = useState<Player[]>([])

  return (
    <BootstrapDialog onClose={close} open={open} maxWidth="sm" fullWidth>
      <button aria-label="fechar" className="close" onClick={close}>
        <img src={closeButton} alt="" aria-hidden="true" />
      </button>
      <div className="container">
        <SelectTable
          clash={clash}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Button
        className="save"
        variant="contained"
        disableElevation
        onClick={() => {
          setClash((currentClashs) =>
            currentClashs.map((currentClash) => {
              if (
                currentClash.title === clash.title &&
                currentClash.description === clash.description
              ) {
                currentClash = {
                  ...currentClash,
                  player: selected
                }
              }

              return currentClash
            })
          )
          close!()
        }}
      >
        Salvar
      </Button>
    </BootstrapDialog>
  )
}

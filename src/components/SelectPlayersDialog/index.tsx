import { Button, Dialog } from "@mui/material"
import { styled } from "@mui/material/styles"
import "./style.scss"

import closeButton from "../../assets/close-button.png"
import { SelectTable } from "../SelectTable"

type PlayersDialogProps = {
  open: boolean
  dispatch?: () => void
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
  dispatch,
  close,
  clash
}: PlayersDialogProps) {
  return (
    <BootstrapDialog onClose={dispatch} open={open} maxWidth="sm" fullWidth>
      <button aria-label="fechar" className="close" onClick={close}>
        <img src={closeButton} alt="" aria-hidden="true" />
      </button>
      <div className="container">
        <SelectTable clash={clash} />
      </div>
    </BootstrapDialog>
  )
}

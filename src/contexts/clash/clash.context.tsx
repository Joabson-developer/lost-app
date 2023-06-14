import { createContext } from "react"

export type ClashType = {
  clash: Clash[]
  setClash: React.Dispatch<React.SetStateAction<Clash[]>>
}

export const ClashContext = createContext<ClashType>(null!)

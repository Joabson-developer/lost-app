import { useState } from "react"
import { ClashContext } from "./clash.context"

export function ClashProvider({ children }: { children: JSX.Element }) {
  const [clash, setClash] = useState<Clash[]>([])

  return (
    <ClashContext.Provider value={{ clash, setClash }}>
      {children}
    </ClashContext.Provider>
  )
}

import "./style.scss"

import logo from "../../assets/logo.png"
import iconProfile from "../../assets/icon-profile.png"

type HeaderProps = {
  dispatch?: () => void
}

export function Header({ dispatch }: HeaderProps) {
  return (
    <header className="header">
      <img src={logo} alt="Imagem de logo" />
      <button className="add-member" onClick={dispatch}>
        <img src={iconProfile} aria-hidden="true" alt="" />
        Profile
      </button>
    </header>
  )
}

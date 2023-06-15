import "./style.scss"

import logo from "../../assets/logo.png"
import iconProfile from "../../assets/icon-profile.png"

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  dispatch?: () => void
}

export function Header({ dispatch, className, ...rest }: HeaderProps) {
  return (
    <header className={`header${className ? ` ${className}` : ""}`}>
      <img src={logo} alt="Imagem de logo" />
      <button className="add-member" onClick={dispatch}>
        <img src={iconProfile} aria-hidden="true" alt="" />
        Add member
      </button>
    </header>
  )
}

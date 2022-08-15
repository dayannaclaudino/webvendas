import logo from '../../assets/img/logo.svg'

import "./styles.css"

function Header() {
    return (
        <header>
            <div className="webvendas-logo-container">
                <img src={logo} alt="logo-vendas-online" />
                <h1>Vendas Online</h1>
                <p>Desenvolvido por <a href="@dayclaudino">@dayclaudino</a></p>
            </div>
        </header>
    )
  }
  
  export default Header
  


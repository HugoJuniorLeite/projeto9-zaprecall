import logo from '../assets/images/logo.png'

export default function Header(){

    return(
        
       <header>
            <span>
            <img src={logo} alt="logo zaprecall" />
            <strong>ZapRecall</strong>
            </span>
        </header>
        
    )
}

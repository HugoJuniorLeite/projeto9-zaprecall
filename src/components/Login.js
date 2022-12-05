import logo from '../assets/images/logo.png'
import styled from "styled-components"

export default function Login(props){
   const {setLogin} =props
    
        function starGame(){
        setLogin(!true)
        }
    return(
        <LoginGame>
        <img src={logo} alt={logo}/>
        <span>ZapRecall</span>
        <button data-test="start-btn" onClick={starGame}>Iniciar Recall!</button>
        </LoginGame>
    )
}

const LoginGame= styled.main`
    width:100vw;
    min-height:100vh;
    background-color: #FB6B6B;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    img{
        height: 161px;
        width: 136px;
        margin-bottom:13px;
    }
    span{
        font-family: 'Righteous';
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color:#FFFFFF;
        margin-bottom:30px;
    }
    button{
        height: 54px;
        width: 246px;
        color:#D70900;
        background-color:#FFFFFF;
        border-radius: 5px;
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
    }
`

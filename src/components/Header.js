import styled from 'styled-components'
import logo from '../assets/images/logo.png'

export default function Header() {

    return (

        <HeaderCss>
            <span>
                <img src={logo} alt="logo zaprecall" />
                <strong>ZapRecall</strong>
            </span>
        </HeaderCss>

    )
}


const HeaderCss = styled.header`
    width:255.61px;
    height:60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:42px;
img{
    width:52px;
    height:60px;
}
strong{
    color:#FFFFFF;
    font-size:36px;
    font-height:400;
    line-height:44.7px;
    letter:-1.2%;
    font-family: 'Righteous';
}`

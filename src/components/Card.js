import { useState } from "react"
import setaPlay from "../assets/images/seta_play.png"
import setaVirar from "../assets/images/seta_virar.png"
import iconSure from "../assets/images/icone_certo.png"
import iconAlmostRemember from "../assets/images/icone_quase.png"
import iconNotRemember from "../assets/images/icone_erro.png"
import styled from "styled-components"

export default function Card(props) {

    const { numberQuestion, question, answer, plays, setPlays } = props

    const [image, setImage] = useState(setaPlay)
    const [textCard, setTextCard] = useState(numberQuestion)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [color, setColor] = useState("#333333")

    let contPlays = 0
    let userAnswer = []

    function start() {

        if (textCard.includes(numberQuestion)) {
            setTextCard(question)
            setImage(setaVirar)
        }

        if (textCard.includes(question)) {
            setTextCard(answer)
            setImage()
        }
    }

    function notRemember() {
        contPlays++
        setTextCard(numberQuestion)
        setImage(iconNotRemember)
        setPlays(plays + contPlays)
        setButtonDisabled(true)
        userAnswer.push(iconNotRemember)
        setColor('#FF3030')
    }

    function almostRemember() {
        contPlays++
        setTextCard(numberQuestion)
        setImage(iconAlmostRemember)
        setPlays(plays + contPlays)
        setButtonDisabled(true)
        userAnswer.push(iconAlmostRemember)
        setColor('#FF922E')
    }

    function sure() {
        contPlays++
        setTextCard(numberQuestion)
        setImage(iconSure)
        setPlays(plays + contPlays)
        setButtonDisabled(true)
        setColor("#2FBE34")
        userAnswer.push(iconSure)
    }
    console.log(userAnswer,"resposta")

    return (

        <CardCss cor={color} text={textCard.includes(numberQuestion)} cardSecond={textCard.includes(question)}>
            <span data-test="flashcard-text">{textCard}</span>

            {textCard !== answer
                ? (<button disabled={buttonDisabled}
                    onClick={start}
                >
                    <img data-test="play-btn" src={image} alt={image} />
                </button>)
                : (<div>
                    <button data-test="no-btn" onClick={notRemember}  >Não lembrei</button>
                    <button data-test="partial-btn" onClick={almostRemember} >Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={sure}>Zap!</button>
                </div>)

            }
        </CardCss>

    )
}


const CardCss = styled.li`
    position:relative;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => props.text === true ? "700" : "400"};
    font-size: ${props => props.text === true ? "16px" : "18px"};
    line-height:${props => props.text === true ? "19.2px" : "21.6px"};
    color: ${props => props.cor};
    background-color:${props => props.text === true ? "#FFFFFF" : "#FFFFD4"};
    width: 300px;
    min-height: ${props => props.text === true ? "65px" : "131px"};
    text-decoration: ${props => props.cor === "#333333" ? "none" : "line-through"};
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: ${props => props.text === true ? "center" : ""}; ;
    padding: 0 19px 0 15px;
    margin-bottom:25px;
    border-radius:5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
button{
    position:${props => props.cardSecond === true ? "absolute" : "static"};   
    right: 15px;
    bottom:6px;
    border:none;
    background-color:transparent;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    color:#FFFFFF;
}
div{
    display: flex;
    margin-left:17px;
    margin-top:21.83px;
}
div button{
    width: 85.17px;
    height: 37.17px;
    margin-bottom:12px;
}
div button:nth-child(1){
    background-color:#FF3030;
}
div button:nth-child(2){
    background-color:#FF922E;
    margin:0 7.74px 0 7.74px;
}
div button:nth-child(3){
    background-color:#2FBE34;
}
img{

    width: 23px;
    height: 23px;
}
span{
    padding-top: ${props => props.text === true ? "0" : "18px"};
}
`

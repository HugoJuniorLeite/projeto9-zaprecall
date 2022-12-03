import { useState } from "react"
import setaPlay from "../assets/images/seta_play.png"
import setaVirar from "../assets/images/seta_virar.png"
import iconSure from "../assets/images/icone_certo.png"
import iconAlmostRemember from "../assets/images/icone_quase.png"
import iconNotRemember from "../assets/images/icone_erro.png"

export default function Card(props) {


    const { id, numberQuestion, question, answer, plays, setPlays } = props

    const [image, setImage] = useState(setaPlay)
    const [textCard, setTextCard] = useState(numberQuestion)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    let contRemember = 0
    let contAlmostRemember = 0
    let contSure = 0
    let contPlays = 0

    console.log(plays, "play cards card")
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
        setTextCard(numberQuestion)
        setImage(iconNotRemember)
        contPlays++
        setPlays(plays + contPlays)
        setButtonDisabled(true)
    }

    function almostRemember() {
        setTextCard(numberQuestion)
        setImage(iconAlmostRemember)
        contAlmostRemember++
        contPlays++
        setPlays(plays + contPlays)
        setButtonDisabled(true)

    }

    function sure() {
        setTextCard(numberQuestion)
        setImage(iconSure)
        contSure++
        contPlays++
        setPlays(plays + contPlays)
        console.log(plays, "play card sure")
        setButtonDisabled(true)
    }

    return (
        /*<>
            {cardLevel===0
            ? <li>{numberQuestion}
            <img onClick={start} key={id}  src={setaPlay} alt="seta play"/>
            </li>
            : <li>{question}
            <img onClick={questions} key={id}  src={setaVirar} alt="seta virar"/>
            </li>}
        
            </>  */

        <>
            <li>{textCard}
                {textCard !== answer
                    ? (<button disabled={buttonDisabled}
                        onClick={start} key={id}
                        className="buttom-image">
                        <img src={image} alt="seta virar" />
                    </button>)
                    : (<>
                        <button onClick={notRemember} key={id}>Não lembrei</button>
                        <button onClick={almostRemember} key={id}>Quase não lembrei</button>
                        <button onClick={sure} key={id}>Zap!</button>
                    </>)
                }
            </li>
        </>
    )
}
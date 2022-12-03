
import Card from "./Card"
import question from "../questions"
import Footer from "./Footer"
import { useState } from "react"


export default function Cards(){

const [plays,setPlays]=useState(0)

console.log(plays,"play cards")
    return(


<>       
            {question.map((e=> <Card 
			key={e.id} numberQuestion={e.numberQuestion }
			 question={e.question} answer={e.answer} 
			 id={e.id} plays={plays} setPlays={setPlays}/> 
			))}
			<Footer plays={plays} length={question.length} />
</>		
    )
} 
 
//


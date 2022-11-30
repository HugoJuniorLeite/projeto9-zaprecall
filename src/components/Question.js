import cards from "../cards"

export default function Questions(props){

let cloneCards={...cards}



return (
<>
{cards.map(e=>(
    <div> 
        <spa>{e.numberQuestion} 
        <img src="#" alt="seta de proximo"/>
        </spa>
        </div>
))}
</>

)
}

Questions()
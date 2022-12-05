
import Card from "./Card"
import question from "../questions"
import Footer from "./Footer"
import { useState } from "react"
import styled from "styled-components"


export default function Cards() {

	const [plays, setPlays] = useState(0)


	return (


		<>       <ContainerCards>
			{question.map((e => <Card data-test="flashcard"
				key={e.id} numberQuestion={e.numberQuestion}
				question={e.question} answer={e.answer}
				plays={plays} setPlays={setPlays} />
			))}
		</ContainerCards>
			<Footer plays={plays} length={question.length} />
		</>
	)
}

const ContainerCards = styled.ul`
padding-top:51px;
padding-bottom:100px;
`
import styled from "styled-components"
import Cards from "./Cards"
import Header from "./Header"

export default function Body() {

    return (
        <Container>

            <Header />
            <Cards />

        </Container>

    )
}


const Container = styled.main`
    width:100vw;
    min-height:100vh;
    background-color: #FB6B6B;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components"

export default function Footer(props) {
    const { plays, length } = props


    return (
        <FooterCss data-test="footer">
            {plays}/{length} CONCLUÍDOS
        </FooterCss>
    )
}


const FooterCss = styled.footer`
    position: fixed;
    bottom:0;
    left:0;
    width:100vw;
    min-height:70px;
    background-color:#FFFFFF;
    text-align:center;
    padding-top:24px;
    font-size:18px;
    line-height:21.6px;
`
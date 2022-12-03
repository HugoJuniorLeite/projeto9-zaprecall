
export default function Footer(props){
const{plays, length}=props
    
console.log(plays,"play footer")
    return(
        <>
              <h2>{plays}/{length} CONCLUÍDOS</h2>
        </>
    )
}

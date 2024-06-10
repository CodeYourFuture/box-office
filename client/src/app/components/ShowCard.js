export default function ShowCard(props) {
    
    return <section>
        <h3>{props.title}</h3>
        <img src={props.image} alt={"show-poster"}/>
    </section>

}
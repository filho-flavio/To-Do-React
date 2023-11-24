import "./Card.css"

export function Card(props) {
    return (
        <>
            <div className="card">
                <p>{props.text}</p>
                <img src="./img/cancelar.png" alt="" />
            </div>
        </>
    )
}
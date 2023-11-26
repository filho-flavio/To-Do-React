import "./Card.css"

export function Card(props) {
    return (
        <>
            <div className="card">
                <p>{props.text}</p>
                <div className="imgs">
                    <img src={"edit.png"} alt="" />
                    <img src={"x.png"} alt="" />
                </div>
            </div>
        </>
    )
}
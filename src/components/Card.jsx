import "./Card.css"

export function Card({text, editTask, deleteTask}) {
    return (
        <>
            <div className="card">
                <p>{text}</p>
                <div className="imgs">
                    <img className="btEdit" src={"edit.png"} alt="" onClick={editTask} />
                    <img className="btDelete" src={"x.png"} alt="" onClick={deleteTask} />
                </div>
            </div>
        </>
    )
}
import "./Card.css"

export function Card({ id, text, completed, editTask, deleteTask, handleTask }) {
    return (
        <>
            <div
                className={`card ${completed ? "card-status" : ""}`}
                id={id}
                key={id}
                onClick={() => handleTask(id)}
            >
                <p>{text}</p>
                <div className="imgs">
                    <img className="btEdit" src={"edit.png"} alt="" onClick={() => editTask(id)} />
                    <img className="btDelete" src={"x.png"} alt="" onClick={() => deleteTask(id)} />
                </div>
            </div>
        </>
    )
}
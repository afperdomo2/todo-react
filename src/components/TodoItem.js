import React from "react";

function TodoItem(props) {
    return (
        <div className="card mb-2">
            <div className="card-body d-flex pb-0">
                <div className="form-check col-md-11 mt-1 mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={props.completed}
                    />
                    <label
                        className={`form-check-label ${props.completed && "text-success text-decoration-line-through"
                            }`}
                    >
                        {props.text}
                    </label>
                </div>
                <div className="col-md-1 mb-3">
                    <button className="btn btn-sm btn-danger">Borrar</button>
                </div>
            </div>
        </div>
    );
}

export { TodoItem };

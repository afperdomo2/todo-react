import React from "react";

function TodoItem(props) {
    return (
        <div className="card mb-2">
            <div className="card-body d-flex pb-0">
                <span className="col-md-1">✅</span>
                <p className="col-md-10">{props.text}</p>
                <span className="col-md-1 text-right">🗑️</span>
            </div>
        </div>
    );
}

export { TodoItem };

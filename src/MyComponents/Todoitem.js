import React from 'react';

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100 bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

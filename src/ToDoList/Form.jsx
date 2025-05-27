import React from "react";

const Form = () => {
  return (
    <div className="container bg-navbar mt-5 py-3">
      <h1>ToDoList</h1>
      <div className="input-group my-4 gap-2">
        <input
          type="text"
          className="form-control rounded-end"
          placeholder="Enter new todo"
          aria-label="Enter new todo"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-primary rounded"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>

      <div className="container">
        <div className="input-group d-flex justify-content-end align-items-center rounded  mb-2 bg-white">
          <input
            type="text"
            className="form-control"
            placeholder="delectus aut autem"
            aria-label="delectus aut autem"
          />
          <div className="input-button me-2">
            <button className="btn btn-success btn-sm me-2" type="button">
              Complete
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              Delete
            </button>
          </div>
        </div>

        <div className="input-group d-flex justify-content-end align-items-center rounded  mb-2 bg-white">
          <input
            type="text"
            className="form-control"
            placeholder="quis ut nam facilis et oficia qui"
            aria-label="quis ut nam facilis et oficia qui"
          />
          <div className="input-button me-2">
            <button className="btn btn-success btn-sm me-2" type="button">
              Complete
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              Delete
            </button>
          </div>
        </div>

        <div className="input-group d-flex justify-content-end align-items-center rounded  mb-2 bg-white">
          <input
            type="text"
            className="form-control"
            placeholder="laboriosam mollitia et enim quasi adipisci quia provident illum"
            aria-label="laboriosam mollitia et enim quasi adipisci quia provident illum"
          />
          <div className="input-button me-2">
            <button className="btn btn-success btn-sm me-2" type="button">
              Complete
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              Delete
            </button>
          </div>
        </div>

        <div className="input-group d-flex justify-content-end align-items-center rounded  mb-2 bg-info">
          <input
            type="text"
            className="form-control bg rounded text-decoration-line-through"
            placeholder="fugial veniam minus"
            aria-label="fugial veniam minus"
          />
          <div className="input-button me-2">
            <button className="btn btn-warning btn-sm me-2" type="button">
              Reject
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              Delete
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center mb-2 rounded">
          <input
            type="text"
            className="form-control bg rounded text-decoration-line-through"
            placeholder="el poro tempore"
            aria-label="el poro tempore"
          />
          <div className="input-button me-2">
            <button className="btn btn-warning btn-sm me-2" type="button">
              Reject
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

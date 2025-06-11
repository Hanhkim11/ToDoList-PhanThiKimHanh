import React, { useState, useEffect } from "react";
import Axios from "axios";

const Form = () => {
  const [getAllTask, setgetAllTask] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const fetchGetAllTask = async () => {
    const result = await Axios.get(
      "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
    );
    setgetAllTask(result.data);
  };

  const addTask = async () => {
    const data = {
      taskName: valueInput,
    };

    await Axios.post("https://svcy.myclass.vn/api/ToDoList/AddTask", data).then(
      (res) => {
        fetchGetAllTask();
      }
    );
  };

  const deleteTask = async (value) => {
    await Axios.delete(
      `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${value.taskName}`
    ).then((res) => {
      fetchGetAllTask();
    });
  };

  const doneTask = async (value) => {
    console.log("value nhận được:", value);
    console.log(
      "value sau khi . đến key nào đó trong object value.taskName",
      value.taskName
    );

    await Axios.put(
      "https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=" + value
    ).then((res) => {
      fetchGetAllTask();
    });
  };

  const rejectTask = async (value) => {
    console.log(value);
    await Axios.put(
      `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${value.taskName}`
    ).then((res) => {
      fetchGetAllTask();
    });
  };

  const renderGetAllTask = () => {
    return getAllTask.map((item) => {
      console.log(item);
      return (
        <div
          className={`${
            item.status
              ? "d-flex border justify-content-between my-4 text-light bg-success"
              : "d-flex border justify-content-between my-4 text-decoration-line-through"
          }`}
          key={item.taskName}
        >
          <li className="list-group">{item.taskName}</li>
          <div>
            <button
              className="btn btn-danger me-2"
              onClick={() => deleteTask(item)}
            >
              Xoá
            </button>
            <button
              className="btn btn-success me-2"
              onClick={() => {
                doneTask(item.taskName);
              }}
            >
              Hoàn thành
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                rejectTask(item);
              }}
            >
              Từ chối
            </button>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchGetAllTask();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="my-4">To do list</h1>
        <input
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          className="w-75 mb-3 me-2"
          style={{ height: "45px" }}
          type="text"
          placeholder="Enter new todo"
        />
        <button onClick={addTask} className="btn btn-info fs-4">
          Thêm
        </button>
        {renderGetAllTask()}
      </div>
    </div>
  );
};

export default Form;

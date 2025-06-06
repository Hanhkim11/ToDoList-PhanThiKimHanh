import React, { useState, useEffect } from "react";
import Axios from "axios";

const Form = () => {
  const [dataToDoList, setDataListToDoList] = useState([]);
  const [listThem, setListThem] = useState([]);
  const [listHoanThanh, setListHoanThanh] = useState([]);
  const [listTuChoi, setListTuChoi] = useState([]);

  // ─────────── API ───────────
  const fetchDataToDoList = async () => {
    try {
      const { data } = await Axios.get(
        "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
      );
      setDataListToDoList(data);
    } catch (err) {
      console.error("Lấy danh sách task thất bại:", err);
    }
  };

  // handlers
  const handleThemList = (task) => setListThem((p) => [...p, task]);
  const handleHoanThanh = (task) => {
    setListHoanThanh((p) => [...p, task]);
    setListThem((p) => p.filter((i) => i.taskName !== task.taskName));
  };
  const handleTuChoi = (task) => {
    setListTuChoi((p) => [...p, task]);
    setListThem((p) => p.filter((i) => i.taskName !== task.taskName));
  };
  const handleXoa = (task) => {
    const filter = (p) => p.filter((i) => i.taskName !== task.taskName);
    setListThem(filter);
    setListHoanThanh(filter);
    setListTuChoi(filter);
  };

  useEffect(() => {
    fetchDataToDoList();
  }, []);

  //render
  const renderItems = (list, extraButtons) =>
    list.map((item) => (
      <li
        key={item.taskName}
        className="list-group-item d-flex justify-content-between align-items-center my-1"
      >
        {item.taskName}
        {extraButtons(item)}
      </li>
    ));

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">To Do List</h1>

      {/* Danh sách lấy từ API */}
      <ul className="list-group mb-4">
        {renderItems(dataToDoList, (item) => (
          <div>
            <button
              onClick={() => handleThemList(item)}
              className="btn btn-primary me-2"
            >
              Thêm
            </button>
            <button
              onClick={() => handleXoa(item)}
              className="btn btn-danger me-2"
            >
              Xoá
            </button>
            <button
              onClick={() => handleHoanThanh(item)}
              className="btn btn-success me-2"
            >
              Hoàn thành
            </button>
            <button
              onClick={() => handleTuChoi(item)}
              className="btn btn-warning"
            >
              Từ chối
            </button>
          </div>
        ))}
      </ul>

      {/* List Add */}
      <h2>List Add</h2>
      <ul className="list-group mb-4">
        {renderItems(listThem, (item) => (
          <div>
            <button
              onClick={() => handleHoanThanh(item)}
              className="btn btn-success me-2"
            >
              Hoàn thành
            </button>
            <button
              onClick={() => handleTuChoi(item)}
              className="btn btn-danger"
            >
              Từ chối
            </button>
          </div>
        ))}
      </ul>

      {/* List Finish */}
      <h2>List Finish</h2>
      <ul className="list-group mb-4">
        {renderItems(listHoanThanh, (item) => (
          <button onClick={() => handleXoa(item)} className="btn btn-danger">
            Xoá
          </button>
        ))}
      </ul>

      {/* List Reject */}
      <h2>List Reject</h2>
      <ul className="list-group">
        {renderItems(listTuChoi, (item) => (
          <button onClick={() => handleXoa(item)} className="btn btn-danger">
            Xoá
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Form;

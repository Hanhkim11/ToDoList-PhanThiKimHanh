import React, { useState, useEffect } from "react";
import Axios from "axios";

const Form = () => {
  const [dataToDoList, setDataListToDoList] = useState([]);
  const [listThem, setListThem] = useState([]);
  const [listHoanThanh, setListHoanThanh] = useState([]);
  const [listTuChoi, setListTuChoi] = useState([]);

  // Gọi hàm Api
  const fetchDataToDoList = async () => {
    const result = await Axios.get(
      "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
    );
    setDataListToDoList(result.data);
  };

  // handlers
  const handleThemList = (task) => {
    setListThem([...listThem, task]);
  };

  const handleHoanThanh = (task) => {
    debugger;
    setListHoanThanh([...listHoanThanh, task]);
    setListThem(
      listThem.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
  };
  const handleTuChoi = (task) => {
    setListTuChoi([...listTuChoi, task]);
    setListThem(
      listThem.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
  };

  const handleXoa = (task) => {
    setListThem(
      listThem.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
    setListHoanThanh(
      listHoanThanh.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
    setListTuChoi(
      listTuChoi.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
  };

  const renderListToDoList = () => {
    // 7 item
    return dataToDoList?.map((item, index) => {
      return (
        <div className="d-flex border justify-content-between mb-2" key={index}>
          <li className="list-group-item">{item.taskName}</li>
          <div>
            <button
              onClick={() => {
                handleThemList(item);
              }}
              className="btn btn-primary me-2"
            >
              Thêm
            </button>
            <button className="btn btn-danger me-2">Xoá</button>
            <button className="btn btn-success me-2">Hoàn thành</button>
            <button className="btn btn-warning">Từ chối</button>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchDataToDoList();
  }, []);

  //render
  return (
    <div className="container">
      <h1>To do list</h1>
      <ul className="list-group">{renderListToDoList()}</ul>
      <div className="container">
        <div>
          <div className="col">
            <h2>Add list</h2>
            <ul className="list-group">
              {listThem.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item">{item.taskName}</li>
                    <div>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => {
                          handleHoanThanh(item);
                        }}
                      >
                        Hoàn thành
                      </button>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                          handleTuChoi(item);
                        }}
                      >
                        Từ chối
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h2>Finished list</h2>
            <ul className="list-group">
              {listHoanThanh.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item">{item.taskName}</li>
                    <button
                      onClick={() => {
                        handleXoa(item);
                      }}
                      className="btn btn-danger me-2"
                    >
                      Xoá
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h2>Reject list</h2>
            <ul className="list-group">
              {listTuChoi.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item">{item.taskName}</li>
                    <button
                      onClick={() => {
                        handleXoa(item);
                      }}
                      className="btn btn-danger me-2"
                    >
                      Xoá
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import Axios from "axios";

const Form = () => {
  const [dataToDoList, setDataListToDoList] = useState();

  const [listThem, setListThem] = useState([]);

  const [listHoanThanh, setListHoanThanh] = useState([]);
  const [listTuChoi, setListTuChoi] = useState([]);

  // hàm gọi api
  const fetchDataToDoList = async () => {
    const result = await Axios.get(
      "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
    );
    setDataListToDoList(result.data);
  };

  const handleThemList = (task) => {
    setListThem([...listThem, task]);
  };

  const handleHoanThanh = (task) => {
    setListHoanThanh([...listHoanThanh, task]);
    setListThem(
      listThem.filter((item) => {
        return item.taskName !== task.taskName;
      })
    );
  };
  // hàm xử lí từ chối
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
          <div className="">
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

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">To Do List</h1>
      <ul className="list-group">{renderListToDoList()}</ul>
      <div class="container">
        <div class="col">
          <div>
            <h2 className="mt-3">List Add</h2>
            <ul className="list-group">
              {listThem.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item my-1">{item.taskName}</li>
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
            <h2>List Finish </h2>
            <ul className="list-group">
              {listHoanThanh.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item my-1">{item.taskName}</li>
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
          <div class="col">
            <h2>List Reject </h2>
            <ul className="list-group">
              {listTuChoi.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between" key={index}>
                    <li className="list-group-item my-1">{item.taskName}</li>
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

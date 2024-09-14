import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteRed,
  uncomplete,
  complete,
  editSaveData,
} from "../Slice";
import { useState } from "react";
import Table from "react-bootstrap/Table";
const ToDoList = () => {
  const [mytask, setMytsk] = useState("");
  const [editBtn, setEditBtn] = useState(true);
  const [editId, setEditId] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.task);

  const recDelete = (id) => {
    dispatch(deleteRed(id));
  };
  const editData = (id, work) => {
    setMytsk(work);
    setEditId(id);
    setEditBtn(false);
  };
  const editSave = () => {
    dispatch(editSaveData({ id: editId, work: mytask}));
    setEditBtn(true);
    setEditId(editId);
    setMytsk(work);
  };

  let sno = 0;
  const ans = data.map((key) => {
    sno++;
    return (
      <>
        <tr>
          <td>{sno}</td>
          <td>
            {key.status ? (
              <span
                style={{
                  color: "green",
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                }}
              >
                {key.work}
              </span>
            ) : (
              <span
                style={{
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  color:'orange'
                }}
              >
                {key.work}
              </span>
            )}
          </td>
          <td>
            {key.status ? (
              <button id="btn"
                onClick={() => {
                  dispatch(uncomplete(key.id));
                }}
              >
                Uncomplete
              </button>
            ) : (
              <button id="btn"
                onClick={() => {
                  dispatch(complete(key.id));
                }}
              >
                Complete
              </button>
            )}
          </td>
          <td>
            <button id="btn"
              onClick={() => {
                recDelete(key.id);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button id="btn"
              onClick={() => {
                editData(key.id, key.work,key.status);
              }}
            >
              Edit Data
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <center>
        <h1>ToDoList</h1>
      </center>
      <div id="hero">
        <Form style={{ display: "flex", gap: "5px" }}>
          <Form.Control
            type="text"
            placeholder="enter your task"
            value={mytask}
            onChange={(e) => {
              setMytsk(e.target.value);
            }}
          />
          {editBtn ? (
            <Button
              style={{ width: "150px" }}
              variant="primary"
              onClick={() => {
                dispatch(
                  addTask({
                    id: Math.random() * 100,
                    work: mytask,
                    status: false,
                  })
                );
              }}
            >
              Add Task
            </Button>
          ) : 
            <Button variant="warning" style={{width:'150px'}} onClick={editSave}>edit data</Button>
          }
        </Form>
        <div id="table">
          <Table striped bordered hover border="">
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Complete / Uncomplete</th>
                <th>Update</th>
                <th>Edit Data</th>
              </tr>
            </thead>
            {ans}
          </Table>
        </div>
      </div>
    </>
  );
};
export default ToDoList;

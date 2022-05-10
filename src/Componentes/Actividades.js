//Todo = actividades
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Actividades({ actividades, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(actividades.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (actividades.complete === true) {
      setNewTitle(actividades.title);
    } else {
      actividades.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="actividades">
      <input
        style={{ textDecoration: actividades.completed && "line-through" }}
        type="text"
        value={actividades.title === "" ? newTitle : actividades.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(actividades)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(actividades, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(actividades.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

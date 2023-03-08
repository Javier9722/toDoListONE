import React from "react";

export const Delete = ({ update, setUpdate, taskId }) => {
  const obtenerData = () => localStorage.getItem("task");
  const subirData = (data) => localStorage.setItem("task", data);
  const deleteTask = () => {
    const dataString = obtenerData();
    const dataArray = JSON.parse(dataString);
    const newArray = dataArray.filter((task) => task.id !== taskId);
    let newid = 0;
    newArray.map((item) => {
      item.id = newid;
      newid++;
    });
    subirData(JSON.stringify(newArray));
    setUpdate(update === 0 ? 1 : 0);
  };

  return (
    <div>
      <i
        className="far fa-times-circle cursor-pointer"
        onClick={deleteTask}
      ></i>
    </div>
  );
};

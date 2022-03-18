import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let isPresent = localStorage.getItem("Tasks");
  let DisplayTasks;
  if (isPresent === null) {
    DisplayTasks = [];
  } else {
    DisplayTasks = JSON.parse(localStorage.getItem("Tasks"));
  }

  const HandleDelete = (Task) => {
    setTask(
      TaskData.filter((e) => {
        return e !== Task;
      })
    );
  };

  const onSubmit = (title, desc) => {
    // console.log("i am workngi", title, desc)
    let id;
    if (TaskData.length === 0) {
      id = 1;
    } else {
      id = TaskData[TaskData.length - 1].id + 1;
    }
    const mytasks = {
      id: id,
      task: title,
      desc: desc,
    };
    // console.log(mytasks)
    setTask([...TaskData, mytasks]);
  };

  const [TaskData, setTask] = useState(DisplayTasks);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(TaskData));
  }, [TaskData]);

  return (
    <>
        <Header title="Task Tracker" />
        <AddTask onSubmit={onSubmit} />
          <Tasks TaskData={TaskData} HandleDelete={HandleDelete} />
        <Footer />
    </>
  );
}

export default App;

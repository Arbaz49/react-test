import React, { useState } from "react";
import PageLayout from "../HOC/PageLayout";
import CustomTextField from "../components/TextField";


const ToDo = () => {
    const [value, setValue] = useState("");
    // const [todoList, setTodoList] = useState([]);
    return (
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "100%" }}>

            <h1>To Do List</h1>

            <CustomTextField
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            placeholder={"Enter ToDo..."}
            type="text"
            value={value}
            />

            <span>{value}</span>
        </div>
    )
}

export default PageLayout(ToDo);
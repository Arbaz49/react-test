import React, { useState } from "react";
import PageLayout from "../HOC/PageLayout";
import CustomTextField from "../components/TextField";


const ToDo = () => {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleAddItem = () => {
        const todo = {
            id: todoList.length+1,
            value: value,
            completed: false
        }
        const updatedTodos = [...todoList, todo]
        setTodoList(updatedTodos)
        setValue("")
    }
    const handleDelete = (index) => {
        console.log(index)
        const updatedTodos = todoList.filter((ele) => ele.id !== index)
        setTodoList(updatedTodos)
    }
    const handleCompleted = (id) => {
        let todo = todoList.map((ele) => {
            if (ele.id === id) {
                return { ...ele, completed: !ele.completed }
            } else {
                return ele
            }
        });
        console.log(id, todo);
        setTodoList(todo)

    }
    return (
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "100%" }}>

            <h1>To Do List</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <CustomTextField
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    placeholder={"Enter ToDo..."}
                    type="text"
                    value={value}
                />
                <button style={{ height: "30px", cursor: "pointer" }} onClick={handleAddItem}>Add item</button>
            </div>


            <div className="todos">
                {
                    todoList.map((todo) => {
                        return <div style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            width:"300px",
                            justifyContent:"space-between",
                            margin:"10px 0px"
                        }} key={todo.id}>
                            <input onChange={() => handleCompleted(todo.id)} type="checkbox" checked={todo.completed} name="checkBox" id={todo.id} />
                            {todo.value}
                            <button onClick={() => handleDelete(todo.id)}>delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PageLayout(ToDo);
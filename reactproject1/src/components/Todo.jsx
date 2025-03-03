
import React, { useRef, useState } from 'react'
import list_icon from '../assets/todo.png'
import Items from './Items' 

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    const addItem = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            title: inputText,
            isComplete:false
        }
        setTodoList((todo) => [...todo, newTodo]);
        inputRef.current.value = "";
    }

    const deleteItem = (id) => {
        return setTodoList((todo) => todo.filter((item) => item.id !== id));
    }

    const toggleItem = (id) => {
        return setTodoList((todo) => todo.map((item) => {
            if (item.id === id) {
                return { ...item, isComplete: !item.isComplete }
            }
            return item;
        }));
    }
    return (
        <div className='todo-app'>
            <div>
                <h2 className=''> To-Do List <img className='' src={list_icon} /></h2>
            </div>


            <div className='row'>
                <input ref={inputRef} type="text" />
                <button onClick={addItem}>ADD +</button>
            </div>


            <div className='todo-list'>
                {todoList.map((item, index) => {
                    return <Items key={index} id={item.id} title={item.title} isComplete={item.isComplete} deleteItem={deleteItem} toggleItem={toggleItem} />
                })}
                
            </div>
        </div>

    )
}

export default Todo

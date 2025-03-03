 
import React from 'react' 
import remove_icon from '../assets/remove.png'

const Items = ({ id, title, isComplete, deleteItem, toggleItem }) => {

    return (
        <div className={isComplete ? 'todo-item complete' :'todo-item'}>
            <div onClick={() => { toggleItem(id) }}> 
                <p>{title}</p>
                <span><img onClick={() => { deleteItem(id) }} className='' src={remove_icon} /></span>  

            </div>
        </div>

    )
}

export default Items

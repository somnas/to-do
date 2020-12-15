import React from 'react'

export default function Form() {

    const Form = () => {
        return(
            <form>
                <input type="text" class="todo-input" />
                <button class="todo-button" type="submit">
                    <i class="fas fa-plus-square"></i>
                </button>
                <div class="select">
                    <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        )
    }
    return (
        <div>
            <p>Form goes here</p>
        </div>
    )
}

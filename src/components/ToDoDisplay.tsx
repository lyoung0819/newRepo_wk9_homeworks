import { useState } from 'react'
import CreateTasksForm from './CreateTaskForm'
import { TaskType, TaskFormDataType } from '../types';
import Task from './Task';

export default function ToDoDisplay(){
    const [tasks, setTasks] = useState<TaskType[]>([
        {
            title: "Laundry",
            description: "Fold laundry",
            dueDate: "Tuedsay",
            priority: 2,
            complete: false
        },
        {
            title: "Dishes",
            description: "Unload dishwasher",
            dueDate: "Monday",
            priority: 5,
            complete: false
        }
    ])


    const addNewTask = (newTaskData: TaskFormDataType) => {
        const newTask: TaskType = {...newTaskData, title:'', description:'', dueDate:'', complete:false, priority:0}
        setTasks([...tasks, newTask]) 
      }

    return (
        <>
        <h1>Welcome to the Task List!</h1>
        <CreateTasksForm addNewTask={addNewTask} />
        {tasks.map( t => <Task key={t.title} task={t} />)}
        </>
    )
}
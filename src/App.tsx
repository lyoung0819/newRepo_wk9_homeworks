import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import Task from './components/Task'
import { ToDoType, TaskType } from './types';


export default function App() {
    const [newToDo, setNewToDo] = useState<ToDoType[]>([]);
    const [task, newTask] = useState<TaskType[]>([])

    return (
      <Container>
          <Task />
      </Container>
    )
}



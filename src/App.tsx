import Container from 'react-bootstrap/Container'
// import { useState } from 'react'
// import { ToDoType, TaskType } from './types';
import ToDoDisplay from './components/ToDoDisplay';


export default function App() {
    // const [newToDo, setNewToDo] = useState<TaskType[]>([]);
    
  
    return (
      <Container>
          <ToDoDisplay />
      </Container>
    )
}



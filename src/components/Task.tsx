// TASK COMPONENT
// import { useState } from 'react';
import { TaskType } from "../types"
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'

type TaskProps = {
    task: TaskType,
}

export default function Task({ task }: TaskProps) {
  // let [status, setStatus] = useState(false);
  
  // const handleTaskCompleted = (event: React.ChangeEvent) => {
  //     event.preventDefault();
  //     setStatus(status=!status); 
  // }

  return (
      <Card className='mt-3' bg='info' text='white'>
          <Card.Header>{task.title} </Card.Header>
            <Card.Body>
              <Card.Subtitle>Priority Level: {task.priority}</Card.Subtitle>
              <Card.Text>Due Date: {task.dueDate}</Card.Text>
              <Card.Text>Description: {task.description}</Card.Text>
            </Card.Body>
      </Card>
  )
}
//         <Button variant='Info' onClick={() => {handleTaskCompleted}}>Mark Completed</Button>

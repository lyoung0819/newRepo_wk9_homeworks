// TASK COMPONENT
import { useState } from 'react';
import { TaskType } from "../types"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

type TaskProps = {
  newTask: TaskType,
}

export default function Task({ newTask }: TaskProps) {
  let [status, setStatus] = useState(false);
  

  const handleTaskCompleted = (event: React.ChangeEvent) => {
      event.preventDefault();
      setStatus(status=!status); 
  }

  return (
    <>
      <Card>
        <Card.Header>{newTask.title} </Card.Header>
        <Card.Body>
          <Card.Subtitle>{newTask.dueDate}</Card.Subtitle>
          <Card.Subtitle>'Priority Level:'{newTask.priority}</Card.Subtitle>
          <Card.Text>{newTask.description}</Card.Text>
          <Button variant='Info' onClick={() => {handleTaskCompleted}}>Mark Completed</Button>
        </Card.Body>
      </Card>
    </>
  )
}
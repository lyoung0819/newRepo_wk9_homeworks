import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TaskType } from '../types';


export default function CreateTasksForm() {
    const [newTask, setNewTask] = useState<TaskType>({ title: '', description: '', dueDate: '', complete: false, priority: 0 })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
        setNewTask({...newTask, [event.target.name]:event.target.value})

    }

    return (
        <>
        <Card>
            <Card.Header>Add New Task:</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' placeholder='Enter Task Title' value={newTask.title} onChange={handleInputChange} />
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' placeholder='Enter Task Title' value={newTask.description} onChange={handleInputChange} />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name='dueDate' placeholder='Enter Task Title' value={newTask.dueDate} onChange={handleInputChange} />
                    <Form.Label>Priority</Form.Label>
                    <Form.Control name='priority' placeholder='Enter Task Title' value={newTask.priority} onChange={handleInputChange} />
                </Form>
                <Button>

                </Button>
            </Card.Body>
        </Card>
        </>
    )
}
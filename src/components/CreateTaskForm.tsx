import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TaskFormDataType } from '../types';


type CreateTaskFormProps = {
    addNewTask: (data: TaskFormDataType) => void
}

export default function CreateTasksForm({ addNewTask }: CreateTaskFormProps) {
    const [newTask, setNewTask] = useState<TaskFormDataType>({ title: '', description: '', dueDate: '', priority: 0 })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
        setNewTask({...newTask, [event.target.name]:event.target.value })

    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewTask(newTask);
    }

    return (
        <>
        <Card className='mt-5'>
            <Card.Header>Add New Task:</Card.Header>
            <Card.Body>
                <Form onSubmit={handleFormSubmit} >
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' placeholder='Enter Task Title' value={newTask.title} onChange={handleInputChange} />
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' placeholder='Enter Task Description' value={newTask.description} onChange={handleInputChange} />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name='dueDate' placeholder='Enter Task Due Date' value={newTask.dueDate} onChange={handleInputChange} />
                    <Form.Label>Priority</Form.Label>
                    <Form.Control name='priority' placeholder='Enter Task Priority' value={newTask.priority} onChange={handleInputChange} />
                    <Button className='w-100 mt-3 btn btn-dark' type='submit'>Add Task</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
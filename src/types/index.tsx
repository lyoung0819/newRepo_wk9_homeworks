

export type ToDoType = {
    task: TaskType[],
  }
  
export type TaskType = {
      title: string,
      description: string,
      dueDate: string,
      complete: boolean
      priority: number
  }
  
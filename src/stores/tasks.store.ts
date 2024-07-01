import {create} from "zustand";


export interface Task {
  id: number,
  title: string,
  content: string
}

interface TaskStore {
  tasks: Task[],
  lastId: number,
  addNewTask: (task: Task) => void,
  removeTask: (id: number) => void,
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: 1,
      title: 'title 1',
      content: 'content 1'
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2'
    },
    {
      id: 3,
      title: 'title 3',
      content: 'content 3'
    },
    {
      id: 4,
      title: 'title 4',
      content: 'content 4'
    },
  ],
  
  lastId: 4,
  
  addNewTask: (task: Task) => set(state => {
    const newTaskList = [task, ...state.tasks];
    return {tasks: newTaskList};
  }),
  
  removeTask: (id: number) => set(state => {
    const newTaskList = state.tasks.filter(item => item.id != id)
    console.log(newTaskList, id)
    return {tasks: newTaskList}
  }),
  
  
}))



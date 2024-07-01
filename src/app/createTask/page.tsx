'use client'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {Task, useTaskStore} from "@/stores/tasks.store";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function CreateTaskPage() {
  const {push} = useRouter()
  const {lastId,addNewTask} = useTaskStore()
  const [newTask, setNewTask] = useState<Task>({
    id: lastId + 1,
    title: '',
    content: '',
  })
  
  
  
  return <div className='w-full h-full text-white py-32 px-16 flex flex-col gap-16'>
    <span className='text-6xl text-black'>Создать задачу</span>
    <div className='flex flex-col gap-16 w-full'>
      <div className="grid w-full items-center gap-1.5 text-black">
        <Label htmlFor="email">Название задачи</Label>
        <Input type="email" id="email" placeholder="Название задачи..." value={newTask.title}
               onChange={(e) => setNewTask({
                 ...newTask,
                 title: e.target.value
               })}/>
      </div>
      <div className="grid w-full items-center gap-1.5 text-black">
        <Label htmlFor="email">Содержание задачи</Label>
        <Input type="email" id="email" placeholder="Содержание задачи..." value={newTask.content}
               onChange={(e) => setNewTask({
                 ...newTask,
                 content: e.target.value
               })}/>
      </div>
      <Button onClick={() => {
        push('/taskBoard')
        addNewTask(newTask)
      }} disabled={newTask.content == '' || newTask.title == ''}>
        Создать задачу
      </Button>
    </div>
  </div>
}
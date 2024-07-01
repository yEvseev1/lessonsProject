'use client'
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import Link from "next/link";
import {useTaskStore} from "@/stores/tasks.store";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function TaskBoard() {
  const {tasks} = useTaskStore()
  return <div className='w-full h-full text-white py-32 px-16 flex flex-col gap-16'>
    <header className='flex items-center text-black text-5xl'>
      <div className='flex items-center text-center gap-10'>
        Список задач
        <Link href='/createTask'>
          <Button className='bg-[#46D638] text-black hover:bg-transparent flex gap-4'>
            <PlusCircle className='w-[20px] h-[20px]'/> Добавить задачу
          </Button>
        </Link>
      </div>
    </header>
    {/*Блок со списком задач*/}
    <div>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
        {
          tasks.map((task, index) => <AccordionItem key={index} value={`item-${index}`}
                                                    className='text-black border-[1px] border-black rounded-xl px-2'>
            <AccordionTrigger>{task.title}</AccordionTrigger>
            <AccordionContent>
              {task.content}
            </AccordionContent>
          </AccordionItem>)
        }
      </Accordion>
    </div>
  </div>
}
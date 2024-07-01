import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  
  
  return <div className='flex gap-8 items-center h-full justify-center text-3xl'>
    <Link href='/taskBoard'>
      <Button className='bg-[#46D638] text-black hover:bg-transparent'>
        Войти
      </Button>
    </Link>
  </div>
}
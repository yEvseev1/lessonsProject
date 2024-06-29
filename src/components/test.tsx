export default function Test({title, date, content}: {
  title: string
  date: string
  content: string
}) {
  
  return <div className='h-[300px] w-[300px] bg-amber-200 px-4 py-2 space-y-8'>
      {/*header block*/}
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          {title}
        </div>
        <div className='text-md font-extralight
         hover:underline hover:cursor-pointer active:text-[100px]'>
          {date}
        </div>
      </div>
      {/*content block*/}
      <div>
        {content}
      </div>
    </div>
}

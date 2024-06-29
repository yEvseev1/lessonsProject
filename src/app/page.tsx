import Test from "@/components/test";

export default function Home() {
  
  const testString = 'fsd fsdf dsfdsf dsfds f f' +
    'gds fsdf dsf dsf sdf sdf sd fdsf sdf sdfds'
  
  return (
    <div className='w-full h-full flex justify-center items-center flex-wrap gap-4'>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
    </div>
  );
}

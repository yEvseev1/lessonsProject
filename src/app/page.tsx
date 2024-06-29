import Test from "@/components/test";

export default function Home() {
  
  const testString = 'fsd fsdf dsfdsf dsfds f f' +
    'gds fsdf dsf dsf sdf sdf sd fdsf sdf sdfds'
  
  return (
    <main className='h-full'>
      <Test title='Title of card' date='29.06.24' content={testString}/>
    </main>
  );
}

import Test from "@/components/test";

//Массив с фейк данными(как раз пример использования интерфейса)
interface Card {
  title: string
  date: string | Date
  content: string
}

const cardsArray: Card[] = [
  {
    title: 'Карточка 1',
    date: '28.06.2024',
    content: 'fsdff sd fsd fds f f ss f dsf df sd fsd fds1'
  },
  {
    title: 'Карточка 2',
    date: '28.06.2024',
    content: 'fsdff sd fsd fds f f ss f dsf df sd fsd fds2'
  },
  {
    title: 'Карточка 3',
    date: '28.06.2024',
    content: 'fsdff sd fsd fds f f ss f dsf df sd fsd fds3'
  },
  {
    title: 'Карточка 4',
    date: '28.06.2024',
    content: 'fsdff sd fsd fds f f ss f dsf df sd fsd fds4'
  },
  {
    title: 'Карточка 5',
    date: '28.06.2024',
    content: 'fsdff sd fsd fds f f ss f dsf df sd fsd fds5'
  },
]

export default function Home() {
  
  const testString = 'fsd fsdf dsfdsf dsfds f f' +
    'gds fsdf dsf dsf sdf sdf sd fdsf sdf sdfds'
  
  return (
    <div className='w-full h-full flex justify-center items-center flex-wrap gap-4'>
      {/*Обычное переиспользование, руками*/}
      <Test title='Title of card' date='29.06.24' content={testString}/>
      <Test title='Title of card' date='29.06.24' content={testString}/>
      {/*Использование компоненты, проходя по массиву объектов*/}
      {/*Такой кейс будет у всех на практике*/}
      {
        cardsArray.map((card,index) => <Test key={index} title={card.title} date={card.date}
                                     content={card.content}/>)
      }
    </div>
  );
}

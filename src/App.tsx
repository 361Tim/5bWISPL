import CardContainer from './components/CardContainer'


const cardData = [
  {
    name: 'Susi Quattro',
    imgSrc: 'https://picsum.photos/300/',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut...'
  },
  {
    name: 'Stella Starlight',
    imgSrc: 'https://picsum.photos/300',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut...'
  },
  {
    name: 'Paula Paulsen',
    imgSrc: 'https://picsum.photos/300',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut...'
  },
  {
    name: 'Paula Paulsen',
    imgSrc: 'https://picsum.photos/300',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut...'
  },
  {
    name: 'Paula Paulsen',
    imgSrc: 'https://picsum.photos/300',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut...'
  },

];

function App() {
  return (
    <div className="bg-[#3c3c23] text-[#f2f2f2] min-h-screen p-6">
      <header className="text-3xl font-bold text-right p-8">
        HTL Dornbirn 5bWI
      </header>
      <div >
        <CardContainer
          cardsData={cardData} />
      </div>
    </div>
  );
}

export default App;

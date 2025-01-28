import Card from "./Card"

type CardType = {
    imgSrc: string,
    name: string,
    description: string
}

type CardContainerType = {
    cardsData: CardType[]
}

export default function CardContainer({ cardsData }: CardContainerType) {
    return (
        <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4, lg:grid-cols-6 2xl:grid-cols-8 gap-x-4 gap-y-6 p-10 justify-items-center'>
            {cardsData.map((cardData) => {
                return (
                    <Card
                        key={cardData.description + cardData.imgSrc}
                        imgSrc={cardData.imgSrc}
                        name={cardData.name}
                        description={cardData.description}
                    />
                )
            })}
        </div>
    )
}
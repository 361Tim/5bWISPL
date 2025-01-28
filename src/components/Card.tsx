
interface CardProps {
    name: string;
    imgSrc: string;
    description: string;
}

function Card({ name, imgSrc, description }: CardProps) {
    return (
        <div className="bg-slate-200 rounded-xl overflow-hidden">
            <div>
                <img className="object-cover overflow-hidden w-[100%] h-48" src={imgSrc} />
            </div>
            <div className="p-6 text-xs grid gap-y-5">
                <div className="font-bold">{description}</div>
            </div>
            <div>{name}</div>
        </div>
    );
}

export default Card;

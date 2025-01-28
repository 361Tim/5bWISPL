interface CardProps {
    name: string;
    imgSrc: string;
    description: string;
}

function Card({ name, imgSrc, description }: CardProps) {
    return (
        <div className="bg-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div>
                <img
                    className="object-cover w-full h-48"
                    src={imgSrc}
                    alt={name}
                />
            </div>
            <div className="p-4 text-center">
                <div className="font-bold text-lg mb-2">{name}</div>
                <div className="text-gray-600 text-sm">{description}</div>
            </div>
        </div>
    );
}

export default Card;

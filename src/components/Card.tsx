import React from 'react';

function Card({ name, imgSrc, description }) {
    return (
        <div className="bg-[#2b2b17] rounded-lg overflow-hidden shadow-lg">
            <img src={imgSrc} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-300 mt-2">{description}</p>
            </div>
        </div>
    );
}

export default Card;

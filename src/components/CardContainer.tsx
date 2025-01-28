import { useState, useEffect } from "react";
import Card from "./Card";

type Person = {
    firstname: string;
    lastname: string;
    image: string;
    birthday: string;
};

export default function CardContainer() {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch("http://10.115.1.37:8055/items/people")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Directus data:", data);
                if (data && data.data) {
                    setPeople(data.data);
                }
            })
            .catch((error) => {
                console.error("Fehler beim Laden der Daten:", error);
            })

    }, []);


    return (
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-x-4 gap-y-6 p-10 justify-items-center">
            {people.map((person) => (
                <Card
                    key={`${person.firstname}-${person.lastname}`}
                    imgSrc={"http://10.115.1.37:8055/assets/" + person.image}
                    name={`${person.firstname} ${person.lastname}`}
                    description={`Geburtstag: ${person.birthday}`}
                />
            ))}
        </div>
    );
}

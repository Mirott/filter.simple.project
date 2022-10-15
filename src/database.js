import { faker } from '@faker-js/faker';

export const generateRandomData = () => {

    const groups = ["Krzesła", "Szafki", "Komody"]
    const rooms = ["Sypialnia", "Korytarz", "Łazienka"]
    const producents = ["TableShop", "Mańkowscy", "Drewnowo"]

    const newProducts = [];

    for(let i=0; i < 1000; i++) {

        const newSingleProduct = {
            producent: producents[Math.floor(Math.random() * producents.length)],
            name: faker.commerce.product(),
            id: i,
            group: groups[Math.floor(Math.random() * groups.length)],
            room: rooms[Math.floor(Math.random() * rooms.length)],
        }

        newProducts.push(newSingleProduct)
    }

    return newProducts;
}


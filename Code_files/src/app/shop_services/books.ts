export interface Book {
    id: number;
    author: string;
    title: string;
    price: number;
    image: string;
}

//Just a prototype for testing and start of this part of the app
export const books = [
    {
        id: 1,
        author: 'Freida McFadden',
        title: 'The Housemaid',
        price: 17,
        image: 'https://m.media-amazon.com/images/P/1538742578.01._SCLZZZZZZZ_SX500_.jpg'
    },
    {
        id: 2,
        author: 'Collen Hoover',
        title: 'Verity',
        price: 13,
        image: 'https://m.media-amazon.com/images/I/41ZLnc34EiL.jpg'
    },
    {
        id: 3,
        author: 'William Golding',
        title: 'Lord of the Flies',
        price: 13,
        image: 'https://m.media-amazon.com/images/I/81WUAoL-wFL.jpg'
    }
  ];
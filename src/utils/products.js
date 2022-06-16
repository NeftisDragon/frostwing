//cSpell: disable
const products = [
    {
        id: 0,
        name: 'AMD Athlon PRO 300GE',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 1100.00,
        stock: 10,
        category: 'AMD',
    },
    {
        id: 1,
        name: 'Intel Celeron G5925',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 49.95,
        stock: 5,
        category: 'Intel',
    },
    {
        id: 2,
        name: 'Intel Celeron G6900',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 70.00,
        stock: 23,
        categroy: 'Intel',
    },
    {
        id: 3,
        name: 'Intel Core i3-10105F',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 78.99,
        stock: 7,
        category: 'Intel',
    },
    {
        id: 4,
        name: 'Intel Core i3-12100F',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 111.99,
        stock: 13,
        category: 'Intel',
    },
    {
        id: 5,
        name: 'Intel Core i5-10500T',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 192.00,
        stock: 11,
        category: 'Intel',
    },
    {
        id: 6,
        name: 'Intel Core i5-12500T',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 202.00,
        stock: 21,
        category: 'Intel',
    },
    {
        id: 7,
        name: 'Intel Core i7-7700',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 321.85,
        stock: 16,
        category: 'Intel',
    },
    {
        id: 8,
        name: 'Intel Core i7-11700F',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 289.98,
        stock: 19,
        category: 'Intel',
    },
    {
        id: 9,
        name: 'Intel Core i7-12700F',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 312.97,
        stock: 19,
        category: 'Intel',
    },
    {
        id: 10,
        name: 'Intel Core i9-10900X',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 564.03,
        stock: 2,
        category: 'Intel',
    },
    {
        id: 11,
        name: 'Intel Core i9-11900K',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 389.99,
        stock: 9,
        category: 'Intel',
    },
    {
        id: 12,
        name: 'Intel Corn i9-12900KS',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 749.99,
        stock: 6,
        category: 'Intel',
    },
    {
        id: 13,
        name: 'Intel Pentium G6605',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 86.00,
        stock: 16,
        category: 'Intel',
    },
    {
        id: 14,
        name: 'AMD Ryzen 5 5600X',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 198.88,
        stock: 11,
        category: 'AMD',
    },
    {
        id: 15,
        name: 'AMD Ryzen 7 5700G',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 272.99,
        stock: 20,
        category: 'AMD',
    },
    {
        id: 16,
        name: 'AMD Ryzen 9 5950X',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 546.99,
        stock: 9,
        category: 'AMD',
    },
    {
        id: 17,
        name: 'AMD Ryzen Threadripper PRO 3995WX',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 7459.79,
        stock: 1,
        category: 'AMD',
    }
]

export default products;

export const getProducts = (time, task, error) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(task);
            rej(error);
        }, time)
    })
}

export const getProduct = (time, id, error) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products.find(product => product.id === id));
            rej(error);
        }, time)
    })
}
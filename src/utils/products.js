const products = [
    {
        id: 0,
        name: 'Product 0',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 200,
        stock: 10,
    },
    {
        id: 1,
        name: 'Product 1',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 400,
        stock: 5,
    },
    {
        id: 2,
        name: 'Product 2',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 120,
        stock: 3,
    },
    {
        id: 3,
        name: 'Product 3',
        overview: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptates!',
        price: 100,
        stock: 7,
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

export const getProduct = (time, task, error) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(task);
            rej(error);
        }, time)
    })
}
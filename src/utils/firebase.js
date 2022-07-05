//cSpell: disable

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
});

var db = firebase.firestore();


const products = [
    {
        id: "010931952",
        name: 'AMD Athlon PRO 300GE',
        overview: '/assets/images/CPUs/Athlon_PRO_300GE.jpg',
        description: "Athlon PRO 300GE is a 64-bit dual-core low-end performance x86 workstation microprocessor introduced by AMD in late 2019. This processor is based on AMD's Zen+ microarchitecture and is fabricated on a 12 nm process. The PRO 300GE operates at a base frequency of 3.4 GHz with a TDP of 35 W.",
        price: 1100.00,
        stock: 10,
        category: 'AMD',
    },
    {
        id: "528494686",
        name: 'Intel Celeron G5925',
        overview: '/assets/images/CPUs/Celeron_G5925.jpg',
        description: 'Featuring a 3.6 GHz base clock speed, 4MB of cache memory, and 16 PCIe lanes, this dual-core, two-thread processor is deigned quickly run and multitask a variety of applications. Its performance can be further enhanced with Intel Optane Memory, which caches frequently accessed data.',
        price: 49.95,
        stock: 5,
        category: 'Intel',
    },
    {
        id: "945723612",
        name: 'Intel Celeron G6900',
        overview: '/assets/images/CPUs/Celeron_G6900.jpg',
        description: 'This 12th generation 3.4 GHz processor features two Performance cores with 4MB of cache and it supports up to 2 threads, providing the power to run and multitask a variety of applications.',
        price: 70.00,
        stock: 23,
        categroy: 'Intel',
    },
    {
        id: "113377331",
        name: 'Intel Core i3-10105F',
        overview: '/assets/images/CPUs/i3-10105F.jpg',
        description: 'The Core i3-10105F 3.7 GHz Quad-Core LGA 1200 Processor from Intel has a base clock speed of 3.7 GHz and comes with features such as Intel Optane Memory support, Intel Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology.',
        price: 78.99,
        stock: 7,
        category: 'Intel',
    },
    {
        id: "424177009",
        name: 'Intel Core i3-12100F',
        overview: '/assets/images/CPUs/i3-12100F.jpg',
        description: '12th Gen Intel® Core™ i3-12100F desktop processor, without processor graphics. Featuring PCIe Gen 5.0 & 4.0 support, DDR5 and DDR4 support, 12th Gen Intel® Core™ i3 desktop processors are optimized for productivity. Discrete graphics required. Intel® Laminar RM1 included in the box.',
        price: 111.99,
        stock: 13,
        category: 'Intel',
    },
    {
        id: "889349661",
        name: 'Intel Core i5-10500T',
        overview: '/assets/images/CPUs/i5-10500T.jpg',
        description: 'This is desktop processor primarily aimed at office systems. It has 6 cores and 12 threads, and is based on 14 nm manufacturing technology, with a maximum frequency of 3800 MHz and a locked multiplier.',
        price: 192.00,
        stock: 11,
        category: 'Intel',
    },
    {
        id: "055555320",
        name: 'Intel Core i5-12500T',
        overview: '/assets/images/CPUs/i5-12500T.jpg',
        description: 'This is Alder Lake-S architecture desktop processor primarily aimed at office systems. It has 6 cores and 12 threads, and is based on Intel 7 manufacturing technology, with a maximum frequency of 4400 MHz and a locked multiplier.',
        price: 202.00,
        stock: 21,
        category: 'Intel',
    },
    {
        id: "266240263",
        name: 'Intel Core i7-7700',
        overview: '/assets/images/CPUs/i7-7700.jpg',
        description: 'The Core i7-7700 3.6 GHz Quad-Core LGA 1151 Processor from Intel has a base clock speed of 3.6 GHz and comes with features such as Intel Turbo Boost 2.0 and Intel Hyper-Threading technology.',
        price: 321.85,
        stock: 16,
        category: 'Intel',
    },
    {
        id: "831448127",
        name: 'Intel Core i7-11700F',
        overview: '/assets/images/CPUs/i7-11700F.jpg',
        description: 'The Intel Core i7-11700F processor has 8 cores and 16 threads with 16 MB of cache. It offers high performance with a base frequency of 2.5 GHz and up to 4.9 GHz in Turbo mode. Its 65W TDP allows it to offer high operating frequencies while keeping power consumption under control.',
        price: 289.98,
        stock: 19,
        category: 'Intel',
    },
    {
        id: "017233122",
        name: 'Intel Core i7-12700F',
        overview: '/assets/images/CPUs/i7-12700F.jpg',
        description: "Built using a Hybrid Core architecture with the Intel 7 process, this 12th generation desktop processor's 12 cores combine the performance of four Efficient cores and eight 2.1 GHz Performance cores.",
        price: 312.97,
        stock: 19,
        category: 'Intel',
    },
    {
        id: "657821711",
        name: 'Intel Core i9-10900X',
        overview: '/assets/images/CPUs/i9-10900X.jpg',
        description: 'With Intel Turbo Boost 2.0 technology, the maximum turbo frequency this processor can achieve is 4.5 GHz, and with Intel Turbo Boost 3.0 technology, it can further be boosted to 4.7 GHz. Additionally, this processor features 10 cores with 20 threads in an LGA 2066 socket, has 19.25MB of cache memory, and 48 PCIe lanes.',
        price: 564.03,
        stock: 2,
        category: 'Intel',
    },
    {
        id: "862231460",
        name: 'Intel Core i9-11900K',
        overview: '/assets/images/CPUs/i9-11900K.jpg',
        description: 'The Intel Core i9-11900K processor has 8 cores and 16 threads with 16 MB of cache. It offers high performance with its base frequency of 3.5 GHz and up to 5.3 GHz in Turbo mode. Its unlocked multiplier gives it the possibility to increase its frequency via overclocking for even more performance.',
        price: 389.99,
        stock: 9,
        category: 'Intel',
    },
    {
        id: "550431229",
        name: 'Intel Corn i9-12900KS',
        overview: '/assets/images/CPUs/i9-12900KS.jpg',
        description: 'Featuring Intel® Thermal Velocity Boost, Intel® Adaptive Boost Technology, PCIe Gen 5.0 & 4.0 support and DDR5 and DDR4 support. 12th Gen Intel® Core™ i9 desktop processors are optimized for enthusiast gamers and serious creators and deliver high performance.',
        price: 749.99,
        stock: 6,
        category: 'Intel',
    },
    {
        id: "148301680",
        name: 'Intel Pentium G6605',
        overview: '/assets/images/CPUs/Pentium_G6605.jpg',
        description: 'Featuring a 4.3 GHz base clock speed, 4MB of cache memory, and 16 PCIe lanes, this dual-core, four-thread processor is deigned run and multitask a variety of applications. Its performance can be further enhanced with Intel Optane Memory, which caches frequently accessed data.',
        price: 86.00,
        stock: 16,
        category: 'Intel',
    },
    {
        id: "471612051",
        name: 'AMD Ryzen 5 5600X',
        overview: '/assets/images/CPUs/Ryzen_5_5600X.jpg',
        description: 'With a base clock speed of 3.7 GHz and a max boost clock speed of 4.6 GHz in addition to 32MB of L3 Cache, the Ryzen 5 5600X is built to deliver the power needed to smoothly handle tasks ranging from content creation to immersive gaming experiences.',
        price: 198.88,
        stock: 11,
        category: 'AMD',
    },
    {
        id: "675027409",
        name: 'AMD Ryzen 7 5700G',
        overview: '/assets/images/CPUs/Ryzen_7_5700G.jpg',
        description: 'With a base clock speed of 3.8 GHz and a max boost clock speed of 4.6 GHz in addition to 16MB of L3 Cache, the Ryzen 7 5700G is built to deliver the performance needed to smoothly handle a variety of demanding tasks. The integrated AMD Radeon graphics is designed to provide high frame rates for fast-action games while boosting the performance of content creation applications.',
        price: 272.99,
        stock: 20,
        category: 'AMD',
    },
    {
        id: "394556257",
        name: 'AMD Ryzen 9 5950X',
        overview: '/assets/images/CPUs/Ryzen_9_5950X.jpg',
        description: 'With a base clock speed of 3.4 GHz and a max boost clock speed of 4.9 GHz in addition to 64MB of L3 Cache, the Ryzen 9 5950X is built to deliver the power needed to smoothly handle tasks ranging from content creation to immersive gaming experiences.',
        price: 546.99,
        stock: 9,
        category: 'AMD',
    },
    {
        id: "327656904",
        name: 'AMD Ryzen Threadripper PRO 3995WX',
        overview: '/assets/images/CPUs/Ryzen_Threadripper_PRO_3995WX.jpg',
        description: 'The AMD Ryzen Threadripper Pro 3995WX is a high-end workstation processor with 64 cores (8 per chiplet) based on the Zen 2 architecture. The CPU offers a base clock speed of 2.7 GHz and can boost up to 4.2 GHz.',
        price: 7459.79,
        stock: 1,
        category: 'AMD',
    }
]

products.forEach((obj) => {
    db.collection("products").add({
        ...obj
    }).then((docRef) => {
        console.log("Document written with ID", docRef.id);
    }).catch((error) => {
        console.error("Error adding docuent: ", error);
    })
});
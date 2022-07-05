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
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Athlon_PRO_300GE.jpg?alt=media&token=b2b5c9b0-0184-464c-8ae8-6d6e6754d8b2',
        description: "Athlon PRO 300GE is a 64-bit dual-core low-end performance x86 workstation microprocessor introduced by AMD in late 2019. This processor is based on AMD's Zen+ microarchitecture and is fabricated on a 12 nm process. The PRO 300GE operates at a base frequency of 3.4 GHz with a TDP of 35 W.",
        price: 1100.00,
        stock: 10,
        category: 'AMD',
    },
    {
        id: "528494686",
        name: 'Intel Celeron G5925',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Celeron_G5925.jpg?alt=media&token=8b5734a4-75c4-4e61-aaac-4b31df665deb',
        description: 'Featuring a 3.6 GHz base clock speed, 4MB of cache memory, and 16 PCIe lanes, this dual-core, two-thread processor is deigned quickly run and multitask a variety of applications. Its performance can be further enhanced with Intel Optane Memory, which caches frequently accessed data.',
        price: 49.95,
        stock: 5,
        category: 'Intel',
    },
    {
        id: "945723612",
        name: 'Intel Celeron G6900',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Celeron_G6900.jpg?alt=media&token=807686c9-3446-4db9-9e7b-4153d6560688',
        description: 'This 12th generation 3.4 GHz processor features two Performance cores with 4MB of cache and it supports up to 2 threads, providing the power to run and multitask a variety of applications.',
        price: 70.00,
        stock: 23,
        categroy: 'Intel',
    },
    {
        id: "113377331",
        name: 'Intel Core i3-10105F',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i3-10105F.jpg?alt=media&token=3f4faa71-6888-4613-9715-ca6bc435afcc',
        description: 'The Core i3-10105F 3.7 GHz Quad-Core LGA 1200 Processor from Intel has a base clock speed of 3.7 GHz and comes with features such as Intel Optane Memory support, Intel Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology.',
        price: 78.99,
        stock: 7,
        category: 'Intel',
    },
    {
        id: "424177009",
        name: 'Intel Core i3-12100F',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i3-12100F.jpg?alt=media&token=d82b78de-abaa-4955-b576-cf620f87fcb0',
        description: '12th Gen Intel® Core™ i3-12100F desktop processor, without processor graphics. Featuring PCIe Gen 5.0 & 4.0 support, DDR5 and DDR4 support, 12th Gen Intel® Core™ i3 desktop processors are optimized for productivity. Discrete graphics required. Intel® Laminar RM1 included in the box.',
        price: 111.99,
        stock: 13,
        category: 'Intel',
    },
    {
        id: "889349661",
        name: 'Intel Core i5-10500T',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i5-10500T.jpg?alt=media&token=1063e565-a8fc-423d-9d80-8db93ed4dcca',
        description: 'This is desktop processor primarily aimed at office systems. It has 6 cores and 12 threads, and is based on 14 nm manufacturing technology, with a maximum frequency of 3800 MHz and a locked multiplier.',
        price: 192.00,
        stock: 11,
        category: 'Intel',
    },
    {
        id: "055555320",
        name: 'Intel Core i5-12500T',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i5-12500T.jpg?alt=media&token=edd05fd5-f240-4506-9bc0-229223ebe624',
        description: 'This is Alder Lake-S architecture desktop processor primarily aimed at office systems. It has 6 cores and 12 threads, and is based on Intel 7 manufacturing technology, with a maximum frequency of 4400 MHz and a locked multiplier.',
        price: 202.00,
        stock: 21,
        category: 'Intel',
    },
    {
        id: "266240263",
        name: 'Intel Core i7-7700',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i7-7700.jpg?alt=media&token=83dc1dd0-a20b-4bc1-bb73-9f6557f312ee',
        description: 'The Core i7-7700 3.6 GHz Quad-Core LGA 1151 Processor from Intel has a base clock speed of 3.6 GHz and comes with features such as Intel Turbo Boost 2.0 and Intel Hyper-Threading technology.',
        price: 321.85,
        stock: 16,
        category: 'Intel',
    },
    {
        id: "831448127",
        name: 'Intel Core i7-11700F',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i7-11700F.jpg?alt=media&token=596fa200-66ba-4d45-9ed9-bde1ea260a69',
        description: 'The Intel Core i7-11700F processor has 8 cores and 16 threads with 16 MB of cache. It offers high performance with a base frequency of 2.5 GHz and up to 4.9 GHz in Turbo mode. Its 65W TDP allows it to offer high operating frequencies while keeping power consumption under control.',
        price: 289.98,
        stock: 19,
        category: 'Intel',
    },
    {
        id: "017233122",
        name: 'Intel Core i7-12700F',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i7-12700F.jpg?alt=media&token=567d026a-963d-45b2-ad1a-e23d23e9a299',
        description: "Built using a Hybrid Core architecture with the Intel 7 process, this 12th generation desktop processor's 12 cores combine the performance of four Efficient cores and eight 2.1 GHz Performance cores.",
        price: 312.97,
        stock: 19,
        category: 'Intel',
    },
    {
        id: "657821711",
        name: 'Intel Core i9-10900X',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i9-10900X.jpg?alt=media&token=f5f41c3d-533d-480d-80c2-457128a3d95c',
        description: 'With Intel Turbo Boost 2.0 technology, the maximum turbo frequency this processor can achieve is 4.5 GHz, and with Intel Turbo Boost 3.0 technology, it can further be boosted to 4.7 GHz. Additionally, this processor features 10 cores with 20 threads in an LGA 2066 socket, has 19.25MB of cache memory, and 48 PCIe lanes.',
        price: 564.03,
        stock: 2,
        category: 'Intel',
    },
    {
        id: "862231460",
        name: 'Intel Core i9-11900K',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i9-11900K.jpg?alt=media&token=c5952e1b-7cb6-4087-92e2-7980dd84799b',
        description: 'The Intel Core i9-11900K processor has 8 cores and 16 threads with 16 MB of cache. It offers high performance with its base frequency of 3.5 GHz and up to 5.3 GHz in Turbo mode. Its unlocked multiplier gives it the possibility to increase its frequency via overclocking for even more performance.',
        price: 389.99,
        stock: 9,
        category: 'Intel',
    },
    {
        id: "550431229",
        name: 'Intel Corn i9-12900KS',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/i9-12900KS.jpg?alt=media&token=9e39e8d7-a732-494e-811d-ea61f45f0b8a',
        description: 'Featuring Intel® Thermal Velocity Boost, Intel® Adaptive Boost Technology, PCIe Gen 5.0 & 4.0 support and DDR5 and DDR4 support. 12th Gen Intel® Core™ i9 desktop processors are optimized for enthusiast gamers and serious creators and deliver high performance.',
        price: 749.99,
        stock: 6,
        category: 'Intel',
    },
    {
        id: "148301680",
        name: 'Intel Pentium G6605',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Pentium_G6605.jpg?alt=media&token=3cd07e82-1d29-4a14-89ce-be0fa074fa2a',
        description: 'Featuring a 4.3 GHz base clock speed, 4MB of cache memory, and 16 PCIe lanes, this dual-core, four-thread processor is deigned run and multitask a variety of applications. Its performance can be further enhanced with Intel Optane Memory, which caches frequently accessed data.',
        price: 86.00,
        stock: 16,
        category: 'Intel',
    },
    {
        id: "471612051",
        name: 'AMD Ryzen 5 5600X',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Ryzen_5_5600X.jpg?alt=media&token=958e209f-0516-46c7-a983-5371d2407cbf',
        description: 'With a base clock speed of 3.7 GHz and a max boost clock speed of 4.6 GHz in addition to 32MB of L3 Cache, the Ryzen 5 5600X is built to deliver the power needed to smoothly handle tasks ranging from content creation to immersive gaming experiences.',
        price: 198.88,
        stock: 11,
        category: 'AMD',
    },
    {
        id: "675027409",
        name: 'AMD Ryzen 7 5700G',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Ryzen_7_5700G.jpg?alt=media&token=de87b3d2-a471-4b91-9bb7-f8d2f52ff8a9',
        description: 'With a base clock speed of 3.8 GHz and a max boost clock speed of 4.6 GHz in addition to 16MB of L3 Cache, the Ryzen 7 5700G is built to deliver the performance needed to smoothly handle a variety of demanding tasks. The integrated AMD Radeon graphics is designed to provide high frame rates for fast-action games while boosting the performance of content creation applications.',
        price: 272.99,
        stock: 20,
        category: 'AMD',
    },
    {
        id: "394556257",
        name: 'AMD Ryzen 9 5950X',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Ryzen_9_5950X.jpg?alt=media&token=12031bb6-cd86-49ab-bcaa-8d4e49f8136e',
        description: 'With a base clock speed of 3.4 GHz and a max boost clock speed of 4.9 GHz in addition to 64MB of L3 Cache, the Ryzen 9 5950X is built to deliver the power needed to smoothly handle tasks ranging from content creation to immersive gaming experiences.',
        price: 546.99,
        stock: 9,
        category: 'AMD',
    },
    {
        id: "327656904",
        name: 'AMD Ryzen Threadripper PRO 3995WX',
        overview: 'https://firebasestorage.googleapis.com/v0/b/frostwing-e2279.appspot.com/o/Ryzen_Threadripper_PRO_3995WX.jpg?alt=media&token=cd8eec61-85aa-434a-9d9e-2676557f26ff',
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
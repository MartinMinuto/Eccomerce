const products = [
    {
        id: '1',
        name: 'Memoria Ram DDR4 8GB',
        price: 3000,
        category: 'Memoria',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 20,
        description: 'Memoria Ram de 8Gbs',
    },
    {
        id: '2',
        name: 'Memoria Ram DDR4 16GB',
        price: 5500,
        category: 'Memoria',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 10,
        description: 'Memoria Ram de 16Gbs',
    },
    {
        id: '3',
        name: 'Memoria Ram DDR4 32GB',
        price: 13000,
        category: 'Memoria',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 6,
        description: 'Memoria Ram de 32Gbs',
    },
    {
        id: '4',
        name: 'Placa de video GT 1030',
        price: 10000,
        category: 'Placasdevideo',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 10,
        description: 'Placa de video GT 1030',
    },
    {
        id: '5',
        name: 'Placa de Video GeForce GTX 1660',
        price: 30000,
        category: 'Placasdevideo',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 5,
        description: 'Placa de video GTX 1660',
    },
    {
        id: '6',
        name: 'Placa de Video GeForce RTX 3080',
        price: 100000,
        category: 'Placasdevideo',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 5,
        description: 'Placa de video RTX 3080',
    },
    {
        id: '7',
        name: 'Procesador Intel I5 9th GEN',
        price: 25000,
        category: 'Procesador',
        img: 'https://media.ldlc.com/r1600/ld/products/00/05/32/73/LD0005327362_2_0005404872.jpg',
        stock: 8,
        description: 'Procesador Intel I5 9th GEN',
    },
    {
        id: '8',
        name: 'Procesador Intel I5 10th GEN',
        price: 45000,
        category: 'Procesador',
        img: 'https://media.ldlc.com/r1600/ld/products/00/05/32/73/LD0005327362_2_0005404872.jpg',
        stock: 15,
        description: 'Procesador Intel I5 10th GEN',
    },
    {
        id: '9',
        name: 'Memoria Ram 8gb Fury 3200hz',
        price: 20000,
        category: 'Memoria',
        img: 'https://www.coimprit.com.mx/wp-content/uploads/2021/11/KF426C16BBA-8-02.jpg',
        stock: 12,
        description: 'Memoria Ram 8gb Fury 3200hz',
    },
    {
        id: '10',
        name: 'Memoria Ram 16gb Fury 3200hz',
        price: 37000,
        category: 'Memoria',
        img: 'https://www.coimprit.com.mx/wp-content/uploads/2021/11/KF426C16BBA-8-02.jpg',
        stock: 11,
        description: 'Memoria Ram 16gb Fury 3200hz',
    },
    {
        id: '11',
        name: 'Memoria Ram 32gb Fury 3200hz',
        price: 65800,
        category: 'Memoria',
        img: 'https://www.coimprit.com.mx/wp-content/uploads/2021/11/KF426C16BBA-8-02.jpg',
        stock: 15,
        description: 'Memoria Ram 32gb Fury 3200hz',
    },
    {
        id: '12',
        name: 'Procesador AMD Ryzen 5',
        price: 48000,
        category: 'Procesador',
        img: 'https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-4833640.jpg',
        stock: 4,
        description: 'Procesador AMD Ryzen 5',
    },
    {
        id: '13',
        name: 'Procesador AMD Ryzen 7',
        price: 75000,
        category: 'Procesador',
        img: 'https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-4833640.jpg',
        stock: 8,
        description: 'Procesador AMD Ryzen 7',
    },
    {
        id: '14',
        name: 'Placa de Video GeForce RTX 4080',
        price: 150000,
        category: 'Placasdevideo',
        img: 'https://www.compumar.com/thumb/000000000001364934794D-NQ-NP-977948-MLA52993940407-122022-O_800x800.jpg',
        stock: 12,
        description: 'Placa de video RTX 4080',
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      resolve(products)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      resolve(products.find(prod => prod.id === productId))
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      resolve(products.filter(prod => prod.category === categoryId))
    })
}

const products = [
    {
        id: '1',
        name: 'Memoria Ram DDR4 8GB',
        price: 3000,
        category: 'Memorias',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 20,
        description: 'Memoria Ram de 8Gbs',
    },
    {
        id: '2',
        name: 'Memoria Ram DDR4 16GB',
        price: 5500,
        category: 'Memorias',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 10,
        description: 'Memoria Ram de 16Gbs',
    },
    {
        id: '3',
        name: 'Memoria Ram DDR4 32GB',
        price: 13000,
        category: 'Memorias',
        img: 'https://vtxsoluciones.ar/wp-content/uploads/2022/12/ktc-product-beast-ddr4-rgb-dimm-2-angled-kit-of-2-zm-lg.jpg',
        stock: 6,
        description: 'Memoria Ram de 32Gbs',
    },
    {
        id: '4',
        name: 'Placa de video GT 1030',
        price: 10000,
        category: 'Placas de video',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 10,
        description: 'Placa de video GT 1030',
    },
    {
        id: '5',
        name: 'Placa de Video GeForce GTX 1660',
        price: 30000,
        category: 'Placas de video',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 5,
        description: 'Placa de video GTX 1660',
    },
    {
        id: '6',
        name: 'Placa de Video GeForce RTX 3080',
        price: 100000,
        category: 'Placas de video',
        img: 'https://asset.msi.com/resize/image/global/product/product_9_20191024090506_5db0f8c2ee3a7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
        stock: 5,
        description: 'Placa de video RTX 3080',
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      resolve(products)
    })
}


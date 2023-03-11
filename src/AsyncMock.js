const products = [
    {
        id: '1',
        name: 'Memoria Ram DDR4 8GB',
        price: 3000,
        category: 'Memorias',
        img: 'https://w7.pngwing.com/pngs/421/211/png-transparent-ddr4-sdram-corsair-vengeance-rgb-ddr4-corsair-components-dimm-computer-memory-ddr4-ram-electronic-device-microcontroller.png',
        stock: 20,
        description: 'Memoria Ram de 8Gbs',
    },
    {
        id: '2',
        name: 'Memoria Ram DDR4 16GB',
        price: 5500,
        category: 'Memorias',
        img: 'https://w7.pngwing.com/pngs/421/211/png-transparent-ddr4-sdram-corsair-vengeance-rgb-ddr4-corsair-components-dimm-computer-memory-ddr4-ram-electronic-device-microcontroller.png',
        stock: 10,
        description: 'Memoria Ram de 16Gbs',
    },
    {
        id: '3',
        name: 'Memoria Ram DDR4 32GB',
        price: 13000,
        category: 'Memorias',
        img: 'https://w7.pngwing.com/pngs/1011/835/png-transparent-corsair-vengeance-rgb-pro-16gb-288-pin-ddr4-sdram-ddr4-2666-desktop-memory-model-cmw-corsair-components-rgb-color-model-overclocking-czechoslovakian-wolfdog-black-white-color-ram.png',
        stock: 6,
        description: 'Memoria Ram de 32Gbs',
    },
    {
        id: '4',
        name: 'Placa de video GT 1030',
        price: 10000,
        category: 'Placas de video',
        img: 'https://w7.pngwing.com/pngs/930/176/png-transparent-graphics-cards-video-adapters-nvidia-geforce-gt-1030-gddr5-sdram-presentation-cards-electronic-device-geforce-computer-component.png',
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
        img: 'https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/181_03-03-2023-01-03-25-0000000000415069674930415069.png',
        stock: 5,
        description: '',
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      resolve(products)
    })
}


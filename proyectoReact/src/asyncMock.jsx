const products = [
    {
        id: '1',
        name: 'Buzo',
        price: 35000,
        category: 'buzo',
        img: 'https://http2.mlstatic.com/D_NQ_NP_928960-MLA50740473253_072022-O.webp',
        stock: 25,
        description: 'Buzo Undefined',
    },
    {
        id: '2',
        name: 'Remera Oversize',
        price: 10000,
        category: 'remera',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/157/879/products/dsc087371-bd1ef0bcc030f4f0cd16824640717770-1024-1024.webp',
        stock: 50,
        description: 'Remera Undefined',
    },
    {
        id: '3',
        name: 'Jogging',
        price: 20000,
        category: 'pantalon',
        img: 'https://www.eldon.com.ar/media/catalog/product/cache/2318891599dd6b7da7fbbfb553d20c24/2/5/25012023-25012023-25feb_eldon_kobe_135_copia.jpg',
        stock: 5,
        description: 'Pantalon Undefined',
    },
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
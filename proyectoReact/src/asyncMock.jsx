const products = [
    {
        id: '1',
        name: 'Buzo',
        price: 35000,
        category: 'buzos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_928960-MLA50740473253_072022-O.webp',
        stock: 25,
        description: 'Buzo Nike modelo 022',
    },
    {
        id: '2',
        name: 'Remera Oversize',
        price: 10000,
        category: 'remeras',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/157/879/products/dsc087371-bd1ef0bcc030f4f0cd16824640717770-1024-1024.webp',
        stock: 50,
        description: 'Remera oversize tamaño L con estampa',
    },
    {
        id: '3',
        name: 'Jogging',
        price: 20000,
        category: 'pantalones',
        img: 'https://www.eldon.com.ar/media/catalog/product/cache/2318891599dd6b7da7fbbfb553d20c24/2/5/25012023-25012023-25feb_eldon_kobe_135_copia.jpg',
        stock: 5,
        description: 'Jogging visón con elásticos en los tobillos',
    },
    
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}

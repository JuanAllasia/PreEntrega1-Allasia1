const products = [
    {
        id: "1",
        name: "iphone x",
        price: 300,
        img: "./components/assets/iphonex.jpg",
        stock: 5,
        description: "iphone x"
    },
    {
        id: "2",
        name: "iphone 11",
        price: 500,
        img: "./components/assets/ihpone11.jpeg",
        stock: 5,
        description: "iphone 11"
    },
    {
        id: "3",
        name: "iphone 12",
        price: 650,
        img: "./components/assets/iphone12.jpg",
        stock: 5,
        description: "iphone 12"
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })

}
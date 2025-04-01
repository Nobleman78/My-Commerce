const getDataFromLocalStorage = () => {
    const productsData = localStorage.getItem('products')
    if (productsData) {
        return JSON.parse(productsData);
    }

    return []
    

}
const saveToLocalStorage = (products) => {
    const productsStringiFied = JSON.stringify(products);
    localStorage.setItem('products',productsStringiFied);

}
const addToLocalStorage = (productId) => {
    /*First of all i have to get the product data what if there is no product in the 
    local storage */
    const products = getDataFromLocalStorage();
    products.push(productId);
    saveToLocalStorage(products)


}

export { addToLocalStorage, getDataFromLocalStorage }
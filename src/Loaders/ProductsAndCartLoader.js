import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const saveCart = getStoreCart();
    const initialCart = [];
    // console.log(products);
    for (const id in saveCart) {
        const addedProducts = products.find(products => products.id === id);
        // console.log(id, addedProducts);
        if (addedProducts) {
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);
        }
        
    }

    return { products: products, initialCart:initialCart};
}
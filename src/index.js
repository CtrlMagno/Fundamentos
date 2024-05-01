

function createAllProducts(m){
    const results = m.results
    for(let i; i < results.length; i++){
        const obj = results[i]
        const price = `${obj.precio}`
        const name = obj.nombre
        const imageUrl = obj.url
        const brand = obj.marca
        const product = new Products(name, brand)
        console.log(m);

    }
}

function fillScreenWithProducts(){
    const container = document.getElementById("product-items")
    for(let i = 0; i < shopData.results.length; i++){
        const product = listOfProducts[i]
        console.log("hola");
    }
}
createAllProducts(shopData[0])
fillScreenWithProducts()

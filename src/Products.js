class Products {
    constructor(name, brand, imageUrl,){
        this.name = name;
        this.brand = brand;
        this.imageUrl = imageUrl;
    }

createHtml(){
        return `
        <div class="items">
        <div class="fila">
          <div class="item">
            <a href="../html/details.html"
              ><img src="${this.imageUrl}" alt="" class="imageshop"
            /></a>
            <p class="barra"></p>

            <div class="bajo">
              <p class="description">"${this.brand}"</p>
              <a href="../html/details.html"
                ><img src="../assets/shop.png" alt="" class="miniicon"
              /></a>
            </div>

            <div>
              <p class="textoo">${this.name}</p>
            </div>
          </div>
        </div>
        `
    }
}
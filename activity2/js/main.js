const productsData = [ 
    { 
    id: 0, 
    productName: "Huawei MateBook X Pro", 
    image: "https://fdn.gsmarena.com/imgroot/news/20/08/huawei-matebook-x-matebook-14/-1200/gsmarena_005.jpg", 
    productSpecs: {
        cpu: "Intel Core i7, 8th generation", 
        ram: "8GB", 
        storage: "512 GB SSD", 
        screen: "13.9-inch, 3K (3,000 x 2,080)", 
        price: "1499"
    }, 
    description: "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money." 
    }, 
    { 
    id: 1, 
    productName: "Apple Macbook Pro 2018", 
    image: "https://cdn.shopify.com/s/files/1/0306/8677/products/1.A1706SpaceGreyFrontWM_3e7b6544-6b53-4646-a201-2b3d6a105bbd_2400x.jpg?v=1614339866", 
    productSpecs: {
        cpu: "6-core Intel i7, 8th generation", 
        ram: "16GB", 
        storage: "1TB GB SSD", 
        screen: "15-inch Retina display", 
        price: "3199"}, 
    description: "If you're after the latest and greatest laptop from Apple, we suggest you look into the 2018 model of the 15-inch MacBook Pro with Touch Bar. The headline Touch Bar – a thin OLED display at the top of the keyboard which can be used for any number of things, whether that be auto-suggesting words as you type or offering Touch ID so you can log in with just your fingerprint – is of course included. It's certainly retained Apple's sense of style, but it comes at a cost. This is a pricey machine, so you may want to consider one of the Windows alternatives. But, if you're a steadfast Apple diehard, this is definitely the best laptop for you!" 
    }, 
    { 
    id: 2, 
    productName: "Dell XPS 13", 
    image: "https://cdn.vox-cdn.com/thumbor/Ryogb0PaaeS8fmZOKGAHakj2OIE=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/69117987/XPS_13_black_open_up_right.0.jpg", 
    productSpecs: {
        cpu: "Intel Core i7, 8th generation", 
        ram: "16GB", 
        storage: "512 GB SSD", 
        screen: "13.3-inch, Full HD", 
        price: "1199"
    },
    description: "The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display, this Dell XPS 13 continues to be the most popular Windows laptop in the world. What’s more, there’s a wide range of customization options, so you can really make the Dell XPS 13 the best laptop for your needs. " 
    }
];


function productTemplate(product) {
    return `
    <div class="laptop">
        <img class="product-photo" src="${product.image}">
        <h2>${product.productName}</h2>
        <ul>
            <li>CPU: ${product.productSpecs.cpu}</li>
            <li>RAM: ${product.productSpecs.ram}</li>
            <li>Storage: ${product.productSpecs.storage}</li>
            <li>Screen: ${product.productSpecs.screen}</li>
            <li>Price: ₱${product.productSpecs.price}</li>
        </ul>
        <p class="product-desc">${product.description}</p>
    </div>
    `
}

document.getElementById("container").innerHTML = `
    <h1 class="app-title">Products (${productsData.length} results)</h1>
    ${productsData.map(productTemplate).join('')}
    <footer class="footer">These ${productsData.length} products were added recently. Check back soon for updates.</footer>
`
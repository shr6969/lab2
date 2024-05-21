let products = [
    {
        category: "wilson",
        image: "pictures/wilsonblade.webp",
        name: "Wilson BLADE 98 V9",
        price: "259$",
        description: "Super racket."
    },
    {
        category: "wilson",
        image: "pictures/wilsonultra.webp",
        name: "Wilson ULTRA 100 V4",
        price: "249$",
        description: "Super racket."
    },
    {
        category: "wilson",
        image: "pictures/wilsonclash.webp",
        name: "Wilson CLASH 98 V2",
        price: "249$",
        description: "Super racket."
    },
    {
        category: "babolat",
        image: "pictures/babolatpurestrike.jpeg",
        name: "Babolat PURE STRIKE 98",
        price: "289$",
        description: "Super racket."
    },
    {
        category: "babolat",
        image: "pictures/babolatpureaero.avif",
        name: "Babolat PURE AERO",
        price: "289$",
        description: "Super racket."
    },
    {
        category: "babolat",
        image: "pictures/babolatpuredrive.avif",
        name: "Babolat PURE DRIVE",
        price: "269$",
        description: "Super racket."
    },
    {
        category: "head",
        image: "pictures/headspeed.jpeg",
        name: "Head SPEED",
        price: "299$",
        description: "Super racket."
    },
    {
        category: "yonex",
        image: "pictures/yonex.jpeg",
        name: "Yonex VCORE 98 Tour",
        price: "279$",
        description: "Super racket."
    }
];

function loadProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    uploadFilteredProducts(filteredProducts);
}

function uploadFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous content

    // Display all products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Product image
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    imageContainer.appendChild(image);

    // Super racket description (hidden by default)
    const superRacket = document.createElement("p");
    superRacket.classList.add("super-racket");
    superRacket.textContent = "Super racket";
    imageContainer.appendChild(superRacket);

    productCard.appendChild(imageContainer);

    // Product details
    const details = document.createElement("div");
    details.classList.add("product-details");

    const name = document.createElement("h3");
    name.textContent = product.name;
    details.appendChild(name);

    const price = document.createElement("p");
    price.textContent = "Price: " + product.price;
    details.appendChild(price);

    productCard.appendChild(details);

    // Event listeners to show/hide "Super racket" on hover
    imageContainer.addEventListener("mouseover", () => {
        superRacket.style.display = "block";
    });

    imageContainer.addEventListener("mouseout", () => {
        superRacket.style.display = "none";
    });

    return productCard;
}

loadProducts('all');


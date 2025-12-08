// Base de datos de productos
const products = [
    {
        id: 1,
        name: "Smartphone Xiaomi Redmi Note 12",
        description: "Teléfono inteligente con cámara de 50MP, 128GB de almacenamiento y pantalla AMOLED de 6.67 pulgadas.",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Nuevo"
    },
    {
        id: 2,
        name: "Auriculares Bluetooth TWS",
        description: "Auriculares inalámbricos con cancelación de ruido, estuche de carga y 24 horas de autonomía.",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Oferta"
    },
    {
        id: 3,
        name: "Lámpara LED Inteligente",
        description: "Lámpara de mesa con control WiFi, 16 millones de colores y compatibilidad con Alexa.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Popular"
    },
    {
        id: 4,
        name: "Reloj Inteligente Deportivo",
        description: "Smartwatch con monitor de frecuencia cardíaca, GPS y resistencia al agua IP68.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        category: "deportes",
        badge: "Bestseller"
    },
    {
        id: 5,
        name: "Cojín Decorativo Asiático",
        description: "Cojín bordado a mano con diseños tradicionales chinos, 45x45cm, relleno incluido.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Artesanal"
    },
    {
        id: 6,
        name: "Set de Maquillaje K-Beauty",
        description: "Kit completo de cosméticos coreanos: base, sombras, labiales y skincare de 10 pasos.",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
        category: "belleza",
        badge: "Premium"
    },
    {
        id: 7,
        name: "Figura Anime Coleccionable",
        description: "Figura de acción de alta calidad de 15cm, articulaciones móviles y accesorios incluidos.",
        price: 67.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        category: "juguetes",
        badge: "Edición Limitada"
    },
    {
        id: 8,
        name: "Bolso Crossbody Kawaii",
        description: "Bolso pequeño con diseño de personajes anime, perfecto para el día a día, múltiples compartimentos.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Trending"
    },
    {
        id: 9,
        name: "Powerbank 20000mAh",
        description: "Batería externa de carga rápida con pantalla LED, 3 puertos USB y carga inalámbrica.",
        price: 55.99,
        image: "https://images.unsplash.com/photo-1609592806695-d3eb5ae023e5?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Esencial"
    },
    {
        id: 10,
        name: "Juego de Té Tradicional",
        description: "Set completo de ceremonia del té con tetera de cerámica, 4 tazas y bandeja de bambú.",
        price: 78.99,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Tradicional"
    },
    {
        id: 11,
        name: "Gafas de Sol Retro",
        description: "Lentes de sol estilo vintage con protección UV400 y montura de acetato premium.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Vintage"
    },
    {
        id: 12,
        name: "Planificador Kawaii 2024",
        description: "Agenda anual con diseños adorables, stickers incluidos y páginas para bullet journal.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "2024"
    },
    {
        id: 13,
        name: "Cargador Inalámbrico RGB",
        description: "Base de carga inalámbrica con iluminación LED personalizable y carga rápida 15W.",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "RGB"
    },
    {
        id: 14,
        name: "Peluche Panda Gigante",
        description: "Peluche súper suave de 60cm, perfecto para decoración o regalo, hipoalergénico.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        category: "juguetes",
        badge: "Gigante"
    },
    {
        id: 15,
        name: "Kit de Skincare Asiático",
        description: "Rutina completa de cuidado facial: limpiador, tónico, sérum, crema y mascarilla.",
        price: 156.99,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        category: "belleza",
        badge: "Kit Completo"
    },
    {
        id: 16,
        name: "Zapatillas Deportivas LED",
        description: "Sneakers con luces LED recargables, 7 colores diferentes y suela antideslizante.",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        category: "deportes",
        badge: "LED"
    },
    {
        id: 17,
        name: "Humidificador Aromático",
        description: "Difusor de aceites esenciales con 7 colores LED, temporizador y apagado automático.",
        price: 47.99,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Relajante"
    },
    {
        id: 18,
        name: "Collar Choker Gótico",
        description: "Collar ajustable con detalles metálicos, diseño gótico kawaii, incluye cadena desmontable.",
        price: 22.99,
        image: "https://mx.pinterest.com/pin/gargantilla-punk-gotico-cuero-sintetico-collar-choker-metal-3527-en-2023--404479610296258169/",
        category: "moda",
        badge: "Gótico"
    }
    ^{
        id: 19,
        name: "Teclado Mecánico RGB Gaming",
        description: "Teclado mecánico con switches azules, retroiluminación RGB personalizable y teclas anti-ghosting.",
        price: 124.99,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Gaming"
    },
    {
        id: 20,
        name: "Mouse Pad XXL Anime",
        description: "Alfombrilla de ratón gigante 80x30cm con diseños de anime, base antideslizante y superficie suave.",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "XXL"
    },
    {
        id: 21,
        name: "Lámpara de Luna 3D",
        description: "Lámpara LED con forma de luna realista, 16 colores, control remoto y base de madera.",
        price: 52.99,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "3D"
    },
    {
        id: 22,
        name: "Funda Kawaii para iPhone",
        description: "Carcasa de silicona suave con diseños adorables de gatitos, compatible con iPhone 14/15.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Kawaii"
    },
    {
        id: 23,
        name: "Set de Palillos Decorativos",
        description: "Juego de 5 pares de palillos chinos de bambú con diseños tradicionales y estuche elegante.",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Tradicional"
    },
    {
        id: 24,
        name: "Drone Mini con Cámara 4K",
        description: "Dron compacto con cámara 4K, estabilizador gimbal y 25 minutos de vuelo autónomo.",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "4K"
    },
    {
        id: 25,
        name: "Kimono Haori Tradicional",
        description: "Chaqueta japonesa de algodón con estampados florales, talla única, perfecta para cosplay.",
        price: 76.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Cosplay"
    },
    {
        id: 26,
        name: "Filtro de Agua Alkalino",
        description: "Botella purificadora de agua con filtro de 7 etapas, ionización y minerales esenciales.",
        price: 43.99,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Salud"
    },
    {
        id: 27,
        name: "Puzzle 3D Templo Chino",
        description: "Rompecabezas tridimensional de 150 piezas, réplica del Templo del Cielo de Beijing.",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        category: "juguetes",
        badge: "3D"
    },
    {
        id: 28,
        name: "Mascarilla Facial de Oro 24K",
        description: "Pack de 10 mascarillas con oro coloidal, ácido hialurónico y colágeno para anti-edad.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=300&fit=crop",
        category: "belleza",
        badge: "Oro 24K"
    },
    {
        id: 29,
        name: "Ventilador USB Portátil",
        description: "Mini ventilador recargable con 3 velocidades, luz LED y base ajustable para escritorio.",
        price: 21.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Portátil"
    },
    {
        id: 30,
        name: "Calcetines Anime Kawaii",
        description: "Pack de 5 pares de calcetines con diseños de personajes anime, algodón suave y colores vibrantes.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Pack 5"
    },
    {
        id: 31,
        name: "Incienso Aromático Zen",
        description: "Set de 120 varillas de incienso con 6 aromas diferentes: lavanda, sándalo, jazmín y más.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Zen"
    },
    {
        id: 32,
        name: "Cámara Instantánea Retro",
        description: "Cámara estilo vintage que imprime fotos al instante, incluye 20 films y correa decorativa.",
        price: 134.99,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Retro"
    },
    {
        id: 33,
        name: "Mochila Escolar Anime",
        description: "Mochila resistente al agua con compartimento para laptop, diseño de anime y luces LED.",
        price: 67.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        category: "moda",
        badge: "LED"
    },
    {
        id: 34,
        name: "Juego de Cuencos Ramen",
        description: "Set de 4 cuencos de cerámica para ramen con palillos, cucharas y diseños japoneses auténticos.",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Auténtico"
    },
    {
        id: 35,
        name: "Espejo de Maquillaje LED",
        description: "Espejo con 21 luces LED, aumento 10x, rotación 360° y base ajustable para maquillaje perfecto.",
        price: 73.99,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop",
        category: "belleza",
        badge: "21 LED"
    },
    {
        id: 36,
        name: "Altavoz Bluetooth Bambú",
        description: "Speaker inalámbrico ecológico de bambú, sonido 360°, resistente al agua y 12h de batería.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "Eco"
    },
    {
        id: 37,
        name: "Organizador de Escritorio",
        description: "Organizador multifuncional de bambú con compartimentos para móvil, bolígrafos y documentos.",
        price: 35.99,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Bambú"
    },
    {
        id: 38,
        name: "Gorro Bucket Hat Kawaii",
        description: "Sombrero bucket reversible con bordados de personajes kawaii, protección UV y ajuste cómodo.",
        price: 26.99,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Reversible"
    },
    {
        id: 39,
        name: "Kit de Sushi Casero",
        description: "Set completo para hacer sushi: esterilla de bambú, moldes, palillos y libro de recetas.",
        price: 41.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Chef"
    },
    {
        id: 40,
        name: "Pelota Anti-Estrés Kawaii",
        description: "Squishy gigante con forma de panda, súper suave, perfecto para aliviar estrés y ansiedad.",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        category: "juguetes",
        badge: "Anti-Estrés"
    },
    {
        id: 41,
        name: "Linterna Solar Recargable",
        description: "Linterna LED con panel solar, carga USB, radio FM y función powerbank de emergencia.",
        price: 48.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "deportes",
        badge: "Solar"
    },
    {
        id: 42,
        name: "Collar de Perlas Cultivadas",
        description: "Collar elegante de perlas de agua dulce con cierre de plata 925, perfecto para ocasiones especiales.",
        price: 156.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        category: "moda",
        badge: "Perlas"
    },
    {
        id: 43,
        name: "Difusor de Aceites Zen",
        description: "Difusor ultrasónico de madera con 7 colores LED, temporizador y 300ml de capacidad.",
        price: 63.99,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Ultrasónico"
    },
    {
        id: 44,
        name: "Funda para Laptop Anime",
        description: "Estuche acolchado para laptop 15.6'' con diseños de anime, cremallera resistente y asa.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        category: "electronica",
        badge: "15.6''"
    },
    {
        id: 45,
        name: "Set de Pinceles de Maquillaje",
        description: "Kit profesional de 20 brochas con cerdas sintéticas, estuche de viaje y limpiador incluido.",
        price: 78.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
        category: "belleza",
        badge: "20 Piezas"
    },
    {
        id: 46,
        name: "Cojín Lumbar Ergonómico",
        description: "Soporte lumbar de memoria viscoelástica con funda lavable y correa ajustable para silla.",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        category: "hogar",
        badge: "Ergonómico"
    },
    {
        id: 47,
        name: "Termo Inteligente LED",
        description: "Botella térmica con pantalla LED que muestra temperatura, 500ml, mantiene calor/frío 12h.",
        price: 57.99,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        category: "deportes",
        badge: "Smart"
    },
    {
        id: 48,
        name: "Puzzle Glow in the Dark",
        description: "Rompecabezas de 1000 piezas que brilla en la oscuridad, diseño de dragón chino místico.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        category: "juguetes",
        badge: "Glow"
    }
];

// Variables globales
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let filteredProducts = [...products];
let sortAscending = true;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    
    // Filtros
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('priceFilter').addEventListener('change', filterProducts);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('cartModal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });
}

// Renderizar productos
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-8">
                <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 class="text-xl text-gray-600">No se encontraron productos</h3>
                <p class="text-gray-500">Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Agregar al Carrito
                    </button>
                    <button class="btn-favorite ${favorites.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filtrar productos
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    filteredProducts = products.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                             product.description.toLowerCase().includes(searchTerm);
        
        // Filtro de categoría
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        
        // Filtro de precio
        let matchesPrice = true;
        if (priceFilter) {
            const price = product.price;
            switch (priceFilter) {
                case '0-50':
                    matchesPrice = price <= 50;
                    break;
                case '50-100':
                    matchesPrice = price > 50 && price <= 100;
                    break;
                case '100-200':
                    matchesPrice = price > 100 && price <= 200;
                    break;
                case '200+':
                    matchesPrice = price > 200;
                    break;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    renderProducts();
}

// Ordenar productos
function sortProducts() {
    filteredProducts.sort((a, b) => {
        return sortAscending ? a.price - b.price : b.price - a.price;
    });
    
    sortAscending = !sortAscending;
    
    const sortBtn = document.getElementById('sortBtn');
    sortBtn.innerHTML = `
        <i class="fas fa-sort"></i> 
        ${sortAscending ? 'Precio: Menor a Mayor' : 'Precio: Mayor a Menor'}
    `;
    
    renderProducts();
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} añadido al carrito`);
}

// Toggle favoritos
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderProducts();
}

// Toggle carrito modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    const isOpen = modal.style.display === 'block';
    
    if (isOpen) {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        renderCartItems();
    }
}

// Renderizar items del carrito
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Tu carrito está vacío</h3>
                <p>¡Agrega algunos productos increíbles!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    updateCartTotal();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            updateCartCount();
        }
    }
}

// Remover del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

// Limpiar carrito
function clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart = [];
        localStorage.removeItem('cart');
        renderCartItems();
        updateCartCount();
        showNotification('Carrito vaciado');
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Actualizar total del carrito
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Proceder al checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulación de checkout
    const confirmed = confirm(`
        ¡Gracias por tu compra en Plaza Chinese Mall!
        
        Total a pagar: $${total.toFixed(2)}
        Productos: ${cart.length} artículos
        
        ¿Confirmar compra?
    `);
    
    if (confirmed) {
        // Simular procesamiento
        showNotification('¡Compra realizada con éxito! Recibirás un email de confirmación.');
        cart = [];
        localStorage.removeItem('cart');
        updateCartCount();
        toggleCart();
    }
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Funciones de utilidad
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Lazy loading para imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Inicializar lazy loading cuando se cargan los productos
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupLazyLoading, 100);
});

// Manejo de errores para imágenes
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x300/dc3545/ffffff?text=Imagen+No+Disponible';
    }
}, true);

// Funcionalidad de teclado para accesibilidad
document.addEventListener('keydown', function(e) {
    // Cerrar modal con Escape
    if (e.key === 'Escape') {
        const modal = document.getElementById('cartModal');
        if (modal.style.display === 'block') {
            toggleCart();
        }
    }
    
    // Abrir carrito con Ctrl+B
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        toggleCart();
    }
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
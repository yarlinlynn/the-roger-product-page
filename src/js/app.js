import { products } from './data/data.js';

// document.addEventListener("DOMContentLoaded", function() { 
//     const container = document.getElementById("container"); 
//     const modal = document.querySelector(".modal"); 
//     const modalCloseBtn = document.querySelector(".close-btn"); 
//     const productImg = document.querySelector(".product-img img"); 
//     const productName = document.querySelector(".product-name"); 
//     const modalProductName = document.querySelector(".modal .product-name h1"); 
//     const modalProductInfo = document.querySelector(".modal .product-name p"); 

//     const boxCount = 12 * 12; 
//     const boxSize = 250; 
//     const totalImgages = 12; 
//     const columns = 12; 
//     const rows = 12;

//     const products = [ 
//         { info: "THE ROGER Advantage", name: "Wolf | Glacier" }, 
//         { info: "THE ROGER Advantage", name: "Black | Black" },
//         { info: "THE ROGER Advantage", name: "White | Olive" }, 
//         { info: "THE ROGER Advantage", name: "White | White" }, 
//         { info: "THE ROGER Advantage", name: "Ivory | Ivory" }, 
//         { info: "THE ROGER Advantage", name: "White | Indigo" }, 
//         { info: "THE ROGER Clubhouse", name: "White | Black" }, 
//         { info: "THE ROGER Clubhouse", name: "White | Ivory" }, 
//         { info: "THE ROGER Clubhouse", name: "White | Pearl" }, 
//         { info: "THE ROGER Clubhouse", name: "Black | White" }, 
//         { info: "THE ROGER Clubhouse", name: "White | Evergreen" }, 
//         { info: "THE ROGER Clubhouse", name: "White | Grenadine" }, 
//     ]; 
    
//     // const containerWidth = columns * boxSize; 
//     // container.style.width = containerWidth + "px"; 
//     container.style.width = (columns * boxSize) + "px";
//     container.style.height = (rows * boxSize) + "px";
    
//     for(let i = 0; i < boxCount; i++) { 
//         const box = document.createElement("div"); 
//         box.classList.add("box"); 
//         const img = document.createElement("img"); 
//         img.classList.add("img"); 
//         const imageIndex = (i % totalImgages) + 1; 
//         img.src = `/src/images/img${imageIndex}.avif`; 
//         const productIndex = i % products.length; 
//         const product = products[productIndex] 
//         const info = document.createElement("p"); 
//         info.textContent = product.info; 
//         const name = document.createElement("h1"); 
//         name.textContent = product.name; 
//         const content = document.createElement("div"); 
//         content.classList.add("content"); 
//         content.appendChild(name); 
//         content.appendChild(info); 
//         box.appendChild(img); 
//         box.appendChild(content); 
//         container.appendChild(box); 
        
//         let isDragging = false; 
//         let isClicking = false; 
        
//         box.addEventListener("mousedown", function() { 
//             isDragging = false; 
//             isClicking = true; 
//         }); 
//         box.addEventListener("mousemove", function() { 
//             isDragging = true; 
//             isClicking = false; 
//         }); 
//         // box.addEventListener("click", function() { 
//         //     if(!isDragging && isClicking) { 
//         //         gsap.set(modal, {
//         //             display: "flex"
//         //         }); 
//         //         gsap.to(modal, {
//         //             opacity: 1, 
//         //             duration: 0.4
//         //         }); 
//         //         productImg.src = img.src; 
//         //         modalProductName.textContent = product.name; 
//         //         modalProductInfo.textContent = product.info; 
//         //     } 
//         // }); 
//     } 
//     // modalCloseBtn.addEventListener("click", function() { 
//     //     gsap.to(modal, { 
//     //         opacity: 0, 
//     //         duration: 0.4, 
//     //         onComplete: () => { 
//     //             gsap.set(modal, { 
//     //                 display: "none", 
//     //             }); 
//     //         } 
//     //     }) 
//     // }) 
//     let isContainerDragging = false; 
//     let startCoords = { x: 0, y: 0}; 
//     let startTranslate = { x: 0, y: 0}; 
//     container.addEventListener("mousedown", onDragStart); 
//     container.addEventListener("mouseup", onDragEnd); 
//     container.addEventListener("mouseleave", onDragEnd); 
//     container.addEventListener("mousemove", onDrag); 
    
//     function onDragStart(e) { 
//         isContainerDragging = true; 
//         startCoords.x = e.clientX; 
//         startCoords.y = e.clientY; 
//         startTranslate.x = gsap.getProperty(container, "x"); 
//         startTranslate.y = gsap.getProperty(container, "y"); 
//         gsap.set(container, { 
//             cursor: "grabbing"
//         }); 
//         gsap.set(container, { 
//             userSelect: "none"
//         }); 
//     } 

    
//     function onDragEnd() { 
//         if(!isContainerDragging) return; 
//         isContainerDragging = false; 
//         gsap.set(container, { 
//             cursor: "grab"
//         }); 
//         gsap.set(container, { 
//             userSelect: "auto"
//         }); 
//     } 
    
//     function onDrag(e) { 
//         if(!isContainerDragging) return; 
//         e.preventDefault(); 
//         const deltaX = e.clientX - startCoords.x; 
//         const deltaY = e.clientY - startCoords.y; 
//         const translateX = startTranslate.x + deltaX; 
//         const translateY = startTranslate.y + deltaY; 
//         gsap.to(container, { 
//             x: translateX, 
//             y: translateY, 
//             duration: 0.5, 
//             ease: "power1.out" 
//         }) 
//     } 
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const searchToggle = document.getElementById("search-toggle").addEventListener("click", openSearchModal);
//     const cartToggle = document.getElementById("cart-toggle").addEventListener("click", openCart);

//     const searchContainer = `
//         <div class="modal-overlay" id="search-modal-overlay">
//             <div class="modal-container">
//                 <div class="modal-header">
//                     <button class="close-modal" id="close-search-btn">
//                         <i class="ri-close-fill"></i>
//                     </button>
//                     <input type="text" class="search-input" placeholder="Type to search...">
//                 </div>
//                 <div class="search-results"></div>
//             </div>
//         </div>
//     `;

//     const cartContainer = `
//         <div class="modal-overlay" id="cart-modal-overlay">
//             <div class="cart-container">
//                 <div class="cart-header">
//                     <h2>Your Cart</h2>
//                     <button class="close-modal" id="close-search-btn">
//                         <i class="ri-close-fill"></i>
//                     </button>
//                 </div>
//                 <div class="cart-results"></div>
//             </div>
//         </div>
//     `;

//     let modal = null;
//     let cart = null;

//     function openSearchModal() {
//         if (!modal) {
//             modal = document.createElement("section");
//             modal.id = "search-modal";
//             modal.innerHTML = searchContainer;
//             document.body.appendChild(modal);

//             modal.querySelector("#close-search-btn").addEventListener("click", closeSearchModal);

//             modal.querySelector(".modal-container").addEventListener("click", (e) => {
//                 e.stopPropagation();
//             });

//             modal.querySelector("#search-modal-overlay").addEventListener("click", (e) => {
//                 if (e.target.id === "search-modal-overlay") closeSearchModal();
//             });
//         }

//         modal.classList.add("open");
//     }

//     function closeSearchModal() {
//         if (modal) {
//             modal.classList.remove("open");
//         }
//     }

//     function openCart() {
//         if(!cart) {
//            cart = document.createElement("section");
//             cart.id = "cart-modal";
//             cart.innerHTML = cartContainer;
//             document.body.appendChild(cart); 

//             cart.querySelector("#close-search-btn").addEventListener("click", closeCart);

//             cart.querySelector(".cart-container").addEventListener("click", (e) => {
//                 e.stopPropagation();
//             });

//             cart.querySelector("#cart-modal-overlay").addEventListener("click", (e) => {
//                 if (e.target.id === "cart-modal-overlay") closeSearchModal();
//             });
//         }
//         cart.classList.add("open");
//     }

//     function closeCart() {
//         if (cart) {
//             cart.classList.remove("open");
//         }
//     }

//     function renderProducts() {
//         const productsRendered = document.getElementById("products-container");
//         if (!productsRendered) return;

//         const boxSize = 250; 
//         const columns = 12; 
//         const rows = 12;
//         const boxCount = products.length;
//         productsRendered.style.width = (columns * boxSize) + "px";
//         productsRendered.style.height = (rows * boxSize) + "px";

//         for (let i = 0; i < boxCount; i++) {
//             const product = products[i]
//             const firstImage = product.images[0];

//             const box = document.createElement("div"); 
//             box.classList.add("box"); 

//             const img = document.createElement("img"); 
//             img.classList.add("img");
//             img.src = firstImage;

//             const name = document.createElement("h1"); 
//             name.textContent = product.name; 

//             const info = document.createElement("p"); 
//             info.textContent = product.category; 

//             const content = document.createElement("div"); 
//             content.classList.add("content"); 
//             content.appendChild(name); 
//             content.appendChild(info); 
//             box.appendChild(img); 
//             box.appendChild(content); 
//             productsRendered.appendChild(box);

//             let isDragging = false;
//             let isClicking = false;

//             box.addEventListener("mousedown", () => {
//                 isDragging = false;
//                 isClicking = true;
//             });

//             box.addEventListener("mousemove", () => {
//                 isDragging = true;
//                 isClicking = false;
//             });
//             box.addEventListener("click", function() { 
//                 if(!isDragging && isClicking) { 
//                     gsap.set(modal, {
//                         display: "flex"
//                     }); 
//                     gsap.to(modal, {
//                         opacity: 1, 
//                         duration: 0.4
//                     }); 
//                     productImg.src = img.src; 
//                     modalProductName.textContent = product.name; 
//                     modalProductInfo.textContent = product.info; 
//                 } 
//             });
//         }
//         modalCloseBtn.addEventListener("click", function() { 
//         gsap.to(modal, { 
//             opacity: 0, 
//             duration: 0.4, 
//             onComplete: () => { 
//                 gsap.set(modal, { 
//                     display: "none", 
//                 }); 
//             } 
//         }) 
//     }) 

        
//     }
//     renderProducts();

//     let isContainerDragging = false; 
//     let startCoords = { x: 0, y: 0}; 
//     let startTranslate = { x: 0, y: 0}; 
//     productsRendered.addEventListener("mousedown", onDragStart); 
//     productsRendered.addEventListener("mouseup", onDragEnd); 
//     productsRendered.addEventListener("mouseleave", onDragEnd); 
//     productsRendered.addEventListener("mousemove", onDrag); 

//     function onDragStart(e) { 
//         isContainerDragging = true; 
//         startCoords.x = e.clientX; 
//         startCoords.y = e.clientY; 
//         startTranslate.x = gsap.getProperty(productsRendered, "x"); 
//         startTranslate.y = gsap.getProperty(productsRendered, "y"); 
//         gsap.set(productsRendered, { 
//             cursor: "grabbing"
//         }); 
//         gsap.set(productsRendered, { 
//             userSelect: "none"
//         }); 
//     } 
    
//     function onDragEnd() { 
//         if(!isContainerDragging) return; 
//         isContainerDragging = false; 
//         gsap.set(productsRendered, { 
//             cursor: "grab"
//         }); 
//         gsap.set(productsRendered, { 
//             userSelect: "auto"
//         }); 
//     } 
    
//     function onDrag(e) { 
//         if(!isContainerDragging) return; 
//         e.preventDefault(); 
//         const deltaX = e.clientX - startCoords.x; 
//         const deltaY = e.clientY - startCoords.y; 
//         const translateX = startTranslate.x + deltaX; 
//         const translateY = startTranslate.y + deltaY; 
//         gsap.to(productsRendered, { 
//             x: translateX, 
//             y: translateY, 
//             duration: 0.5, 
//             ease: "power1.out" 
//         }) 
//     }


// });

// document.addEventListener("DOMContentLoaded", function() {
//     const searchToggle = document.getElementById("search-toggle");
//     const cartToggle = document.getElementById("cart-toggle");

//     const searchContainer = `
//         <div class="modal-overlay" id="search-modal-overlay">
//             <div class="modal-container">
//                 <div class="modal-header">
//                     <button class="close-modal" id="close-search-btn">
//                         <i class="ri-close-fill"></i>
//                     </button>
//                     <input type="text" class="search-input" placeholder="Type to search...">
//                 </div>
//                 <div class="search-results"></div>
//             </div>
//         </div>
//     `;

//     const cartContainer = `
//         <div class="modal-overlay" id="cart-modal-overlay">
//             <div class="cart-container">
//                 <div class="cart-header">
//                     <h2>Your Cart</h2>
//                     <button class="close-modal" id="close-cart-btn">
//                         <i class="ri-close-fill"></i>
//                     </button>
//                 </div>
//                 <div class="cart-results"></div>
//             </div>
//         </div>
//     `;

//     let modal = null;
//     let cart = null;

//     searchToggle.addEventListener("click", openSearchModal);
//     cartToggle.addEventListener("click", openCart);

//     function openSearchModal() {
//         if (!modal) {
//             modal = document.createElement("section");
//             modal.id = "search-modal";
//             modal.innerHTML = searchContainer;
//             document.body.appendChild(modal);

//             modal.querySelector("#close-search-btn").addEventListener("click", closeSearchModal);

//             modal.querySelector(".modal-container").addEventListener("click", e => e.stopPropagation());

//             modal.querySelector("#search-modal-overlay").addEventListener("click", e => {
//                 if (e.target.id === "search-modal-overlay") closeSearchModal();
//             });
//         }

//         modal.classList.add("open");
//     }

//     function closeSearchModal() {
//         if (modal) modal.classList.remove("open");
//     }

//     function openCart() {
//         if (!cart) {
//             cart = document.createElement("section");
//             cart.id = "cart-modal";
//             cart.innerHTML = cartContainer;
//             document.body.appendChild(cart);

//             cart.querySelector("#close-cart-btn").addEventListener("click", closeCart);

//             cart.querySelector(".cart-container").addEventListener("click", e => e.stopPropagation());

//             cart.querySelector("#cart-modal-overlay").addEventListener("click", e => {
//                 if (e.target.id === "cart-modal-overlay") closeCart();
//             });
//         }

//         cart.classList.add("open");
//     }

//     function closeCart() {
//         if (cart) cart.classList.remove("open");
//     }

//     // Define globally so dragging works
//     const productsRendered = document.getElementById("products-container");
//     if (!productsRendered) return;

//     function renderProducts() {
//         const boxSize = 250;
//         const columns = 12;
//         const rows = 12;
//         const boxCount = products.length;
//         productsRendered.style.width = (columns * boxSize) + "px";
//         productsRendered.style.height = (rows * boxSize) + "px";

//         for (let i = 0; i < boxCount; i++) {
//             const product = products[i];
//             const firstImage = product.images[0];

//             const box = document.createElement("div");
//             box.classList.add("box");

//             const img = document.createElement("img");
//             img.classList.add("img");
//             img.src = firstImage;

//             const name = document.createElement("h1");
//             name.textContent = product.name;

//             const info = document.createElement("p");
//             info.textContent = product.category;

//             const content = document.createElement("div");
//             content.classList.add("content");
//             content.appendChild(name);
//             content.appendChild(info);

//             box.appendChild(img);
//             box.appendChild(content);
//             productsRendered.appendChild(box);

//             let isDragging = false;
//             let isClicking = false;

//             box.addEventListener("mousedown", () => {
//                 isDragging = false;
//                 isClicking = true;
//             });

//             box.addEventListener("mousemove", () => {
//                 isDragging = true;
//                 isClicking = false;
//             });

            
//         }
//     }

//     renderProducts();

//     let isContainerDragging = false;
//     let startCoords = { x: 0, y: 0 };
//     let startTranslate = { x: 0, y: 0 };

//     productsRendered.addEventListener("mousedown", onDragStart);
//     productsRendered.addEventListener("mouseup", onDragEnd);
//     productsRendered.addEventListener("mouseleave", onDragEnd);
//     productsRendered.addEventListener("mousemove", onDrag);

//     function onDragStart(e) {
//         isContainerDragging = true;
//         startCoords.x = e.clientX;
//         startCoords.y = e.clientY;
//         startTranslate.x = gsap.getProperty(productsRendered, "x");
//         startTranslate.y = gsap.getProperty(productsRendered, "y");
//         gsap.set(productsRendered, { cursor: "grabbing", userSelect: "none" });
//     }

//     function onDragEnd() {
//         if (!isContainerDragging) return;
//         isContainerDragging = false;
//         gsap.set(productsRendered, { cursor: "grab", userSelect: "auto" });
//     }

//     function onDrag(e) {
//         if (!isContainerDragging) return;
//         e.preventDefault();
//         const deltaX = e.clientX - startCoords.x;
//         const deltaY = e.clientY - startCoords.y;
//         gsap.to(productsRendered, {
//             x: startTranslate.x + deltaX,
//             y: startTranslate.y + deltaY,
//             duration: 0.5,
//             ease: "power1.out"
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const searchToggle = document.getElementById("search-toggle").addEventListener("click", openSearchModal)
    const cartToggle = document.getElementById("cart-toggle").addEventListener("click", openCart);

    // html for search container
    const searchContainer = `
        <div class="modal-overlay" id="search-modal-overlay">
            <div class="modal-container">
                <div class="modal-header">
                    <button class="close-modal" id="close-search-btn">
                        <i class="ri-close-fill"></i>
                    </button>
                    <input type="text" class="search-input" placeholder="Type to search...">
                </div>
                <div class="search-results"></div>
            </div>
        </div>
    `;

    // html for cart
    const cartContainer = `
        <div class="modal-overlay" id="cart-modal-overlay">
            <div class="cart-container">
                <div class="cart-header">
                    <h2>Your Cart</h2>
                    <button class="close-modal" id="close-cart-btn">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="cart-results"></div>
            </div>
        </div>
    `;

    let modal = null;
    let cart = null;

    // opening and closing search container
    function openSearchModal() {
        if (!modal) {
            modal = document.createElement("section");
            modal.id = "search-modal";
            modal.innerHTML = searchContainer;
            document.body.appendChild(modal);

            modal.querySelector("#close-search-btn").addEventListener("click", closeSearchModal);

            modal.querySelector(".modal-container").addEventListener("click", e => e.stopPropagation());

            modal.querySelector("#search-modal-overlay").addEventListener("click", e => {
                if (e.target.id === "search-modal-overlay") closeSearchModal();
            });
        }

        modal.classList.add("open");
    }

    function closeSearchModal() {
        if (modal) modal.classList.remove("open");
    }

    // opening and closing cart
    function openCart() {
        if (!cart) {
            cart = document.createElement("section");
            cart.id = "cart-modal";
            cart.innerHTML = cartContainer;
            document.body.appendChild(cart);

            cart.querySelector("#close-cart-btn").addEventListener("click", closeCart);

            cart.querySelector(".cart-container").addEventListener("click", e => e.stopPropagation());

            cart.querySelector("#cart-modal-overlay").addEventListener("click", e => {
                if (e.target.id === "cart-modal-overlay") closeCart();
            });
        }

        cart.classList.add("open");
    }

    function closeCart() {
        if (cart) cart.classList.remove("open");
    }

    // render products
    const productsRendered = document.getElementById("products-container");
    if (!productsRendered) return;

    function renderProducts() {
        const boxSize = 240;
        const columns = 12;
        const rows = 12;
        const boxCount = products.length;
        productsRendered.style.width = (columns * boxSize) + "px";
        productsRendered.style.height = (rows * boxSize) + "px";

        for (let i = 0; i < boxCount; i++) {
            const product = products[i];
            const firstImage = product.images[0];

            const box = document.createElement("div");
            box.classList.add("box");
            box.id = product.id;

            const img = document.createElement("img");
            img.classList.add("img");
            img.src = firstImage;

            const name = document.createElement("h1");
            name.textContent = product.name;

            const info = document.createElement("p");
            info.textContent = product.category;

            const content = document.createElement("div");
            content.classList.add("content");
            content.appendChild(name);
            content.appendChild(info);

            box.appendChild(img);
            box.appendChild(content);
            productsRendered.appendChild(box);

            let isDragging = false;
            let isClicking = false;

            box.addEventListener("mousedown", () => {
                isDragging = false;
                isClicking = true;
            });

            box.addEventListener("mousemove", () => {
                isDragging = true;
                isClicking = false;
            });
            box.addEventListener("mouseup", () => {
                if(!isDragging && isClicking) {
                    openProductDetails(product);
                }
            });
            // box.addEventListener("click", () => {
            //     if (!isDragging && isClicking) {
            //         openProductModal(product);
            //     }
            // });

            
        }
    }

    renderProducts();

    let isContainerDragging = false;
    let startCoords = { x: 0, y: 0 };
    let startTranslate = { x: 0, y: 0 };

    productsRendered.addEventListener("mousedown", onDragStart);
    productsRendered.addEventListener("mouseup", onDragEnd);
    productsRendered.addEventListener("mouseleave", onDragEnd);
    productsRendered.addEventListener("mousemove", onDrag);

    function onDragStart(e) {
        isContainerDragging = true;
        startCoords.x = e.clientX;
        startCoords.y = e.clientY;

        startTranslate.x = gsap.getProperty(productsRendered, "x");
        startTranslate.y = gsap.getProperty(productsRendered, "y");

        gsap.set(productsRendered, {
            cursor: "grabbing",
            userSelect: "none"
        });
    }

    function onDragEnd() {
        if (!isContainerDragging) return;
        isContainerDragging = false;

        gsap.set(productsRendered, {
            cursor: "grab",
            userSelect: "auto"
        });
    }

    function onDrag(e) {
        if (!isContainerDragging) return;
        e.preventDefault();

        const deltaX = e.clientX - startCoords.x;
        const deltaY = e.clientY - startCoords.y;

        let translateX = startTranslate.x + deltaX;
        let translateY = startTranslate.y + deltaY;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const contentWidth = productsRendered.offsetWidth;
        const contentHeight = productsRendered.offsetHeight;

        const maxTranslateX = 0; 
        const maxTranslateY = 0; 

        const minTranslateX = viewportWidth - contentWidth;
        const minTranslateY = viewportHeight - contentHeight;

        translateX = Math.min(maxTranslateX, Math.max(minTranslateX, translateX));
        translateY = Math.min(maxTranslateY, Math.max(minTranslateY, translateY));

        gsap.to(productsRendered, {
            x: translateX,
            y: translateY,
            duration: 0.15,
            ease: "power1.out"
        });
    }

    // build product details modal
    function openProductDetails(product) {
        console.log("product clicked:", product);
        const productModal = document.createElement("section");
        productModal.classList.add("modal");

        const existing = document.querySelector(".modal");
        if (existing) existing.remove();

        productModal.innerHTML = `
            <div class="overlay">
                <div class="product-details">
                    <div class="col product-view">
                        <div class="close">
                            <i class="ri-close-fill"></i>
                        </div>
                        <div class="product-img">
                            <div class="carousel">
                                <div id="carouselTrack" class="product-img-container"></div>
                            </div>  
                            <button class="carousel-btn prev">
                                <i class="ri-arrow-left-line"></i>
                            </button>  
                            <button class="carousel-btn next">
                                <i class="ri-arrow-right-line"></i>
                            </button>   
                            <div class="carousel-counter"></div>
                        </div>
                    <div>    
                    <div class="col product-info"> 
                            <div class="product-name">
                                <div class="name">
                                    <h1>${product.name}</h1>
                                    <p>${product.category}</p>
                                    </div>
                                <div class="cart-btn">
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div>
                            <p>
                            ${product.price}
                            </p>
                            <p>
                            ${product.description}
                            </p>
                        </div>
                        <div class="suggestions">
                            <p>Users also bought</p>
                            <div class="box">
                                <img src="./src/images/img2.avif" alt="The Roger Advantage"/>
                                <p>The Roger Advantage</p>
                                <h1>Black | Black</h1>
                            </div>
                            <div class="box">
                                <img src="./src/images/img3.avif" alt="The Roger Advantage"/>
                                <p>The Roger Advantage</p>
                                <h1>White | Olive</h1>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        `;

        document.body.appendChild(productModal);

        productModal.querySelector(".close").addEventListener("click", () => {
            productModal.remove();
        });
        productModal.querySelector(".overlay").addEventListener("click", (e) => {
            if (e.target.classList.contains("overlay")) {
                productModal.remove();
            }
        });

        productModal.addEventListener("click", e => {
            if (e.target === productModal) {
                productModal.remove();
            }
        });

        const track = productModal.querySelector("#carouselTrack");
        const counter = productModal.querySelector(".carousel-counter");
        const btnPrev = productModal.querySelector(".prev");
        const btnNext = productModal.querySelector(".next");

        let images = product.images;

        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("slide");
            track.appendChild(img)
        });

        const firstClone = track.children[0].cloneNode(true);
        const lastClone = track.children[images.length - 1].cloneNode(true);

        track.prepend(lastClone);
        track.appendChild(firstClone);

        let slides = Array.from(track.children);
        let index = 1;
        const totalSlides = images.length;

        function updateCounter(realIndex) {
            counter.textContent = `${realIndex}/${totalSlides}`;
        }

        function updatePosition(smooth = true) {
            // const slideWidth = slides[0].offsetWidth;
            // const gap = 10;
            const styles = getComputedStyle(track);
            const gap = parseFloat(styles.gap) || 0;
            const slideWidth = slides[0].getBoundingClientRect().width;

            if(!smooth) track.style.transition = "none";
            else track.style.transition = "transform 0.45s ease-in-out";

            // track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
            track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

            let realIndex = index === 0 ? totalSlides : index === slides.length - 1 ? 1 : index;

            updateCounter(realIndex);
        }

        function moveNext() {
            if(index >= slides.length - 1) return;
            index++;
            updatePosition();
        }

        function movePrev() {
            if(index <= 0) return;
            index--;
            updatePosition();
        }

        btnPrev.addEventListener("click", movePrev);
        btnNext.addEventListener("click", moveNext);

        track.addEventListener("transitionend", () => {
            if (slides[index] === slides[slides.length -1 ]) {
                index = 1;
                requestAnimationFrame(() => updatePosition(false));
            }
            if (slides[index] === slides[0]) {
                index = slides.length - 2;
                requestAnimationFrame(() => updatePosition(false));
            }
        });

        let startX = 0;

        track.addEventListener("touchstart", e => (startX = e.touches[0].clientX));
        track.addEventListener("touchend", e => {
            const diff = e.changedTouches[0].clientX - startX;
            if (diff < -50) moveNext();
            if (diff > 50) movePrev();
        });

        window.addEventListener("resize", () => updatePosition(false));
        updatePosition(false);

        // function imgSlide(i) {
        //     index = (i + images.length) % images.length;
        //     track.style.transform = `translateX(-${index * 100}%)`;
        //     updateCounter();
        // }
    }

});



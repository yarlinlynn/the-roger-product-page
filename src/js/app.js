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

});



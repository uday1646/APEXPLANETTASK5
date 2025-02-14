document.addEventListener("DOMContentLoaded", () => {
    let cart_container = document.querySelector(".cart_container");
    let products_container = document.querySelector(".container");
    let cart_count = document.querySelector(".cart_count h1");
  
    function createCard(item) {
      let card = document.createElement("div");
      card.className = `card ${item.id}`;
  
      let title = document.createElement("h1");
      title.className = "title";
      title.innerHTML = item.title;
  
      let img = document.createElement("img");
      img.className = "img";
      img.src = item.image;
  
      const price = document.createElement("p");
      price.className = "price";
      price.innerHTML = `Price: $${item.price}`;
  
      let rating = document.createElement("span");
      rating.className = "rating";
  
      for (let i = 0; i < Math.floor(item.rating.rate); i++) {
        let STAR = document.createElement("img");
        STAR.src = "star.png";
        STAR.style.height = "1.5rem";
        STAR.style.width = "1.5rem";
        rating.appendChild(STAR);
      }
  
      let add_btn = document.createElement("button");
      add_btn.innerText = "Add to Cart";
      add_btn.className = "add_btn";
      add_btn.addEventListener("click", () => {
        let cartItems =
          JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert("Item added to cart");
        updateCartCount();
      });
  
      card.append(title, img, price, add_btn, rating);
      products_container.append(card);
    }
   
    async function getProducts() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        data.forEach((item) => {
          createCard(item);
        });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  
    function updateCartCount() {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cart_count.innerText = cartItems.length;
      if (cart_count.innerText >= 1) {
        const cart_title = document.querySelector(".cart_title");
        cart_title.innerText = "Your Cart";
        const cart_empty_img = document.querySelector(".empty_cart");
        cart_empty_img.style.display = "none";
      }
    }
  
    getProducts();
    updateCartCount();
  });
    document.addEventListener("DOMContentLoaded", () => {
      const cart_container = document.querySelector(".cart_container");
      const cart_total = document.querySelector(".cart_tot_val");
      const cart_count = document.querySelector(".cart_count_val");
  
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      let cartTotalValue = 0;
  
      cartItems.forEach((item) => {
        let ncard = document.createElement("div");
        ncard.className = `ncard ${item.id}`;
  
        let ntitle = document.createElement("h1");
        ntitle.className = "ntitle";
        ntitle.innerHTML = item.title;
  
        let nimg = document.createElement("img");
        nimg.className = "nimg";
        nimg.src = item.image;
  
        const nprice = document.createElement("p");
        nprice.className = "nprice";
        nprice.innerHTML = `Price: $${item.price}`;
  
         function createCheckout() {
           let checkout = document.createElement("div");
           checkout.className = `checkout`;
           let couponInp = document.createElement("input");
           couponInp.className = `couponInp`;
           let checkoutBtn = document.createElement("div");
           checkoutBtn.className = `checkout_btn`;
         }
  
        
      let dlt_btn = document.createElement("button");
      dlt_btn.innerText = "Delete";
        dlt_btn.className = "dlt_btn";
        
      dlt_btn.addEventListener("click", () => {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let itemIndex = cartItems.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        if (itemIndex > -1) {
          cartItems.splice(itemIndex, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          alert("Item deleted from cart");
  
          updateCartCount();
          removeItemFromDisplay(item.id); 
        } else {
          alert("Item not found in cart");
        }
      });
  
      function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let cartCountElement = document.querySelector(".cart_count");
  
        if (cartCountElement) {
          cartCountElement.innerText = cartItems.length;
        }
      }
  
      function removeItemFromDisplay(itemId) {
        let itemElement = document.querySelector(`#item_${itemId}`);
        if (itemElement) {
          itemElement.remove();
        }
        window.location.href='cart.html'
      }
  
        ncard.append(ntitle, nimg, nprice,dlt_btn);
        cart_container.append(ncard);
       createCheckout()
  
        cartTotalValue += item.price;
      });
  
      cart_total.innerText = `$${cartTotalValue.toFixed(2)}`;
      cart_count.innerText = cartItems.length;
    });
  
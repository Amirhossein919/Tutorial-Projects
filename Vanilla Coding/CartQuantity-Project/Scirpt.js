      let CartQuantity = 0;

      let LC = JSON.parse(localStorage.getItem("Cart_Quantity"));
      LC ? (CartQuantity = LC, console.log("Success")) : ( console.log("Failed"));      

      AOR = (Value) => {
        Value < 0 ? CartQuantity-- : Value > 0 ? CartQuantity++ : CartQuantity = 0;
        CVCQ();
      }

      AORN = (Number) => {
        (Number > 0 || Number < 0 ) ? CartQuantity += Number : CartQuantity = 0;
        CVCQ();    
      }

      CVCQ = () => {
        CartQuantity < 0 
        ? 
          (alert(`Cart Is Empty, Invalid Request...`), 
            console.log(CartQuantity), 
            document.getElementById("Cart").innerHTML = CartQuantity = 0) 
        :
        (CartQuantity > 100) 
        ? 
          (alert(`Not Enough Space, Cart Is Full...`), 
            console.log(CartQuantity), 
            document.getElementById("Cart").innerHTML = CartQuantity = 0) 
        :
          (console.log(`Cart Quantity: ${CartQuantity}`),
             document.getElementById("Cart").innerHTML = CartQuantity);

        UPDATE();
      }

      UPDATE = () => {
        localStorage.setItem("Cart_Quantity",JSON.stringify(CartQuantity));
        JSON.stringify(CartQuantity) ? console.log("Saved") : console.log("Not Saved");
      }

      SC = () => {
        CVCQ();
        UPDATE();
      }
      SC();

      RC = () => {
        CartQuantity = 0;
        console.log(`Cart Has Been Reset...`);
        SC();
      }
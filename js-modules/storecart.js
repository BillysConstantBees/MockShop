/*functions that trigger on loading in */
window.addEventListener('load', loadingInFunc);

function loadingInFunc() {
    let addToCartBtns = document.getElementsByClassName('bBtn');
    for (let i = 0; i < addToCartBtns.length; i++) {
        let button = addToCartBtns[i];
        button.addEventListener('click', addToCart);
        button.addEventListener('click', CalcPrice);
    };
};

/*Add to cart function(s) below */

function addToCart(event) {
    let button = event.target
    let boughtItem = button.parentElement.parentElement
    let iName = boughtItem.getElementsByClassName("itemName")[0].innerText
    let iPrice = boughtItem.getElementsByClassName("Price")[0].innerText
    let iImg = boughtItem.getElementsByClassName("prodImg")[0].src

    mvTCart(iName, iPrice, iImg)
};

function mvTCart(iName, iPrice, iImg) {
    
    let space = document.createElement("div")
    space.classList.add('cartRow')

    let sCart = document.getElementsByClassName("shoppingCart")[0]

    let selItemCont = `
    <div class="cartItem cartCol">
        <img class="cartItemImg" src="${iImg}" width="50" height="50">
        <span class="cartItemTitle">${iName}</span>
    </div>
    <span class="cartPrice cartCol">${iPrice}</span>`;

    space.innerHTML = selItemCont;

    sCart.append(space);
}


/* Calculate Price total below*/

setInterval(CalcPrice, 5000);

function CalcPrice () {
    let totalP = 0;

    let cartS = document.getElementsByClassName("shoppingCart")[0];
    
    let itemRows = cartS.getElementsByClassName("cartRow");

    for (let j = 0; j < itemRows.length; j++) {
        let CRow = itemRows[j];
        let priceCl = CRow.getElementsByClassName('cartPrice')[0];
        /* got the replace from the coding of the del btn in
        sprint 3 */
        let price = parseFloat(priceCl.innerText.replace('$', ''));

        totalP = totalP + price;
    }

    totalP = Math.round(totalP * 100) / 100;

    document.getElementsByClassName("cartTotal")[0].innerText = `Cart Total = `+`$`+`${totalP}`;
};


/*Local storage below */

// function storeDat() {

//     let bagItems = document.getElementsByClassName('cartRow');
    
    
//     let cartArray = Array.from(bagItems);
//     console.log(cartArray);
//     localStorage.setItem("cart", JSON.stringify(cartArray));
// };

// function showDat() {
//     localStorage.getItem("cart")
// }
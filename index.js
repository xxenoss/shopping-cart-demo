const phoneMinusButtons21 = document.getElementById("minus-s21");
const phonePlusButtons21 = document.getElementById("plus-s21");
const s21PriceValue = parseFloat(document.getElementById("price-s21").textContent)

const phoneMinusButtons24 = document.getElementById("minus-s24");
const phonePlusButtons24 = document.getElementById("plus-s24");
const s24PriceValue = parseFloat(document.getElementById("price-s24").textContent)
var subTotalValue = document.getElementById("subtotal-amount")
var totalAmount = document.getElementById("total-amount")

function updateSubtotal() {
    const s21Price = parseFloat(document.getElementById("price-s21").textContent);
    const s24Price = parseFloat(document.getElementById("price-s24").textContent);
    subTotalValue.textContent = s21Price + s24Price;
}
function updateTotal() {
    const s21Price = parseFloat(document.getElementById("price-s21").textContent);
    const s24Price = parseFloat(document.getElementById("price-s24").textContent);
    totalAmount.textContent = s21Price + s24Price + 49;
    document.getElementById("tax-amount").textContent = 49;
}


//s24 plus button 
function plusButtonClickedS24(elementName){
    var inputPhoneNumber = document.getElementById("phone-number-s24")
    var s21Price = document.getElementById("price-s24")

    
    phonePlusButtons24.addEventListener("click", function(){
        var getPlusValue = parseFloat(inputPhoneNumber.getAttribute("value"))
        var addValue = getPlusValue  + 1
        inputPhoneNumber.setAttribute("value", addValue)

        var getPriceS21 = parseFloat(s21Price.textContent)
        var addNewPrice = getPriceS21 + s24PriceValue
        s21Price.textContent = addNewPrice

        updateSubtotal();
        updateTotal();


    })

}

//s21 plus button click

function plusButtonClickedS21(elementName){
    var inputPhoneNumber = document.getElementById("phone-number-s21")
    var s21Price = document.getElementById("price-s21")
    
    phonePlusButtons21.addEventListener("click", function(){
        var getPlusValue = parseFloat(inputPhoneNumber.getAttribute("value"))
        var addValue = getPlusValue  + 1
        inputPhoneNumber.setAttribute("value", addValue)

        var getPriceS21 = parseFloat(s21Price.textContent)
        var addNewPrice = getPriceS21 + s21PriceValue
        s21Price.textContent = addNewPrice

        updateSubtotal();
        updateTotal()
        

    })

}




//s21 minus button click
function minusButtonClickedS21(elementName){
    var inputPhoneNumber = document.getElementById("phone-number-s21")
    var s21Price = document.getElementById("price-s21")
    
    phoneMinusButtons21.addEventListener("click", function(){
        var getMinusValue = parseFloat(inputPhoneNumber.getAttribute("value"))
        if (getMinusValue > 1){
            var MinusValue = getMinusValue  - 1
            inputPhoneNumber.setAttribute("value", MinusValue)
        }

        var getPriceS21 = parseFloat(s21Price.textContent)
        if (getPriceS21 !== 1090){
            var addNewPrice = getPriceS21 - s21PriceValue
            s21Price.textContent = addNewPrice
        }
        updateSubtotal();
        updateTotal()
    })
    

}
//s24 minus button click
function minusButtonClickedS24(elementName){
    var inputPhoneNumber = document.getElementById("phone-number-s24")
    var s21Price = document.getElementById("price-s24")
    
    phoneMinusButtons24.addEventListener("click", function(){
        var getMinusValue = parseFloat(inputPhoneNumber.getAttribute("value"))
        if (getMinusValue > 1){
            var MinusValue = getMinusValue  - 1
            inputPhoneNumber.setAttribute("value", MinusValue)
        }

        var getPriceS21 = parseFloat(s21Price.textContent)
        if (getPriceS21 !== 1290){
            var addNewPrice = getPriceS21 - s24PriceValue
            s21Price.textContent = addNewPrice
        }
        updateSubtotal();
        updateTotal()
    })

}

plusButtonClickedS21()
minusButtonClickedS21()
plusButtonClickedS24()
minusButtonClickedS24()
updateSubtotal();
updateTotal()
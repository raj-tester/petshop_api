import {Selector, t} from 'testcafe'
import CartPage from '../Pages/CartPage'
var ClientFunction = require("testcafe").ClientFunction;

const goBack = ClientFunction(() => window.history.back());
const cartPageObj = new CartPage()

class Util {

    constructor(){

        this.addToCart =  Selector('input[id="add-to-cart-button"]')
        this.subTotalValue = Selector('span[id="sc-subtotal-amount-buybox"]');

    }

    async selecttheProduct(totalProduct){

     var prodIndex = await Selector('div[class="s-main-slot s-result-list s-search-results sg-row"]').child('div[data-index="1"]')
     await t
            .click(prodIndex, { ctrl: true }) 

     for(var x = 1;x<=totalProduct;x++)
        {
        await t
              .click(this.addToCart)
              .maximizeWindow()
              if(x < totalProduct ){
               await goBack();
              }

             if(x==totalProduct){
                 await t.click(cartPageObj.cart)
               }
}

}
}

export default Util;
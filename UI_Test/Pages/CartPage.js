import {Selector, t} from 'testcafe'

class CartPage {

    constructor(){

        this.cart =  Selector('a[id="hlb-view-cart-announce"]')
        
        this. deleteLink = Selector('input[value="Delete"]')

    }

    async clickCartBasket(){

        await t
               .click(this.cart);
    }

    async deleteItem(){

        await t
               .click(this.deleteLink);
    }

}

export default CartPage;
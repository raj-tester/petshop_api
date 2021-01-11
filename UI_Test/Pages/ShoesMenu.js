import {Selector, t} from 'testcafe'


class ShoesMenu{

    constructor(){

      this.menu = { 
        
        shoeOptions:[
          {
        formalShoes: Selector('span').withText("Formal Shoes")
          }
        ]
    }

  }

  async viewFormalShoes(){
    await t
    .click(this.menu.shoeOptions[0].formalShoes);

}
}
export default ShoesMenu;
import {Selector, t} from 'testcafe'


class ManFashionMenu{

    constructor(){

      this.menu = {

        menuOptions:[
        {          
        shoes: Selector('a').withText("Shoes")
        }
       ]
    }

  }

  async viewMenShoes(){
    await t
    .click(this.menu.menuOptions[0].shoes);

}
}
export default ManFashionMenu;
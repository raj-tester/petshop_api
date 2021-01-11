import {Selector, t} from 'testcafe'

class HomePage {

    constructor(){

        this.allMenu = Selector('a[id="nav-hamburger-menu"]');
        this.MenuOptions = 
               {
                shopByDepartment :
                 [
                  {    
                  manFashion: Selector('a[class="hmenu-item"]').child('div').withText("Men's Fashion")
                  }
                ]

     }

    }


     async viewAllMenuOptions(){
        await t
        .click(this.allMenu);

    }

    async viewMenFashionDepartment(){
        await t
        .click(this.MenuOptions.shopByDepartment[0].manFashion);

    }

    



}
export default HomePage;
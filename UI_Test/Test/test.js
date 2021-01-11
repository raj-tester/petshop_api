import {Selector, t} from 'testcafe'
import HomePage from '../Pages/HomePage'
import ManFashionMenu from '../Pages/ManFashionMenu'
import ShoesMenu from '../Pages/ShoesMenu'
import ShoesProductFilter from '../Product Filter/ShoesProductFilter'
import CartPage from '../Pages/CartPage'
import Util from '../Utility/Util'
var ClientFunction = require("testcafe").ClientFunction;

    const HomePageObj = new HomePage()
    const ManFashionMenuObj = new ManFashionMenu()
    const ShoesMenuObj= new ShoesMenu()
    const ShoesProductFilterObj= new ShoesProductFilter()
    const cartPageObj = new CartPage()
    const utilObj = new Util()
    const goBack = ClientFunction(() => window.history.back());

fixture `Getting Started`
    .page `https://www.amazon.in/`
    .beforeEach(async t => {
        // Runs before each test
        await t.maximizeWindow();
    })

    test('My first test', async t => {
      await  HomePageObj.viewAllMenuOptions();
      await  HomePageObj.viewMenFashionDepartment();
      await  ManFashionMenuObj.viewMenShoes();
      await  ShoesMenuObj.viewFormalShoes();
      await  ShoesProductFilterObj.filterSelection();
      await  utilObj.selecttheProduct(3);
      var subTotalText = utilObj.subTotalValue;
      var contentText = await subTotalText().textContent;
      var subTotal = parseInt((contentText.replace(',','')));

     if(subTotal > 2000.00){
        await cartPageObj.deleteItem();
            
            }
    });


    
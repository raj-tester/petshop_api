import {Selector, t} from 'testcafe'
import { compileFunction } from 'vm';
var testData =  require ('../TestData/MainData')


class ShoesProductFilter{

    constructor(){
        this.Productfilters = { 

        brand : [

            {
                Bata: Selector('li[id="p_89/BATA"]').child('span[class="a-list-item"]').child('a')
            }
        ],

        Uksize: [
            {
                size7: Selector('button[value="7"]')
            }
           ]
                  
   
    }
  }

  

   

  async filterSelection()
  {
    let brandFilter = testData.filterData.Brand;
    let ukSizeFilter = testData.filterData.UKSize;

for(var x=0; x<this.Productfilters.Uksize.length;x++){

    if(this.Productfilters.Uksize[x].hasOwnProperty([ukSizeFilter]))
    {
       await t
      .click(this.Productfilters.Uksize[x][ukSizeFilter]);
      break;
      
  }
  }

  for(var x=0; x<this.Productfilters.brand.length;x++){

    if(this.Productfilters.brand[x].hasOwnProperty([brandFilter]))
    {
      
        var seeMoreLink  = await Selector('a[aria-label="See more, Brands"]');
        await t.click(seeMoreLink)
      .click(this.Productfilters.brand[x][brandFilter]);
      break;
      
  }
  }
}
   
}
export default ShoesProductFilter;
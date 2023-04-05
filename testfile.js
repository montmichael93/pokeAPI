//testfile
const countries = fetch('https://restcountries.com/v3.1/all');

Promise
.all([countries ])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
 
    console.log(data)
  
  
    }).catch((error) => console.log(error))



/*        
const PokeItem = fetch("https://pokeapi.co/api/v2/item?limit=100000&offset=0/");

      Promise
     .all([PokeItem])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
        
  let [totalItem] = data
  let [...urlList] = totalItem.results
  let [...nameList] = totalItem.results
     
  urlList = urlList.map((urlList) => urlList.url); 
  nameList = nameList.map((nameList) => nameList.name); 
    
     
  let randomItem = (Math.floor(Math.random() * urlList.length))
  let pickedItem = urlList[randomItem]
  //url
  const selectedItem = fetch(pickedItem)
  //console.log(nameList)
   
     
      
  Promise    
 .all([selectedItem])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
    
      
   let [itemInfo] = data
   const itemName = itemInfo.name
   const itemCost = itemInfo.cost
   const itemEffect = itemInfo.effect_entries
   const itemEffectEntry = itemInfo.flavor_text_entries
   
  
  // console.log(itemEffect)
  // console.log(itemEffectEntry)
      
  console.log(itemInfo)
   
  }).catch((error) => console.log(error))
  
  }).catch((error) => console.log(error))    
      
     /*
 Promise
.all([Pokemon])
.then((response) => {
    return Promise.all(response.map((res) => res.json()));
    }).then((data) => {
      console.log()
        }).catch((error) => console.log(error))
*/
      
      

        
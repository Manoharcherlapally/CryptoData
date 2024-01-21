
const api=document.querySelector('.apiData')
const searchBar=document.querySelector("#search")

function CryptoData(){
     fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3&sparkline=false")
     .then((response)=>response.json ())
     .then((data)=>{
        console.log(data)
        displayData(data)
        search(data)
     
   }   )
}
CryptoData()

function displayData(data){
    data?.forEach((coin) => {
        const div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML=`
        <div class="flip-card">
            <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="${coin.image}" alt="${coin.name}"  width="200" height="220"/>
        <p class="card__title">Name: ${coin.name}</p>
        </div>
        <div class="flip-card-back">
        <p class="card__title"> Price: ${coin.current_price}</p>
       <p class="card__title"> Symbol: ${coin.symbol}</p>
        <p class="card__description"> Market_cap: ${coin.market_cap}</p>
        <p class="card__title">Rank: ${coin.market_cap_rank}</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
        
        `
        api.appendChild(div);
    })
}


 function search(data){
   searchBar.addEventListener('input',(e)=>{
    const value = e.target.value

    const filterData = data?.filter((val)=>{
        return val.name.toLowerCase().includes(value.toLowerCase()) 
    })
    removeChildNodes()
    displayData(filterData)
  })
}

function removeChildNodes(){
    while (api.firstChild) {
        api.removeChild(api.firstChild);
        }
}
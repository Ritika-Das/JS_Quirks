const cheese = [
  {
    "name": "Cheddar",
    "image": "https://raw.githubusercontent.com/Ritika-Das/JS_Quirks/main/Displaying%20Images%20using%20JSON/cheddar.jpeg"
  },

  {
    "name": "Mozzarella",
    "image": "https://raw.githubusercontent.com/Ritika-Das/JS_Quirks/main/Displaying%20Images%20using%20JSON/mozzarella.jpeg"
  }
]

document.getElementById('output').innerHTML = `

  <h2 class="results">
    Cheeses 🧀 fetched: ${cheese.length} results
  </h2>

  <div class="photos">

    <img class="cheese-photo" src="${cheese[0].image}">
    <img class="cheese-photo" src="${cheese[1].image}">

  </div>

  <h3>${cheese[0].name}</h3>
  <h3>${cheese[1].name}</h3>

`

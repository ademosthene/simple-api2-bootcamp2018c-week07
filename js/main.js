// Add event listener to submit button, runs getPokemon
document.querySelector('form').addEventListener('submit',getPokemon);

// Retrieves pokemon from API
function getPokemon(e){
  // prevent page reload after submit button pressed
  e.preventDefault()
  // set name variable equal to user input
  let name = document.querySelector('#name').value
  // make call to pokemon API using user input
  fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
      // displays hi res image of 1st pokemon in DOM
      document.getElementById('card').src = response.cards[0].imageUrlHiRes;

  })

  .catch(err => {
    console.log(`error ${err}`)
    alert("")
  });
}

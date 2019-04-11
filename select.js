'strict mode'

let restaurantArray = []
let elImageContainer = document.getElementById('imageContainer')

function RestaurantObject(name, logoPath, restPath, id, cuisine){
this.name = name
this.logoPath = logoPath
this.restPath = restPath
this.id = id
this.cuisine = cuisine
this.clicked = 0
this.shown = 0
}
// Prototype for restaurant logo display- unused
RestaurantObject.prototype.getLogo = function(){
  return this.logoPath
}

//declare new objects and accompanying properties within each new restaurant Object
let BibiBop = new RestaurantObject('BibiBop', './assets_new/bibibop.png', './assets_new/rest_bibibop.jpg', 'BibiBop', 'asian')
let Chipotle = new RestaurantObject('Chipotle', './assets_new/chipotle.jpg', './assets_new/rest_chipotle.png', 'Chipotle', 'spanish')
let Cesco = new RestaurantObject('CescoOsteria', './assets_new/cesco.png', './assets_new/rest_cesco.jpg', 'Cesco Osteria', 'italian')
let GringoMariachi = new RestaurantObject('GringoMariachi', './assets_new/gringo_mari.png', './assets_new/rest_gringomari.jpg', 'Gringos & Mariachis', 'spanish')
let Jaleo = new RestaurantObject('Jaleo', './assets_new/jaleo.jpg', './assets_new/rest_jaleo.jpg', 'Jaleo', 'spanish')
let Tandoori = new RestaurantObject('TandooriNights', './assets_new/tandoori.png', './assets_new/rest_tandoori.jpg', 'Tandoori Nights', 'asian')
let LaMadeleine = new RestaurantObject('laMadeleine', './assets_new/la_madeleine.jpg', './assets_new/rest_madeleine.jpg', 'La Madeleine', 'french')
let HanaroSushi= new RestaurantObject('HanaroSushi', './assets_new/hanaro.png', './assets_new/rest_hanaro.jpg', 'Hanaro Sushi', 'asian')
let MamaLucia = new RestaurantObject('MamaLucia', './assets_new/mama_lucia.jpg', './assets_new/rest_mamalucia.jpg', 'Mama Lucia', 'italian')
let MannyOlga = new RestaurantObject('MannyOlga', './assets_new/manny_olga.png', './assets_new/rest_manny-olga.jpg', 'Manny & Olga\'s Pizza', 'italian')
let MonAmi = new RestaurantObject('MonAmiGabi', './assets_new/mon_ami.jpg', './assets_new/monami.jpg', 'Mon Ami Gabi', 'french')
let Olazzo = new RestaurantObject('Olazzo', './assets_new/olazzo.jpg', './assets_new/rest_olazzo.jpg', 'Olazzo', 'italian')
let Panetteria = new RestaurantObject('Panetteria', './assets_new/panetteria.jpg', './assets_new/rest_panetteria.jpg', 'La Panetteria', 'french')
let Raku = new RestaurantObject('Raku', './assets_new/raku.png', './assets_new/rest_raku.jpg', 'Raku', 'asian')
let UncleJulios= new RestaurantObject('UncleJulios', './assets_new/unclejulios.jpg', './assets_new/rest_julios.jpg', 'Uncle Julios', 'spanish')
let LeVieux = new RestaurantObject('LeVieuxLogis', './assets_new/le_vieux.jpg', './assets_new/rest_levieuxlogis.jpg', 'Le Vieux Logis', 'french')

//push new instances/objects into the restaurant array
restaurantArray.push(BibiBop, Chipotle, Cesco, GringoMariachi, Jaleo, Tandoori, LaMadeleine, HanaroSushi, MamaLucia, MannyOlga, MonAmi, Olazzo, Panetteria, Raku, UncleJulios, LeVieux)
let cuisineSelectors = document.querySelectorAll('input')

//Function declared to select cuisine options activated by clicking 1 of 3 radio buttons
function restaurantSelector(clickedElements, restaurants) {
  for (let restaurant of restaurants) {
    for (let clickedElement of clickedElements) {
      clickedElement.addEventListener('click', function(event) {
        if (event.currentTarget.value === restaurant.cuisine) {
          elImageContainer.innerHTML = ''
          displayLogoImage(restaurants, clickedElement.value)
        }
        clickedRestaurantLogo(restaurants, elImageContainer.childNodes)
      })
    }
  }
}

//Display logo images based on cuisine category selected
function displayLogoImage(restaurants, val) {
  for (restaurant of restaurants){
    let logo = document.createElement('img')
    if (restaurant.cuisine === val) {
      logo.name = restaurant.name
      logo.src = restaurant.logoPath
      elImageContainer.appendChild(logo)
    }
  }
  let displayInstructions = document.getElementById('select-message')
  //Create values for established DOM element with instructions
    //Display instructions for logo selection
    displayInstructions.innerText = ('Select your desired dining option')
}

//Track logo selection and house in local storage for processing
function clickedRestaurantLogo(restaurants, logoArrays) {
  //create a slected restaurant variable using for-of loops
  for (let restaurant of restaurants) {
    for (let logo of logoArrays) {
      logo.addEventListener('click', function (event) {
        if (event.currentTarget.name === restaurant.name) {
          addDataToLocalStorage(restaurant)
        }
        //Reference created to go to results page
        window.location = './results.html'
      })
    }
  }
}
//Function to store the selection of restaurant object instance
function addDataToLocalStorage(data){
  localStorage.setItem('restaurant', JSON.stringify(data))
}

restaurantSelector(cuisineSelectors, restaurantArray)
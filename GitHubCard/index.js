import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/eleonard214')
.then(response=>{
  const obj = response.data
  const cards=document.querySelector('.cards')
  cards.appendChild(cardCreator(obj))
})
.catch(error=>{
  console.log(error)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];

followersArray.forEach(follower=>{
  axios.get(`https://api.github.com/users/${follower}`)
  .then(info=>{
    const cards =document.querySelector('.cards')
    cards.appendChild(cardCreator(info.data))
  })
  .catch(error=>{
    console.log(error)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardCreator(object){
  const card =document.createElement('div')
  card.classList.add('card')

  const image = document.createElement('img')
  image.src=object['avatar_url']
  card.appendChild(image)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  const name= document.createElement('h3')
 name.classList.add('name')
  name.textContent=object.name
  cardInfo.appendChild(name)

  const userName=document.createElement('p')
  userName.classList.add('username')
  userName.textContent=object.login
  cardInfo.appendChild(userName)

  const location=document.createElement('p')
  location.classList.add('location')
  location.textContent=`Location: ${object.location}`
  cardInfo.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent= 'Profile:'
  cardInfo.appendChild(profile)

  const githubUrl=document.createElement('a')
  githubUrl.textContent= `${object.html_url}`
  profile.appendChild(githubUrl)

const followers=document.createElement('p')
followers.classList.add('followers')
followers.textContent= `Followers: ${object.followers}`
cardInfo.appendChild(followers)

const following=document.createElement('p')
following.classList.add('following')
following.textContent=`Following: ${object.following}`
cardInfo.appendChild(following)

const bio =document.createElement('p')
bio.classList.add('bio')
bio.textContent= `Bio: ${object.bio}`
cardInfo.appendChild(bio)

return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => userCard.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getCards() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userImg.src = data.img
  })
  .catch(error => console.error(error))
}

getUsers()
getCards()
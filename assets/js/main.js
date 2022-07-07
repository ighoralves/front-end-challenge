const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => userCard.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

async function getUser() {
  let response = await fetch('url');
  let data = await response.json();
  console.log(data);
}

async function fetchCard() {
  let response = await fetch('/readme.txt');

  console.log(response.status); // 200
  console.log(response.statusCard); // OK

  if (response.status === 200) {
      let data = await response.json();
      // handle data
  }
}

async function getUsers() {
  let url = 'users.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      let htmlSegment = `
      <div class="h-post__item">
        <img
          src=${_embedded["wp:featuredmedia"][0].media_details.sizes["jnews-350x250"].source_url}
          alt="x"
          class="h-post__img"
        />
        <div class="h-post__content">
          <h2 class="h-post__title"><a href="/post/${slug}">${title.rendered}</a></h2>
          <p class="h-post__author">BY <span>${_embedded.author[0].name}</span></p>
          <div class="h-post__call">${excerpt.rendered}</div>
        </div>
      </div>
    `;

      html += htmlSegment;
  });

  let container = document.querySelector('.Container');
  container.innerHTML = html;
}

renderUsers();


getCards()
getUser()
fetchCard();
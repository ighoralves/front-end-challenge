function fetchApiDate() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`
  }
}

function fetchApiDate(){  
  fetch ('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
  .then(response => response.json())
  .then(data => {
    const usercard = document.getElementById('userCard')
    
  }) 
}

fetchApiDate()
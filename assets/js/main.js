function getRequest(){  
  const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518'

  fetch(url)
  .then(Response => Response.json())
  .then(data => {
    document.getElementById('userCard')
  })
}

getRequest()


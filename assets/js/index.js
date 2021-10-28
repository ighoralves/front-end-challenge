const xhr = new XMLHttpRequest;

xhr.open("GET", "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");

xhr.addEventListener("load", function(){
    loadEvent(xhr);
});
xhr.send();


const button = document.querySelector("#load-more");

const requestNum = 2;

button.addEventListener("click", function(){

    const x = new XMLHttpRequest;
    const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page="+requestNum;
    x.open("GET", url, true);
    const button = document.querySelector(".fa");

    console.log('OPENED', x.readyState);

    const buttonLoad = document.querySelector(".fa-spin");
    buttonLoad.classList.remove("no-load");

    xhr.onprogress = function () {
        console.log('LOADING', x.readyState);
    };

    x.addEventListener("load", function(){
        loadEvent(x);
    });


    x.onload = function () {
        buttonLoad.classList.add("no-load");
        console.log('DONE', xhr.readyState);
    };


    requestNum++;
    x.send();

});

function loadEvent(x){
    if(x.status == 200){
        const resposta = x.responseText;

        const posts = JSON.parse(resposta);

        setTimeout(function(){
            posts.forEach(function(post){
                listOfPost(post);
            });
        }, 200);


    }else{
        console.log(x.status);
        console.log(x.responseText);
    }
}
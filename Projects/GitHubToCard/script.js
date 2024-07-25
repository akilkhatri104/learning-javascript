const url = "https://api.github.com/users/akilkhatri104"
let data
const xhr = new XMLHttpRequest()

const image = document.querySelector('.profile-img')
const followers = document.querySelector('#followers')
const name = document.querySelector('#name')
const github = document.querySelector('#github')
const email = document.querySelector('#email')

xhr.open('GET',url)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        data = JSON.parse(this.responseText)
        image.src = data.avatar_url
        name.innerText = data.name
        followers.innerText = `Followers: ${data.followers}`
        github.href = data.html_url
        email.innerHTML = `
            Email: <a href="mailto:${data.email}">${data.email}</a>
        ` 
        
    }
}

xhr.send()
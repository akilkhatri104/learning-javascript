const url = "https://api.github.com/users/akilkhatri104"
let data
const xhr = new XMLHttpRequest()

const image = document.querySelector('#profile-img')
const followers = document.querySelector('#followers')
const name = document.querySelector('#name')
const github = document.querySelector('#github')
const email = document.querySelector('#email')

xhr.open('GET',url)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        data = JSON.parse(this.responseText)
        image.src = data.avatar_url
        github.style.display = 'inline'
        github.innerHTML = `
            <a href="${data.html_url}">GitHub</a>
        `
        
    }
}

xhr.send()
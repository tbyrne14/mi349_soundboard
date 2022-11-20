const sounds = ['boing', 'cash register', 'cheering']

sounds.forEach(sound => {
    const butt = document.createElement('button')
    butt.classList.add('butt')

    butt.innerText = sound 

    butt.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    
    document.getElementById('buttons').appendChild(butt)


})
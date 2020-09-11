document.addEventListener('DOMContentLoaded', async ()=>{
    const loggedInUser = localStorage.getItem('TEQ_CURRENT_USER_ID');
    const container = document.querySelector('.event__host-picture-container');
    const randomNum = Math.floor(Math.random()*8);
    const image = document.createElement('img');
    const thisEvent = whatEvent()
    
    //Rendering Random Profile Cartoon
    image.setAttribute('src', `../public/images/char-${randomNum}.png`);
    image.setAttribute('class', 'event__host-picture');
    container.appendChild(image);
    
    //Passing Logged in user id for Join Button
    const passer = document.getElementById('hidden-form-user-id');
    passer.value = loggedInUser;
    
    // const events = await fetch(`http://localhost:8080/events/who-is-logged/${loggedInUser}/${thisEvent}`);
    // console.log(events)

    
    function whatEvent() {
        let index;
        for (let i = window.location.href.length -1; i > 0; i --) {
            if (window.location.href[i] === '/') {
                
                return window.location.href.slice(i + 1)
            }
        }
    }
})



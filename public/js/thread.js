//script for passing thread information to database and screen rendering
const startThread = async (event) => {
    event.preventDefault();

    // const thread = ' ';
    // const counter_offer = ' ';
    const post_id = event.target.getAttribute('data-id');

        const response = await fetch('/updatePostID', {
            method: 'POST',
            body: JSON.stringify({ post_id }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            console.log('thread container created for ' + post_id)
        } else {
            const x = await response.json()
            console.log(x.message)
        }
    
}

//script for passing thread information to database and screen rendering
const postThread = async (event) => {
    event.preventDefault();

    const thread = document.querySelector('#thread-text').value.trim();
    const counter_offer = document.querySelector('#counter-text').value.trim();

    if (thread) {
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({ thread, counter_offer }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            const x = await response.json()
            console.log(x.message)
        }
    }
}


const postThreadBtn = document.querySelectorAll('.thread-start-btn');
postThreadBtn.forEach(btn => {
    btn.addEventListener('click', startThread)
})

document.querySelector('#thread-post-btn').addEventListener('click', postThread);
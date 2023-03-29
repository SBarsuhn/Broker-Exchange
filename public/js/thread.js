const thread = async (event) => {
    event.preventDefault();

    const thread = document.querySelector('#thread-text').value.trim();
    const counter_offer = document.querySelector('#counter-text').value.trim();
    // const params = window.location;
    // const post_id = params.toString().split('/')[params.toString().split('/').length - 1];
    const post_id = event.target.getAttribute('data-id');
    console.log('++++++++++++++++++++++++++++++++ ' + post_id + ' +++++++++++++++++++++++++++++++++++++++')

    if (thread) {
        const response = await fetch('/post/:id', {
            method: 'POST',
            body: JSON.stringify({ thread, counter_offer, post_id }),
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

document.querySelector('.thread-div').addEventListener('click', thread);
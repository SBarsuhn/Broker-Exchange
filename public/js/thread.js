const thread = async (event) => {
    event.preventDefault();

    const thread = document.querySelector('#thread-text').value.trim();
    const counter_offer = document.querySelector('#counter-text').value.trim();
    const post_id = event.target.getAttribute('data-id');
    console.log('++++++++++++++++++++++++++++++++ ' + post_id + ' +++++++++++++++++++++++++++++++++++++++')

    if (thread) {
        const response = await fetch('/homepage', {
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
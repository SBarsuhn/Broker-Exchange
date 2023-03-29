const post = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const post = document.querySelector('#post-post').value.trim();
    const need = document.querySelector('#post-need').value.trim();
    const close_date = document.querySelector('#post-close_date').value.trim();
    const offer = document.querySelector('#post-offer').value.trim();
    const category = document.querySelector('#post-category').selectedIndex;

    if (title && post && need && close_date && offer && category ) {
        const response = await fetch('/post', {
            method: 'POST',
            body: JSON.stringify({ title, post, need, close_date, offer, category }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/post')
        } else {
            const x = await response.json()
            console.log('++++++++++++++++++++++++++++++++' + x.message + '++++++++++++++++++++++++++++++++++')
        }
    }
}


document.querySelector('#post-form').addEventListener('submit', post);

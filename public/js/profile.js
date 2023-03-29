const removePost = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');

    const response = await fetch('/profile', {
            method: 'DELETE',
            body: JSON.stringify({ post_id }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            const x = await response.json()
            console.log(x.message)
        }
    }

const deleteButtons = document.querySelectorAll('.post-delete');
deleteButtons.forEach(btn => {
    btn.addEventListener('click', removePost)
})

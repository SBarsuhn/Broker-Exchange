const post = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-description').value.trim();
    const address = document.querySelector('#post-address').value.trim();
    const timeframe = document.querySelector('#post-timeframe').value.trim();
    const offer = document.querySelector('#post-offer').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, description, address, timeframe, offer }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            // console.log('++++++++++++++++++++++++++++++++' + x.message + '++++++++++++++++++++++++++++++++++')
            document.location.replace('/post')
        } else {
            const x = await response.json()
            // console.log('++++++++++++++++++++++++++++++++' + x.message + '++++++++++++++++++++++++++++++++++')
        }
    }
}

const signup = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#firstname-signup').value.trim();
    const lastName = document.querySelector('#lastname-signup').value.trim();


    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password, firstName, lastName }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/')
            // document.querySelector('#resultText').innerText = ` -- Logged in as ${username} -- `;
        } else {
            alert('Failed to sign up')
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', post);

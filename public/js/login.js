const login = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            console.log('++++++++++++++++++++++++++++++++' + x.message + '++++++++++++++++++++++++++++++++++')
            document.location.replace('/')
        } else {
            const x = await response.json()
            console.log('++++++++++++++++++++++++++++++++' + x.message + '++++++++++++++++++++++++++++++++++')
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

document.querySelector('#login-form').addEventListener('submit', login);
document.querySelector('#signup-form').addEventListener('submit', signup);
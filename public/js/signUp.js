const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const confirmPassword = querySelector('#confirm-password')

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        // confirm password option?
        // if(password != confirmPassword) {
        //     alert('Passowrds do not match');
        // }
         if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpFormHandler)
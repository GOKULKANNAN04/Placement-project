document.getElementById('log').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const result = document.getElementById('result');

    if (user === 'java' && pass === '@123') {
        result.textContent = 'Login Successful';
        result.className = 'Success';
    } else {
        result.textContent = 'Invalid credentials';
        result.className = 'failed';
    }
});

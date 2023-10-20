const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#login-username').value
    // .trim();
    const password = document.querySelector('#login-password').value
    // .trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        console.log(username, password)
        document.location.replace('/blogpost');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
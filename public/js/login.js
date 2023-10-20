const loginFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    // These are coming back as undefined, also tried queryselector with same result
    const username = document.querySelector("#login-username").value;
    const password = document.querySelector("#login-password").value;
    
    console.log(username, password)

    if (username && password) {
      console.log('hit')
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.redirect('/blogpost');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username').value
    const password = document.querySelector('#signup-password').value

  
    if (username && password) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response) {
        document.location.replace('/blogpost');
      } 
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
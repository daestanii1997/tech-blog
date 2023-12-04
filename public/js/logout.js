const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response) {
      document.location.replace('/');
    } 
  };
  
  document
  .querySelector('#logout')
  .addEventListener('click', logout);
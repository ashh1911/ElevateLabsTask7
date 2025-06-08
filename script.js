function fetchUsers() {
  const container = document.getElementById('user-container');
  container.innerHTML = '<p>Loading...</p>';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      container.innerHTML = ''; 
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Address:</strong> ${user.address.street}, ${user.address.city}
        `;
        container.appendChild(userDiv);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

window.onload = fetchUsers; 

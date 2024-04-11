// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit data');
        }
        return response.json();
      })
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement('div');
    idElement.textContent = id;
    document.body.appendChild(idElement);
  }
  
  function appendErrorToDOM(errorMessage) {
    const errorElement = document.createElement('div');
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
  }
  
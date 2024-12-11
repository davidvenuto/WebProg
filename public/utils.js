async function fetchData(route = '', data = {}, methodType = 'GET') {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return await response.json(); 
    } else {
      throw await response.json();
    }
  }
  
  export { fetchData };
  
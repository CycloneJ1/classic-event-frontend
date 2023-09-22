document.addEventListener("DOMContentLoaded", () => {
    const backendUrl = "http://backend-server-url"; // Replace with your backend server URL
  

    fetch(`${backendUrl}/api/data`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Origin": "http://localhost:5173", 
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
    
      console.log("Data from backend:", data);
    })
    .catch(error => {
      // Handle errors
      console.error("Error:", error);
    });
  });
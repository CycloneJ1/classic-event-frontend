import axios from 'axios';

class GuestService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || 'http://localhost:5005'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/guests
  createGuests = requestBody => {
    return this.api.post('/api/guests', requestBody);
  };

  // GET /api/guests
  getAllGuests = () => {
    return this.api.get('/api/guests');
  };

  // GET /api/guests/:id
  getGuests = id => {
    return this.api.get(`/api/guests/${id}`);
  };

  // PUT /api/guests/:id
  updateGuests = (id, requestBody) => {
    return this.api.put(`/api/guests/${id}`, requestBody);
  };

  // DELETE /api/guests/:id
  deleteGuests = id => {
    return this.api.delete(`/api/guests/${id}`);
  };
}

// Create one instance object
const guestService = new GuestService();

export default guestService;

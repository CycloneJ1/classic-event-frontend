import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import service from "../../src/services/file-upload.service"


function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEvent = {title, description, imageUrl}
    console.log(newEvent)
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/events`, newEvent,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
      .then(response => {
        navigate("/events")
      })
      .catch(err => console.log("error", err))
   }

     // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    e.preventDefault()
    // console.log("The file to be uploaded is: ", e.target.files[0]);  
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Create Event</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="image">Upload Image:</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e)}
                    className="form-control-file"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  }
export default CreateEvent;

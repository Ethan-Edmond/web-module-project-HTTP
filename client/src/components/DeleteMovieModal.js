import React from 'react';
import axios from 'axios';

const DeleteMovieModal = ({ cancelDelete, id, deleteMovie }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        deleteMovie(id);
        window.location.href = '/movies';
      })
      .catch(alert);
  };
  return (
    <div id="deleteMovieModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">						
              <h4 className="modal-title">Delete Movie</h4>
              <button
                onClick={cancelDelete}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">					
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning"><small>This action cannot be undone.</small></p>
            </div>
            <div className="modal-footer">
              <input
                onClick={cancelDelete}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input onClick={handleDelete} type="submit" className="btn btn-danger" value="Delete"/>
            </div>
          </form>
        </div>
      </div>
    </div>)
}

export default DeleteMovieModal;

import axios from "axios";

export default {
  // Gets all sessions
  getSessions: function() {
    return axios.get("/api/sessions");
  },
  // Gets the session with the given id
  getOneSession: function(id) {
    return axios.get("/api/sessions/" + id);
  },
  // Saves a new session to the database
  saveSession: function(sessionData) {
    return axios.post("/api/sessions", sessionData);
  },
  // Updates the session with the given id
  updateSession: function(id) {
    return axios.put("/api/sessions/" + id);
  },
  // Gets the user with the given id
  getOneUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Add the clicked session to the logged in user's schedule
  addSessionToSchedule: function(sessionId, userId) {
    console.log("add Session", sessionId);
    return axios.post("api/users/addToSchedule/" + sessionId,{userId});
  }

//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};

import React, { useState } from "react";
import {
  useGetAllContactformQuery,
  useDeleteContactformMutation,
  useEditContactformMutation,
} from '../services/projectApi';

const ContactMessagesPage = () => {
  // Fetch all contact messages
  const { data: messages = [], error, isLoading } = useGetAllContactformQuery();
  const [deleteContactform] = useDeleteContactformMutation();
  const [editContactform] = useEditContactformMutation();

  const [editData, setEditData] = useState(null);

  // Handle edit input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle edit submit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await editContactform(editData).unwrap();
      setEditData(null); // Clear edit data after successful edit
    } catch (error) {
      console.error("Failed to edit the message:", error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await deleteContactform(id).unwrap();
    } catch (error) {
      console.error("Failed to delete the message:", error);
    }
  };

  return (
    <div className="contact-message-container">
    <div className="contact-messages-page">
      <h2>All Contact Form Messages</h2>

      {isLoading ? (
        <p>Loading messages...</p>
      ) : error ? (
        <p>Error loading messages</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="contact-messages-list">
          {messages.map((message) => (
            <li key={message.id} className="contact-message-item">
              {editData && editData.id === message.id ? (
                <form className="contact-message-form" onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleEditChange}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="number"
                    name="number"
                    value={editData.number}
                    onChange={handleEditChange}
                    placeholder="Contact No."
                    required
                  />
                  <textarea
                    name="message"
                    value={editData.message}
                    onChange={handleEditChange}
                    placeholder="Message"
                    required
                  />
                  <div className="contact-message-buttons">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button" onClick={() => setEditData(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="contact-message-details">
                  <p><strong style={{paddingRight :"57px"}}>Name :</strong> {message.name}</p>
                  <p><strong style={{paddingRight :"57px"}}>Email :</strong> {message.email}</p>
                  <p><strong style={{paddingRight :"10px"}}>Contact No. :</strong> {message.number}</p>
                  <p><strong style={{paddingRight :"32px"}}>Message :</strong> {message.message}</p>
                  <div className="contact-message-buttons">
                    <button className="edit-button" onClick={() => setEditData(message)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(message.id)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default ContactMessagesPage;

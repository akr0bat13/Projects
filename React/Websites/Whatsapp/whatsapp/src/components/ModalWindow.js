import React from 'react';

const Modal = ({ title, onClose, onSubmit }) => {
  const [recipientNumber, setRecipientNumber] = React.useState('');
  const [recipientName, setRecipientName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipientNumber, recipientName);
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="recipientNumber">Recipient number:</label>
            <input className='modal_input' type="text" id="recipientNumber" value={recipientNumber} onChange={(e) => setRecipientNumber(e.target.value)} placeholder="Enter recipient number" required />
          </div>
          <div className="form_group">
            <label htmlFor="recipientName">Recipient name:</label>
            <input className='modal_input' type="text" id="recipientName" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="Enter recipient name" required />
          </div>
          <div className="modal_buttons">
            <button className="btn_cansel" onClick={onClose}>Cancel</button>
            <button className="btn_modal" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
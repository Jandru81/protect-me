import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import uploadFile from '../../services/storage';
import { getItem, getAllRealTime, deleteItem, addItem } from '../../services/database';

import './Room.scss';

const Room = ({ match, history }) => {
  const [room, setRoom] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [fileUploadPercent, setFileUploadPercent] = useState('');
  const [isNewMessage, setIsNewMessage] = useState(false);
  const roomId = match.params.id;

  useEffect(() => {
    const room = getItem('rooms', roomId);
    setRoom(room);

    getAllRealTime({
      collection: 'messages',
      filters: { field: 'roomId', condition: '==', value: roomId },
      order: 'timestamp',
      callback: (collectionData) => {
        const results = [];
        collectionData.forEach((document) => {
          const data = document.data();
          const messageDate = new Date(data.timestamp);
          data.date = messageDate.toLocaleDateString();
          data.time = messageDate.toLocaleTimeString();
          results.push(data);
        });
        setMessages(results);
        scrollMessages();
      }
    });

    console.log("TCL: Room -> roomId", roomId)
  }, [])

  const handleDeleteRoom = async () => {
    const result = await deleteItem('rooms', roomId);
    if (result) {
      history.push('/');
    }
  }

  const handleSendMessage = async () => {
    if (!message) return;

    setIsNewMessage(true);
    setTimeout(() => setIsNewMessage(false), 5000);
    const result = await addItem(
      'messages', 
      { roomId, message, timestamp: +(new Date()) }
    );
    if (result) {
      setMessage('')
    }
  };

  const scrollMessages = () => {
    const messagesHeight = document.getElementById('messages').getBoundingClientRect().height;
    document.getElementById('messages').scrollTo(0,messagesHeight);
  };

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const downloadURL = await uploadFile(file, setFileUploadPercent);

    const result = await addItem(
      'messages',
      { roomId, file: downloadURL, timestamp: +(new Date()) }
    );
    if (result) {
      setFileUploadPercent('');
    }
  };

  if (!room) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Volver al foro</Link>
      <button type="button" onClick={handleDeleteRoom}>Delete room</button>
      <h1>Room: {room.name}</h1>
      <section className="chat-area">
        <div id="messages" className="messages">
          {messages.length === 0 && <div>Escribe algo mano</div>}
          {messages.map((m, i) => (
            <div key={m.timestamp} className={`messages-item ${isNewMessage && i===messages.length - 1 ? 'new-message': ''}`}>
              <div>{m.date} - {m.time}</div>
              <div>{m.message || <img src={m.file} alt="" />}</div>
            </div>
          ))}
        </div>
        <div className="new-message-area">
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
          <button type="button" onClick={handleSendMessage}>Send</button>
          <input type="file" onChange={handleUploadImage} />
        </div>
        <div>{fileUploadPercent}</div>
      </section>
    </div>
  );
};

export default Room;
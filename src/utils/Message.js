import React from 'react';
import './Message.css'

const Message = ({message, type}) => {
  return (
    <section className='container message-no'>
      <div className={`notify ${type}`}>
        <span>{message}</span>
      </div>
    </section>
  );
}

export default Message;
import React from 'react';

import styles from './MessageList.css';

const Message = props => (
    <div className={styles.Message}>
      <strong>{props.from} :</strong>
      <span>{props.text}</span>
      <button className={styles.button} onClick={() => props.removeMessage(props.id)}><i className="fa fa-trash"></i></button>
    </div>
);

const MessageList = props => (
    <div className={styles.MessageList}>
      {
        props.messages.map((message, i) => {
          return (
            <Message
              key={i}
              from={message.from}
              text={message.text}
              id={message.id}
              removeMessage={props.removeMessage}
            />
          );
        })
      }
    </div>
);

export default MessageList;
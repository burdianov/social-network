import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
  const { dialogs, messages, newMessageBody } = props.dialogsPage;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = e => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogs.map(dialog => {
          return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
          );
        })}
      </div>
      <div className={styles.messages}>
        {messages.map(message => {
          return <Message key={message.id} message={message.message} />;
        })}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message...'
            />
          </div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

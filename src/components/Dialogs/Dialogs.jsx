import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = props => {
  const { dialogs, messages } = props.dialogsPage;

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
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
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newMessageBody'
          component='textarea'
          placeholder='Enter your message...'
        />
      </div>
      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);

export default Dialogs;

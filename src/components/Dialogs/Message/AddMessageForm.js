import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from './../../common/FormControls/FormControls';
import {
  required,
  maxLengthCreator
} from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newMessageBody'
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder='Enter your message...'
        />
      </div>
      <button>Send</button>
    </form>
  );
};

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

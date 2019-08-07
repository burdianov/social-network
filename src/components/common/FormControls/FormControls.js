import React from 'react';
import styles from './FormControls.module.css';

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  let classes = [];
  classes.push(styles.formControl);
  classes.push(hasError && styles.error);

  return (
    <div className={classes.join(' ')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = props => {
  return (
    <FormControl {...props}>
      <textarea name='' {...props.input} {...props} />
    </FormControl>
  );
};

export const Input = props => {
  return (
    <FormControl {...props}>
      <input name='' {...props.input} {...props} />
    </FormControl>
  );
};

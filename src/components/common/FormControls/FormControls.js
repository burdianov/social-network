import React from 'react';
import styles from './FormControls.module.css';
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    let classes = [];
    classes.push(styles.formControl);
    classes.push(hasError && styles.error);

    return (
        <div className={classes.join(' ')}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
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

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field
                name={name}
                placeholder={placeholder}
                component={component}
                validate={validators}
                {...props}
            /> {text}
        </div>
    )
};
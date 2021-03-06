import React from 'react';
import { useField } from 'formik';
import styles from './../input.css';

interface TextInputProps {
  label: string;
  placeholder: string;
  name: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <main className={styles.field}>
      <label className={`omrs-type-body-regular ${styles.label}`} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`omrs-input-outlined ${meta.touched && meta.error ? styles.errorInput : null} ${styles.textInput}`}
        type="text"
        placeholder={placeholder}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className={`omrs-type-body-small ${styles.errorMessage}`}>{meta.error}</div>
      ) : null}
    </main>
  );
};

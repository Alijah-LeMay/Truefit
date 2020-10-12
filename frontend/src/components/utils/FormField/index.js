import React from 'react';
import classes from './FormField.module.css';

const FormField = ({ label, type, config, value, changed }) => {
  let rStyle = {
    text: {
      outline: 'none',
      border: '1px solid #ccc',
      backgroundColor: '#f2f2f2',
      fontSize: '1.1rem',
      padding: '10px 0 10px 10px',
      width: '95%',
      margin: '10px 0',
      borderRadius: '7px',
    },
  };
  let inputElement = null;
  switch (type) {
    case 'input':
      inputElement = (
        <input
          style={rStyle.text}
          {...config}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.inputElement}
          {...config}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={classes.inputElement}
          value={value}
          onChange={changed}
        >
          {config.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.inputElement}
          {...config}
          value={value}
          onChange={changed}
        />
      );
  }
  return (
    <div className={classes.input}>
      <label className={classes.label}>{label}</label>
      {inputElement}
    </div>
  );
};

export default FormField;

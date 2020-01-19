import React from 'react';

const ReduxformInput = field => {
  const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`;
  return (
    <div className={className}>
      <input
        type={field.type}
        autoComplete={field.autoComplete}
        {...field.input}
        placeholder={field.placeholder}
      />
      {field.meta.touched && <p className="text-danger">{field.meta.error || field.errors}</p>}
    </div>
  );
};
export default ReduxformInput;

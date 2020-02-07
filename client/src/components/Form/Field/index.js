import React from 'react';

const Field = field => {
  const className = `form-input ${field.errors ? 'has-error' : ''}`;
  return (
    field.name && <div className={className}>
      <input
        name={field.name}
        type={field.type}
        autoComplete={field.autoComplete}
        {...field.input}
        placeholder={field.placeholder}
        ref={field.ref}
      />
      {field.errors && field.errors.type === 'required' && <span>This is required</span>}
    </div>

  );
};
export default Field;

import React from 'react';

const Field = field => {
  const className = `form-input ${field.errors ? 'has-error' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input
        name={field.name}
        type={field.type}
        autoFocus={field.autoFocus}
        value={field.value ? field.value : ""}
        autoComplete={field.autoComplete}
        {...field.input}

        onChange={field.onChange}
        ref={field.register({ required: field.required })}

      />
      {field.error && <span>{field.error}</span>}
      {field.error && field.errors && <span> & </span>}
      {field.errors && field.errors.type === 'required' && <span>This is required</span>}

    </div>

  );
};
export default Field;

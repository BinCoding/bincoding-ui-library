import React from "react";

type TextInputProps = {
  type?: string,
  label: string, 
  value?: string, 
  onChange?: (value: string) => {}
}

const TextInput = ({ type = "text", label, value, onChange }: TextInputProps) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
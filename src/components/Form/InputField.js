const InputField = (props) => {
  const { handleChange, label, name, type, value,placeholder,style,padding } = props;
  return (
    <div className={`flex ${padding}`}>
      <label className={`input-text regular font-color ${style}`} htmlFor={name}>{label}</label>
      <input className="field-input input-text font-color bold margin" placeholder={placeholder} onChange={handleChange} value={value} name={name} required />
    </div>
  )
}

export default InputField

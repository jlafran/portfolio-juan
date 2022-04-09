
const TextareaField = (props) => {
  const { handleChange, label, name, value,placeholder } = props;
  return (
    <div className="padding-bottom">
      <label className="input-text regular font-color field left padding-bottom3" htmlFor={name}>{label}</label>
      <input onChange={handleChange} placeholder={placeholder} name={name} className="field-input input-text font-color bold" value={value}></input>
    </div>
  )
}

export default TextareaField

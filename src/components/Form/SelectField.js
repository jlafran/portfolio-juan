
const SelectField = (props) => {
  const { label, handleChange, name, placeholder } = props;
  return (
    <div className="padding-bottom2">
    <label className="input-text regular font-color left padding-right" htmlFor={name}>{label}</label>
    <div className="drop">
      <select onChange={handleChange} defaultValue="role" name={name} className="input-text regular font-color select-form" placeholder={placeholder}>
        <option value="role" disabled>Elegir area</option>
        <option value="frontEnd" className="op">Front End</option>
        <option value="backEnd" className="op">Back End</option>
        <option value="qa" className="op">QA</option>
      </select>
    </div>
    </div>
  )
}

export default SelectField

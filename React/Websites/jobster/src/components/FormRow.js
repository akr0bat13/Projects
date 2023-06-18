const FormRaw = ({type, name, value, handleChange, labelText}) => {

  return (
    <div className="form-raw">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input className="form-input" id={name} type={type} name={name} value={value} onChange={handleChange} />
    </div>
  )
}

export default FormRaw
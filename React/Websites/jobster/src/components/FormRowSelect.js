
const FormRowSelect = ({labelText, name, value, handleChange, list}) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select className='form-select'
        name={name} 
        id={name} 
        value={value}
        onChange={handleChange}
      >
        {list.map( (itemValue, index) => {
          return <option key={index} value={itemValue}>
            {itemValue}
          </option>
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
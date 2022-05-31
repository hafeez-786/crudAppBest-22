import React from 'react'

const TextFields = ({ label, inputProps, onChange, value }) => {
  return (
    <form>
        <div className="mb-3">
          <label className="form-label">{label}</label>
          <input
            className="form-control form-control-sm"
            type="text"
            {...inputProps}
            onChange={onChange}
            value={value}
           />
        </div>
      </form>
  )
}

export default TextFields
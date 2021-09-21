import React from 'react'
import Select from 'react-select'

const FormSelect = (props) => {
    return (
        <div className="form__item">
            <label htmlFor={props.id} className="form__item__label">{props.title}</label>
            <Select
                closeMenuOnSelect={props.closeMenuOnSelect}
                isMulti={props.isMulti} 
                components={props.components}
                options={props.options} 
                onChange={props.onChange}
                onInputChange={props.onInputChange}
                id={props.id}
                className="form__item__select"
            />
        </div>
    )
}

export default FormSelect

import React from 'react'
// import PropTypes from 'prop-types';

import './FormItem.scss'

const FormItem = (props) => {
    return (
        <div className="form__item">
            <label htmlFor={props.id} className="form__item__label">{props.title}</label>
            <input 
                type={props.type}
                id={props.id} 
                name={props.name} 
                value={props.value} 
                placeholder={props.placeholder}
                className="form__item__input"
                onChange={props.onChange} 
            />
        </div>
    )
}

// FormItem.propTypes = {
//     title: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     id: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string,
//     placeholder: PropTypes.string,
// }

export default FormItem

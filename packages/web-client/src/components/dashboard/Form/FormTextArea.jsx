import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

const FormTextArea = (props) => {
    return (
      <div className="form__item">
        <label htmlFor={props.id} className="form__item__label">{props.title}</label>
        <Editor
          value={props.value}
          onEditorChange={props.onChange}
        />
      </div>
    );
}

export default FormTextArea

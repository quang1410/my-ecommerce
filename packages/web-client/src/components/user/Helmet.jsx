import React from 'react'
import PropTypes from 'prop-types'

const Helmet = (props) => {
    console.log(document);
    document.title = 'Yolo - ' + props.title

    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            {props.children}
        </>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet

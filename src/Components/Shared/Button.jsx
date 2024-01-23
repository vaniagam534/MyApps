import React from 'react'
import PropTypes from 'prop-types'

function Button({children,type,version,isdisabled}) {
  return (
   <button type={type} isdisabled={isdisabled} className={`btn btn-${version}`}>
    {children}
   </button>
  )
  }
  Button.defaultProps={
    isdisabled:true,
    version:'primary',
    type:'Button'
  }

   Button.propTypes={
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    isdisabled:PropTypes.bool,
    version:PropTypes.string  }
export default Button

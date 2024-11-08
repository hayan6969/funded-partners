import React from 'react'

function Button({props:{
    btnText='click here',
    className='',
    variant="primary",
    onClick=()=>{},
    ...rest
}}) {
    const variantStyles={
        primary:
            'px-3 py-2 bg-[#3305FF] rounded-lg text-white',
        secondary:
        'px-3 py-2 bg-white rounded-lg text-black'
    }
    const buttonClassName = `${className} ${variantStyles[variant]}`.trim();
  return (
    <button
    variant={variant}
    className={buttonClassName}
    onClick={onClick}
    {...rest}
    >
      {btnText}
    </button>
  )
}

export default Button

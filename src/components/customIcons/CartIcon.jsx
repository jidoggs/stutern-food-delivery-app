import React from 'react'

function CartIcon({className,bgYes, added, onClick}) {
  return (
    <svg
    width={ bgYes? 52 : 20 }
    height={ bgYes? 52 : 20 }
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    
    { bgYes?
    <>
      <rect y={4} width={48} height={48} rx={16} fill="#F3F4FF" />
      <path
        d="M19 19.667 16.5 23v11.667a1.667 1.667 0 0 0 1.667 1.666h11.666a1.667 1.667 0 0 0 1.667-1.666V23L29 19.667H19ZM16.5 23h15"
        stroke={added?"#4E60FF":"#c7c8d2"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.333 26.333a3.334 3.334 0 0 1-6.666 0"
        stroke={added?"#4E60FF":"#c7c8d2"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
    :
    <>
      <path
        d="M5 1.66667L2.5 5.00001V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00001L15 1.66667H5Z" 
        stroke={added?"#4E60FF":"#c7c8d2"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5H17.5" 
        stroke={added?"#4E60FF":"#c7c8d2"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.3333 8.33333C13.3333 9.21738 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11595 11.6667 8.2681 11.3155 7.64298 10.6904C7.01786 10.0652 6.66667 9.21738 6.66667 8.33333" 
      stroke="#C7C8D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </>
    }
  </svg>
  )
}

export default CartIcon
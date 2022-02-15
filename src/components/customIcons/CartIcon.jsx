import React from 'react'

function CartIcon({className,bgYes, added}) {
  return (
    <svg
    width={52}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    // {...props}
    // style={{position:"relative"}}
  >
    {
      bgYes && <rect y={4} width={48} height={48} rx={16} fill="#F3F4FF" />
    }
    
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
    {/* <rect x={32} width={20} height={20} rx={8} fill="#4E60FF" /> */}
    {/* <p style={{position:"absolute",right:0,top:0, backgroundColor:"yellowgreen"}} >12</p> */}
    {/* <path
      d="M43.132 14.08c-.2 0-.357-.053-.47-.16-.113-.113-.17-.273-.17-.48v-.78h-2.47c-.207 0-.373-.043-.5-.13-.12-.087-.18-.22-.18-.4 0-.113.027-.233.08-.36.06-.127.163-.293.31-.5l2.74-3.97c.093-.14.197-.247.31-.32a.702.702 0 0 1 .39-.11c.173 0 .317.053.43.16.113.1.17.26.17.48v4.09h.49c.387 0 .58.177.58.53 0 .353-.193.53-.58.53h-.49v.78c0 .207-.057.367-.17.48-.113.107-.27.16-.47.16Zm-.64-2.48V8.91l-1.84 2.69h1.84Z"
      fill="#fff"
    /> */}
  </svg>
  )
}

export default CartIcon
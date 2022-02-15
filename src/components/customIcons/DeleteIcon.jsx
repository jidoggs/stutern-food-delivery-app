import React from 'react'

function DeleteIcon(props) {
  return (
    <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#C7C8D2"
      strokeWidth={1.315}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.805 4.575H14.948M6.178 4.575v-1.35a1.35 1.35 0 0 1 1.35-1.349h2.698a1.35 1.35 0 0 1 1.349 1.35v1.349m2.024 0v9.444a1.349 1.349 0 0 1-1.35 1.35H5.504a1.349 1.349 0 0 1-1.349-1.35V4.575H13.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.781 .527)"
          d="M0 0h16.191v16.191H0z"
        />
      </clipPath>
    </defs>
  </svg>
  )
}

export default DeleteIcon
import * as React from "react"
const CakeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      stroke="#ADADAD"
      strokeDasharray="4 1"
      d="M19.5 45.5v-12h3m24 12v-12h-3m-21 0v-12h3m-3 12h21m0 0v-12h-3m-15 0h15m-15 0v-12h15v12"
    />
    <path
      stroke="#313131"
      strokeLinejoin="bevel"
      d="M45 57.5H32.75M20 57.5h12.75m0 0v-12m0 0H52m-19.25 0H19.5m13.25 0H46.5m-13.75 0H14"
    />
  </svg>
)
export default CakeIcon

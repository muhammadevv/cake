import * as React from "react"
const Check = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21.707 6.043a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414 0l-5.25-5.25a1 1 0 1 1 1.414-1.414L9 17.336 20.293 6.043a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />

    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Check

import * as React from "react"
const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
    viewBox="0 0 24 24"
  >
    <path stroke="#313131" d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    <path
      fill="#313131"
      d="m12 10.5.41-.286h-.82l.41.286ZM4.41 22.285l8-11.5-.82-.57-8 11.5.82.57Zm7.18-11.5 8 11.5.82-.57-8-11.5-.82.57Z"
    />
  </svg>
)
export default UserIcon

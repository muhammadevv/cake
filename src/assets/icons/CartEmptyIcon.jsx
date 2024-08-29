const CartEmptyIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <rect width={96} height={96} fill="#fff" rx={48} />
    <path
      stroke="#000"
      strokeLinejoin="bevel"
      d="M73.5 42.54 48.5 31m25 11.54v21l-9 4.148m9-25.149L79 35 54 23.46 48.5 31m25 11.54-9 4.148M48.5 31l-25 11.54M48.5 31 43 23.46 18 35l5.5 7.54M48.5 54v21m0-21-25-11.46M48.5 54l10-4.61M48.5 75l-25-11.46v-21M48.5 75l10-4.61m0-21v21m0-21 6-2.703m0 0v21m-6 2.704 6-2.704m-26.999-18.73v21l-6-2.75v-21l6 2.75Z"
    />
  </svg>
)
export default CartEmptyIcon

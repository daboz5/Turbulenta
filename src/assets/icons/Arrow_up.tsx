import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="navArrow"
        data-name="arrowUp"
        viewBox="0 0 164.35 132.668"
        {...props}
    >
        <path
            id="arrowUpIn"
            d="M76.175 96.97h12v12h-12z"
            className="cls-1"
            transform="rotate(-45 82.175 102.97)"
        />

        <path
            id="arrowUpOut"
            d="m15 88.388 67.175-67.175 67.175 67.175"
            className="cls-1"
        />

    </svg>
)

export default SvgComponent

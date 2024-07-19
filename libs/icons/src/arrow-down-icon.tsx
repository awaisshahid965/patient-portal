import { IconProps } from 'icon.types'
import React, { FC } from 'react'

const ArrowDownIcon: FC<IconProps> = ({ width = '16', height = '10', isOpen }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 11"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
            <title>down-arrow copy 2</title>
            <g
                id="Provider-Portal-screens"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                opacity="0.400000006"
            >
                <g
                    id="3-Provider-Dashboard-Op1"
                    transform="translate(-1591, -373)"
                    fill="#26335A"
                    stroke="#26335A"
                    stroke-width="0.5"
                >
                    <g id="Group-Copy" transform="translate(376, 326)">
                        <path
                            d="M1230.09709,48.173913 L1223.50725,55.5797101 L1216.90449,48.173913 C1216.69775,47.942029 1216.3618,47.942029 1216.15506,48.173913 C1215.94831,48.4057971 1215.94831,48.7826087 1216.15506,49.0144928 L1223.11961,56.826087 C1223.22298,56.942029 1223.35219,57 1223.49433,57 C1223.62354,57 1223.76567,56.942029 1223.86905,56.826087 L1230.8336,49.0144928 C1231.05326,48.7826087 1231.05326,48.4057971 1230.84652,48.173913 C1230.63978,47.942029 1230.30383,47.942029 1230.09709,48.173913 Z"
                            id="down-arrow-copy-2"
                            transform="translate(1223.5, 52.5) scale(-1, -1) rotate(-180) translate(-1223.5, -52.5)"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default ArrowDownIcon

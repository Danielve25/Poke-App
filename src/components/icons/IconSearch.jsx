import * as React from "react";

function IconSearch(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-search"
            {...props}
        >
            <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6" />
        </svg>
    );
}

export default IconSearch;

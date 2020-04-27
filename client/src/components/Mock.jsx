import React from 'react';
import { Link } from "react-router-dom";

export function Mock(props) {
    return (
        <div className="mock-link-holder">
            <Link
                className="substrate bg-dark-100 p-vert-15 p-horiz-10 color-light"
                to={{ pathname: `/mocks/${props.mock.id}` }}>
                    {`http://localhost:3000/${props.mock.mockId}`}
            </Link>
        </div>
    )
}
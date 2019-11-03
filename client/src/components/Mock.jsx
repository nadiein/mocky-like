import React from 'react';
import { Link } from "react-router-dom";

export function Mock(props) {
    return (
        <div>
            <Link
                className="substrate bg-dark-100 p-vert-15 p-horiz-10 color-light"
                to={{ pathname: `/mocks/${props.mock.id}` }}>
                    {`https://mock-like.io/${props.mock.mockId}`}
            </Link>
        </div>
    )
}
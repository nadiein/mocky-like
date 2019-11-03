import React from 'react';
import { Link } from "react-router-dom";

export function Mock(props) {
    return (
        <div>
            <Link to={{ pathname: `/mocks/${props.mock.id}` }}>{props.mock.mockId}</Link>
        </div>
    )
}
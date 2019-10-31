import React from 'react';

import {_axios} from '../utils/utils'

export class Mocks extends React.Component {

    state = {
        mocks: []
    }

    componentDidMount() {
        _axios.get('/mocks')
        .then(res => {
            const mocks = res;
            console.log('mocks => ', mocks)
            this.setState({ mocks });
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
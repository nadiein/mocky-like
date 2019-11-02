import React from 'react';
import PropTypes from 'prop-types';

import { MocksService, MockModel } from '../utils/utils';

export class MockSinglePage extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(mockService) {
        super();
        this.mockService = new MocksService();
        this.state = {
            mock: new MockModel()
        }
    }

    componentDidMount() {
        const { match, location, history } = this.props;

        this.mockService.getMockById(`/mocks/${match.params.id}`).subscribe(res => {
            this.setState({mock: res})
        })
    }

    render() {
        return (
            <div>
                {this.state ? this.state.mock.mockData : null}
            </div>
        );
    }
}
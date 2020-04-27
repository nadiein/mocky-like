import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
            <div className="mock-single-wrapper">
                <Link className="btn-back" to={{ pathname: `/mocks` }}><FontAwesomeIcon icon={faChevronLeft} size="xs" /><span>Go back</span></Link>
                {this.state ? <p className="text-content">{this.state.mock.mockData}</p> : null}
            </div>
        );
    }
}
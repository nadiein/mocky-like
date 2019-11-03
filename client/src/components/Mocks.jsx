import React from 'react';
import { MocksService } from '../utils/utils';
import { Mock } from './Mock';

export class Mocks extends React.Component {

    constructor(mockService) {
        super();
        this.mockService = new MocksService();
        this.state = {
            mocks: [],
            mock: null,
            mockValue: ''
        }
    }

    componentDidMount() {
        this.mockService.getMocks('/mocks').subscribe(res => {
            this.setState({mocks: res})
        })
    }

    onFormSubmitEvent = (event) => {
        event.preventDefault();
        let formData = new FormData();
        let object = {};

        formData.set('mockData', this.state.mockValue);
        formData.forEach((value, key) => {object[key] = value});

        let json = JSON.stringify(object);

        this.mockService.postMockForm('/mocks', json).subscribe(res => {
            this.setState({ mock: res })
        })
    }

    onChangeValueTextarea = (event) => {
        this.setState({mockValue: event.target.value})
    }

    render() {
        let { mock } = this.state;
        return (
            <div>
                <form className="m-b-20">
                    <label htmlFor="textarea" className="form-control-holder form-control-holder-md">
                        <textarea
                            id="textarea"
                            className="form-control form-control-md"
                            name="textarea"
                            value={this.state.mockValue}
                            onChange={this.onChangeValueTextarea}></textarea>
                    </label>
                    <button
                        className="btn btn-primary btn-md"
                        type="submit"
                        onClick={(e) => this.onFormSubmitEvent(e)}>Generate link</button>
                </form>
                { mock ? <Mock mock={mock} key={mock} /> : null }
            </div>
        );
    }
}

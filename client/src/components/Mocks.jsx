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
            console.log('        ', this.state.mock)
        })
    }

    onChangeValueTextarea = (event) => {
        this.setState({mockValue: event.target.value})
    }

    render() {
        let { mock } = this.state;
        return (
            <div>
                <form>
                    <textarea name="textarea" cols="30" rows="10" value={this.state.mockValue} onChange={this.onChangeValueTextarea}></textarea>
                    <button type="submit" onClick={(e) => this.onFormSubmitEvent(e)}>Send</button>
                </form>
                { mock ? <Mock mock={mock} key={mock} /> : null }
            </div>
        );
    }
}

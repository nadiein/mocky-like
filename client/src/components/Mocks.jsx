import React from 'react';
import { MocksService } from '../utils/utils';
import { Mock } from './Mock'

export class Mocks extends React.Component {

    constructor(mockService) {
        super();
        this.mockService = new MocksService();
        this.state = {
            mocks: [],
            mockValue: ''
        }
    }

    componentDidMount() {
        this.mockService.getMocks('/mocks').subscribe(res => {
            this.setState({mocks: res})
        })
    }

    onFormSubmitEvent = (event, data) => {
        event.preventDefault();
        let formData = new FormData();

        formData.set('mockData', this.state.mockValue)

        this.mockService.postMockForm('/mocks', formData).subscribe(res => { })
    }

    onChangeValueTextarea = (event) => {
        this.setState({mockValue: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <textarea name="textarea" cols="30" rows="10" value={this.state.mockValue} onChange={this.onChangeValueTextarea}></textarea>
                    <button type="submit" onClick={(e, data) => this.onFormSubmitEvent(e, data)}>Send</button>
                </form>
                { this.state.mocks.map((el, i) => <Mock mock={el} key={i} />) }
            </div>
        );
    }
}

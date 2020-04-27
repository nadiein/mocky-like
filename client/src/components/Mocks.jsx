import React from 'react';
import { MocksService } from '../utils/utils';
import { Mock } from './Mock';

export class Mocks extends React.Component {

    constructor(mockService) {
        super();
        this.mockService = new MocksService();
        this.subscriptions = [];
        this.state = {
            mocks: [],
            mock: null,
            mockValue: '',
            isResultReady:false
        }
    }

    componentDidMount() {
        this.subscriptions.push(this.mockService.getMocks('/mocks').subscribe(res => {
            this.setState({mocks: res})
        }))
    }

    onFormSubmitEvent = (event) => {
        event.preventDefault();
        let formData = new FormData();
        let object = {};

        formData.set('mockData', this.state.mockValue);
        formData.forEach((value, key) => {object[key] = value});

        let json = JSON.stringify(object);
        this.setState({isResultReady: false});
        this.mockService.postMockForm('/mocks', json).subscribe(res => {
            this.setState({isResultReady: true, mock: res});
        })
    }

    componentWillUnmount = () => {
        while (this.subscriptions.length > 0) {
            this.subscriptions.shift().unsubscribe();
        }
    }

    onChangeValueTextarea = (event) => {
        this.setState({mockValue: event.target.value})
    }

    render() {
        let { mockValue, mock, isResultReady } = this.state;
        return (
            <div className="mock-wrapper">
                <h1 className="title-primary">Mock Data</h1>
                <form className="form-holder m-b-20">
                    <label htmlFor="textarea" className="form-control-holder form-control-holder-md">
                        <textarea
                            id="textarea"
                            className="form-control form-control-md simplified"
                            name="textarea"
                            value={mockValue}
                            onChange={this.onChangeValueTextarea}></textarea>
                    </label>
                    <button
                        className="btn btn-primary btn-md"
                        type="submit"
                        onClick={(e) => this.onFormSubmitEvent(e)}>Gimme that link</button>
                </form>
                { isResultReady ? <Mock mock={mock} key={mock} /> : (mock ? <span className="preload-font">Result is not ready yet</span> : '') }
            </div>
        );
    }
}

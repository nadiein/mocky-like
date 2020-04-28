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
            mock: new MockModel(),
            isTooltipVisible: false,
            posX: 0,
            posY: 0
        }
    }

    componentDidMount() {
        const { match, location, history } = this.props;

        this.mockService.getMockById(`/mocks/${match.params.id}`).subscribe(res => {
            this.setState({mock: res})
        })
    }

    onCopyToBufferEvent = e => {
        let target = e.target;
        let selection, range;
        if (document.body.createTextRange) {
            range = document.body.createTextRange()
            range.moveToElementText(target)
            range.select()
        } else if (window.getSelection) {
            selection = window.getSelection()
            range = document.createRange()
            range.selectNodeContents(target)
            selection.removeAllRanges()
            selection.addRange(range)
        }
        document.execCommand('copy')
        selection.removeAllRanges()
    }

    onDispatchMouseEvent = (e, type) => {
        switch (type) {
            case 0: { // event type mouse_over
                this.setState({ isTooltipVisible: true, posX: e.clientX, posY: e.clientY - 40 })
                break;
            }
            case 1: { // event type mouse_out
                this.setState({ isTooltipVisible: false })
                break;
            }
            case 2: { // event type mouse_move
                this.setState({ posX: e.clientX, posY: e.clientY - 40 })
                break;

            }
        }
    }

    render() {
        const { isTooltipVisible } = this.state;
        let styles = {
            top: this.state.posY,
            left: this.state.posX
        }
        return (
            <div className="mock-single-wrapper">
                <Link className="btn-back" to={{ pathname: `/mocks` }}><FontAwesomeIcon icon={faChevronLeft} size="xs" /><span>Go back</span></Link>
                { isTooltipVisible ?
                    <div
                        ref="tooltip"
                        style={styles}
                        className="js-tooltip">Click to copy in buffer</div> : null
                }
                {this.state ? <p
                    className="text-content"
                    onMouseOver={(e) => this.onDispatchMouseEvent(e, 0)}
                    onMouseOut={(e) => this.onDispatchMouseEvent(e, 1)}
                    onMouseMove={(e) => this.onDispatchMouseEvent(e, 2)}
                    onClick={(e) => this.onCopyToBufferEvent(e)}>{JSON.stringify(this.state.mock.mockData)}</p> : null}
            </div>
        );
    }
}

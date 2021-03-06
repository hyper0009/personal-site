import React, { Component } from 'react';
import './fade-box.css';

export class FadeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startFade: false
        }
    }
    componentDidMount = () => {
        this.setState({
            startFade: true
        });
    }

    render() {

        const box = {
            width: '130px',
            height: '200px',
            border: '1px solid black',
            backgroundColor: 'dimgray',
            flex: '1'
        };

        return (
            <div style={box} className="main-container">
                <span className="mini-heading">
                    {this.props.title}
                </span>
                <span className="text-box">
                    {this.props.title.charAt(0)}
                </span>
                <span className="top-flick" />
                <span className="right-flick" />
                <span className="bottom-flick" />
                <span className="left-flick" />
            </div>
        );
    }
}
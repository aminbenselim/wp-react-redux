import React, {Component} from 'react';

export default class SingleWrapper extends Component {
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}
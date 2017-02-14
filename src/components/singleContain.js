import React, {Component} from 'react';

export default class SingleContain extends Component {
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}
import './Track.css';
import React from 'react';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }
    renderAction() {
        return (
            <button>
                {this.props.isRemoval ? "-" : "+"}
            </button>
        )
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}
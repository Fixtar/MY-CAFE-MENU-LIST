import React from "react";

class eventTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggle: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(preState => ({
            isToggle: !preState.isToggle
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        );
    }

}

export default eventTest;
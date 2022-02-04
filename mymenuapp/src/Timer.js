import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //첫 렌더링 이후 호출되고, tick메서드 호출, 
    //state의 date값 변화를 react가 감지하고, render를 다시 호출하여 업데이트
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div >
        );
    }
}


export default Timer;
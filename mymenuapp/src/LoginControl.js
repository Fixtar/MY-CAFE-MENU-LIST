import React from "react";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };

        //bind를 해줘야 this가 undefined가 생기지 않는다.
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLogin: true });
    }

    handleLogoutClick() {
        this.setState({ isLogin: false });
    }



    render() {
        const isLogin = this.state.isLogin;
        let button;

        if (isLogin) {
            button = <LogoutBtn onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginBtn onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLogin={isLogin} />
                {button}
            </div>
        );
    }
}

function LoginBtn(props) {
    return (
        <button onClick={props.onClick}>
            login
        </button>
    );
}
function LogoutBtn(props) {
    return (
        <button onClick={props.onClick}>
            logout
        </button>
    );
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLogin = props.isLogin;
    if (isLogin === true) {
        return <UserGreeting />;
    }
    else {
        return <GuestGreeting />;
    }
}

export default LoginControl;
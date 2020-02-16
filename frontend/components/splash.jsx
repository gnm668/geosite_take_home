import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.logoutUser = this.logoutUser.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    // logoutUser(e) {
    //     e.preventDefault();
    //     this.props.logoutUser();
    // };

    renderErrors() {
        return (
            <div className='login-errors'>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} className='login-error'>
                        {error}
                    </div>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div>
                <input type='text'
                    value={this.state.username}
                    onChange={this.handleInput('username')}
                />
                <input type='password'
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                />
                <button onClick={this.handleSubmit} > Sign In </button>
                {this.renderErrors()}
                {/* <button onClick={this.logoutUser}> Log Out </button> */}
            </div>
        );
    };
};

export default Splash;
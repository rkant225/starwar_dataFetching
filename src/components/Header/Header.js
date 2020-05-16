import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div>
                <h2 className="header">Total {this.props.count || 0} characters found.</h2>
            </div>
        );
    }  
}

export default Header;

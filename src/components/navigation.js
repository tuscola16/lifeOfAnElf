import React from 'react';
import { Link } from 'react-router-dom'

class nav extends React.Component {

    render() {
        return (
            <div class="nav-wrapper">
                <nav>
                    <Link to="/dashboard">dashboard</Link>
                </nav>
                <nav>
                    <Link to="/groups">groups</Link>
                </nav>
            </div>
            
        )
    }
}

export default nav;
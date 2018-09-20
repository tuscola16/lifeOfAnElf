import React, { Component } from 'react';
import StuffList from './components/stuffList';
import Nav from './components/navigation';
import Groups from './components/groups';
import './less/App.less'
import { Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Nav/>
                <div class="mainApp">
                    <Route path="/dashboard" component={StuffList}/>
                    <Route path="/groups" component={Groups}/>
                </div>
            </div>
        );
    }
}

export default App;
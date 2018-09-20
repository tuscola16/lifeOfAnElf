import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class groupMemberBody extends React.Component {
    
    render() {
        return this.props.list ? (
            <div class="groupMemberBody">
                {this.props.list.items.map((item) =>
                    <li>{item.name}</li>
                )}
            </div>
        ) : '';
    }
}

function mapStateToProps(state) {
    return {
        //stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
       //stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(groupMemberBody);
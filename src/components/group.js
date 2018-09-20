import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';
import {Route, Link} from "react-router-dom";
import GroupMemberBody from "./groupMemberBody";

class group extends React.Component {
    render() {
        const membersNav = this.props.groupInfo ? this.props.groupInfo.lists.map((list) =>
            <nav class="groupMemberTab">
                <Link to={`${this.props.match.url}/groupMember/${list.userId}`}>{list.displayName}</Link>
            </nav>
        ) : '';

        const memberBodies = this.props.groupInfo ? this.props.groupInfo.lists.map((list) =>
            <Route path={this.props.match.url + '/groupMember/' + list.userId} 
                render={(props) => <GroupMemberBody {...props} list={list}/>}
            />
        ) : '';

        return (
            <div class="groupBody">
                <span>{this.props.groupInfo.description}</span>
                <button class="edit-btn">edit</button>
                <div class="groupMembersList">
                    {membersNav}
                </div>
                {memberBodies}

            </div>
        )
    }
}

/*groups.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};*/

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

function componentWillMount() {
    this.setState("group", {
        "lists": [
            {
                "displayName": "Shannon",
                "userId": 472389,
                "items": [
                    {
                        "itemId": 2167267,
                        "name": "Ski wax bench",
                        "description": "to wax nordic skis on, foldable version preferable",
                        "links": [
                            {
                                "linkUrl": "www.skiwaxbenches.com",
                                "linkName": "like this"
                            }
                        ],
                        "minPrice": 20,
                        "maxPrice": 80.57,
                        "details": [
                            {
                                "detailName": "color",
                                "detailDescription": "red, but not too red. this field could be long."
                            }
                        ],
                        "status": "BOUGHT",
                        "buyerId": 328940,
                        "addedBy": 472389,
                        "visibleToUser": true
                    }
                ]
            }
        ]
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(group);
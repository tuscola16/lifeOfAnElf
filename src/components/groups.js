import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';
import {Route, Link} from "react-router-dom";
import Group from "./group";

class groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"groups": [
            {
                "name": "MacKenzie",
                "description": "this is a description of the group!  this is the Mackenzie group, for MacKenzie christmases.",
                "id": 1,
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
                            },
                            {
                                "itemId": 2167266,
                                "name": "Gloves",
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
                            },
                            {
                                "itemId": 2167265,
                                "name": "Scarpa winter hiking boots",
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
                            },
                            {
                                "itemId": 2167264,
                                "name": "backcountry skis",
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
            },
            {
                "name": "Porter",
                "description": "this is a description of the Porter group.",
                "id": 2,
                "lists": [
                    {
                        "displayName": "Becca",
                        "userId": 472389,
                        "items": [
                            {
                                "itemId": 2167267,
                                "name": "Dress",
                                "description": "nice and flowy and twirly",
                                "links": [
                                    {
                                        "linkUrl": "www.zulily.com",
                                        "linkName": null
                                    }
                                ],
                                "minPrice": 20,
                                "maxPrice": 80.57,
                                "details": [
                                    {
                                        "detailName": "color",
                                        "detailDescription": "a green dress.  but not a real green dress that's cruel."
                                    }
                                ],
                                "status": "OPEN",
                                "buyerId": 328940,
                                "addedBy": 472389,
                                "visibleToUser": true
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Personal",
                "description": "Maybe I wanted a personal list.  I'm not ready to share these.",
                "id": 3,
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
            }
        ]};
    }

    render() {
        const match = this.props.match;
        const groupsNav = this.state.groups.map((group) =>
            <nav class="groupTab">
                <Link to={`${match.url}/group/${group.id}`}>{group.name}</Link>
            </nav>
        );
        const groupBodies = this.state.groups.map((group) =>
            <Route path={match.url + '/group/' + group.id}
                render={(props) => <Group {...props} groupInfo={group} />}
            />
        );

        return (
            <div class="groups">
                <div class="groupsHeaders">
                    {groupsNav}
                    <div class="groupTab"><button>+</button></div>
                </div>
                {groupBodies}
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
    //this.setState();
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(groups);
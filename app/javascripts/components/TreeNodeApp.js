import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as treeNodesActions from '../actions/treeNodesActions';

@connect(state => ({
    treeNode: state.treeNode
}))
export default class TreeNodeApp extends Component {
    render() {
        const { treeNode: { tree }, dispatch } = this.props;
        const actions = bindActionCreators(treeNodesActions, dispatch);
        return (
            <div>
                <MainSection count={tree} actions={actions} />
            </div>
        );
    }
}

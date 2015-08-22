import React from 'react/addons';
import { connect } from 'react-redux';
import TreeContainer from './TreeContainer';


@connect(state => ({
  nodesStore: state.nodesStore
}))
export default class Tree extends React.Component{
  render(){
    const { nodesStore, dispatch} = this.props;
    return (
      <div>
        <TreeContainer nodesStore={nodesStore}/>
        <button onClick={this.loadTree}>Load</button>
      </div>
    )
  }
}

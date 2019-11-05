import React, { Component } from 'react';

class RemoveBuilding extends Component {
    render() {
      const {removeBuilding, selectedBuilding} = this.props;
      const editedId = selectedBuilding+1;
      return(
        <div>
        <button onClick = { () => removeBuilding(editedId)}>
          Remove
        </button>
        </div>
      )
    }
}

export default RemoveBuilding;

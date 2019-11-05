import React, { Component } from 'react';


//beacuse we have references we need to have a regular component
class AddBuilding extends Component {
  render(){
    const { addBuilding } = this.props;
  return(
  //create form
  <div>
    <b>Add Building</b>
    <form>
      <input type="text" placeholder="Enter Building Name *Required*"
        ref={ (name) => this.name = name}
      />
    </form>

    <form>
    <input type="text" placeholder="Enter Building Code *Required*"
      ref={ (code) => this.code = code}
    />
    </form>

    <form>
    <input type="text" placeholder="Enter Building Address"
      ref={ (address) => this.address = address}
    />
    </form>

    <form>
    <input type="text" placeholder="Enter Longitude"
      ref={ (longitude) => this.longitude = longitude}
    />
    </form>

    <form>
    <input type="text" placeholder="Enter Latitude"
      ref={ (latitude)=> this.latitude = latitude}
    />
    </form>

    <button onClick = { () => addBuilding(
      this.code.value, this.name.value, this.address.value,
      this.longitude.value, this.latitude.value
    )}>
      Add Building to Listing
    </button>

  </div>

);
  }
}


export default AddBuilding;

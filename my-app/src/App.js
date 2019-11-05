import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      selectedData: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id -1
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  addBuilding(buildName, code, address, lat, long){
    //first we create the building to be added from the form
    const idAdd = this.state.selectedData.length +1;
    const newBuild = {
      id: idAdd,
      code: code,
      name: buildName,
      address: address,
      coordinates: { latitude: parseFloat(lat), longitude: parseFloat(long)}
    };
    //now we set the state to add the building to selected selectedData
    this.setState({
      selectedData: this.state.selectedData.concat(newBuild)
    })
  }

  removeBuilding(id){
    this.setState({
      selectedData: this.state.selectedData.filter(building => {
          return(
            building.id !== id
          )
        })
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}/>


        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.selectedData}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <AddBuilding
                addBuilding = {this.addBuilding.bind(this)}
                />
              <ViewBuilding
              selectedBuilding={this.state.selectedBuilding}
              data={this.state.selectedData}
              />
              <RemoveBuilding
                selectedBuilding = {this.state.selectedBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

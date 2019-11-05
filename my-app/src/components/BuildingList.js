import React from 'react';
//Changed setup of class componenet to be similar to Baby Names components

//This is now a static component, dont need class just need to return data filter
export default({data, selectedUpdate, filterText}) => {

//grabbing filtered buliding list
   const buildingList = data.filter(directory=>{
		 return(
			 directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
		 )

	 }).map(directory =>{
		 return(
			 <tr key={directory.id}>
			 	<button type="button" onClick = {() => selectedUpdate(directory.id)}>
				 <td>{directory.code} </td>
				 <td> {directory.name} </td>
				 </button>
			 </tr>
		 )
	 });
		//console.log('This is my directory file', this.props.data);

	return (
					<div>
							{buildingList}
						</div>

			);


		}

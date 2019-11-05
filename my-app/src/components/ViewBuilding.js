import React from 'react';

export default ({selectedBuilding, data}) => {
	var building = 'Click on a name to view more information'
	var address =''
	var code =''
	var lat =''
	var long =''
	//since we set selected building to -1 before we click on anything
	//we can check and see if its the first one to return the default statement
	if(selectedBuilding !== -1){
		building = data[selectedBuilding].name
		code = data[selectedBuilding].code
		//if coordinates exsists then that means address and coordinates are added
		if(data[selectedBuilding].coordinates){
			address =  data[selectedBuilding].address
			lat = data[selectedBuilding].coordinates.latitude
			long = data[selectedBuilding].coordinates.longitude
		}

	}

	return(
		<div>
		<b>
		<p>
		{' '}
		</p>
				<p>
				{building}
				{' '}
					</p>
				<p>
				{code}
				{' '}
					</p>
				<p>
				{address}
				{' '}
					</p>
				<p>
				{lat}
				{' '}
					</p>
				<p>
				{long}
				{' '}
			</p>
			</b>
		</div>
	)
}

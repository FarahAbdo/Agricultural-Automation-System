// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');




allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})


document.addEventListener('DOMContentLoaded', function () {
	const bellIcon = document.querySelector('.bxs-bell'); // Adjust the selector if necessary
	const notificationPopup = document.getElementById('notificationPopup');
  
	// Toggle popup on bell icon click
	bellIcon.addEventListener('click', function(e) {
	  e.preventDefault(); // Prevent the default action
	  notificationPopup.style.display = notificationPopup.style.display === 'none' ? 'block' : 'none';
	});
  
	// Close the popup if the user clicks outside of it
	window.addEventListener('click', function(e) {
	  if (!bellIcon.contains(e.target) && !notificationPopup.contains(e.target)) {
		notificationPopup.style.display = 'none';
	  }
	});
  });
  


// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}




toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})








sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})




const s = document.getElementById('save'); 
	  s.addEventListener('click',function(e){
		
			var options = {
				series: [{
					name: 'Yield',
					data: [44, 55, 41, 64, 22, 43, 21] // Example data
				}],
				chart: {
					height: 350,
					type: 'area'
				},
				plotOptions: {
					bar: {
						horizontal: false, // Adjust based on desired orientation
					},
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				xaxis: {
					type: 'datetime',
					categories: [
						"2021-03-01T00:00:00.000Z", 
						"2021-04-01T00:00:00.000Z", 
						"2021-05-01T00:00:00.000Z", 
						"2021-06-01T00:00:00.000Z", 
						"2021-07-01T00:00:00.000Z", 
						"2021-08-01T00:00:00.000Z", 
						"2021-09-01T00:00:00.000Z" // Example dates representing the planting season
					]
				},
				tooltip: {
					x: {
						format: 'dd/MM/yy'
					},
				},
			};
		
			var chart = new ApexCharts(document.querySelector("#cropYieldChart"), options);
			chart.render();
		
		}

	  )



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})




// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})



window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})





// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})






// APEXCHART
document.addEventListener('DOMContentLoaded',function () {
var options = {
	series: [{
		name: 'Yield',
		data: [44, 55, 41, 64, 22, 43, 21] // Example data
	}],
	chart: {
		height: 350,
		type: 'area'
	},
	plotOptions: {
		bar: {
			horizontal: false, // Adjust based on desired orientation
		},
	},

	responsive: [{
		breakpoint: 480, // Change options when below this width
		options: {
		  chart: {
			width: "100%", // Ensure chart fills the container
		  },
		  legend: {
			position: 'bottom' // Adjust legend position for small screens
		  }
		}
	  }],
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'datetime',
		categories: [
			"2021-03-01T00:00:00.000Z", 
			"2021-04-01T00:00:00.000Z", 
			"2021-05-01T00:00:00.000Z", 
			"2021-06-01T00:00:00.000Z", 
			"2021-07-01T00:00:00.000Z", 
			"2021-08-01T00:00:00.000Z", 
			"2021-09-01T00:00:00.000Z" // Example dates representing the planting season
		]
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy'
		},
	},
};

var chart = new ApexCharts(document.querySelector("#cropYieldChart"), options);
chart.render();

}
);

// // Toggle 'Add Field' form display
// document.getElementById('show-add-field-form').addEventListener('click', function() {
//     var form = document.getElementById('add-field-form');
//     if(form.style.display === 'none' || form.style.display === '') {
//         form.style.display = 'block'; // Show form
//     } else {
//         form.style.display = 'none'; // Hide form
//     }
// });









// fetch('api/crops') // Adjust the URL to your API endpoint that returns crops data
//     .then(response => response.json())
//     .then(data => {
//         const tableBody = document.querySelector('#cropsTable tbody');
//         data.forEach(crop => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${crop.name}</td>
//                 <td>${crop.planting_date}</td>
//                 <td>${crop.harvest_date}</td>
//                 <td>${crop.quantity}</td>
//                 <td>${crop.field_id}</td>
//                 <td>
//                     <!-- Example: Insert Edit/Delete buttons -->
//                     <button class="edit-btn">Edit</button>
//                     <button class="delete-btn">Delete</button>
//                 </td>
//             `;
//             tableBody.appendChild(row);
//         });
//     })
//     .catch(error => console.error('Error loading crops data:', error));




	// document.addEventListener('DOMContentLoaded', function() {
	// 	// Fetch total crops
	// 	fetch('/api/total-crops')
	// 		.then(response => response.json())
	// 		.then(data => document.getElementById('totalCrops').innerText = data.total);
	
	// 	// Fetch total fields
	// 	fetch('/api/total-fields')
	// 		.then(response => response.json())
	// 		.then(data => document.getElementById('totalFields').innerText = data.total);
	
	// 	// Fetch active sensors
	// 	fetch('/api/active-sensors')
	// 		.then(response => response.json())
	// 		.then(data => document.getElementById('activeSensors').innerText = data.total);
	// });
	


	// document.getElementById('loginForm').addEventListener('submit', function(event) {
	// 	event.preventDefault();
	// 	const passwordInput = document.getElementById('password').value;
	// 	if(passwordInput === '4567') {
	// 		window.location.href = 'index.html'; // Redirect to dashboard
	// 	} else {
	// 		alert('Incorrect password.');
	// 	}
	// });
	
	// // Remove the logoutButton eventListener code if not needed for redirection
	




	// document.addEventListener('DOMContentLoaded', function() {
	// 	fetch('/api/fields') // Adjust this URL to your actual API endpoint
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		const fieldSelect = document.getElementById('fieldId'); // Ensure this ID matches your select element
	// 		data.forEach(field => {
	// 			const option = new Option(field.name, field.field_id);
	// 			fieldSelect.add(option);
	// 		});
	// 	})
	// 	.catch(error => console.log('Error fetching field data:', error));
	// });





	document.addEventListener('DOMContentLoaded', function() {
		var sensorOptions = {
			series: [{
				name: 'Sensor Value',
				data: [28, 29, 33, 36, 32, 32, 33]
			}],
			chart: {
				height:'auto',
				type: 'line',
				toolbar: {
					show: false
				}
			},

			responsive: [{
				breakpoint: 480, // Change options when below this width
				options: {
				  chart: {
					width: "100%", // Ensure chart fills the container
				  },
				  legend: {
					position: 'bottom' // Adjust legend position for small screens
				  }
				}
			  }],

			plotOptions: {
				bar: {
					horizontal: false, // Adjust based on desired orientation
				},
			},
			xaxis: {
				categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
			},
			title: {
				text: 'Sensor Data',
				align: 'left'
			}
		};
	
		var sensorChart = new ApexCharts(document.querySelector("#sensorDataChart"), sensorOptions);
		sensorChart.render();
	
		// Function to update the chart based on sensor type selection
		function updateSensorChart(sensorType) {
			// Here you would fetch new sensor data based on the selected sensor type
			// For demonstration, we're just changing the chart title
			sensorChart.updateOptions({
				title: {
					text: sensorType.charAt(0).toUpperCase() + sensorType.slice(1) + ' Data'
				}
			});
		}
	
		// Event listeners for sensor type radio buttons
		document.querySelectorAll('input[name="sensorType"]').forEach((input) => {
			input.addEventListener('change', function() {
				updateSensorChart(this.value);
				// Also, you can call a function here to update the sensorNamesDropdown based on selected sensor type
			});
		});
	
		// Example function to populate sensorNamesDropdown based on sensor type
		// This should be integrated into the change event listener above
		function populateSensorNames(sensorType) {
			let options = '';
			if (sensorType === 'temperature') {
				options = '<option>Temp Sensor 1</option><option>Temp Sensor 2</option>';
			} else if (sensorType === 'humidity') {
				options = '<option>Humidity Sensor 1</option><option>Humidity Sensor 2</option>';
			}
			document.getElementById('sensorNamesDropdown').innerHTML = options;
		}
	});
	



	
	
	



	document.addEventListener('DOMContentLoaded', function () {
		const sensorTypeRadios = document.getElementsByName('sensorType');
		const sensorNamesDropdown = document.getElementById('sensorNamesDropdown');
	  
		function updateSensorNamesDropdown(sensorType) {
		  // Clear existing options
		  sensorNamesDropdown.innerHTML = '';
		  // Example data - replace with actual sensor name data
		  const names = sensorType === 'temperature' ? ['Temp Sensor 1', 'Temp Sensor 2'] : ['Humidity Sensor 1', 'Humidity Sensor 2'];
		  names.forEach(name => {
			const option = document.createElement('option');
			option.value = name;
			option.textContent = name;
			sensorNamesDropdown.appendChild(option);
		  });
		}
	  
		sensorTypeRadios.forEach(radio => {
		  radio.addEventListener('change', function () {
			updateSensorNamesDropdown(this.value);
			// Here you would also call a function to update the chart based on the selected sensor type
		  });
		});
	  
		// Initialize with default selection (if applicable)
		if(sensorTypeRadios.length > 0) {
		  sensorTypeRadios[0].checked = true;
		  updateSensorNamesDropdown(sensorTypeRadios[0].value);
		}
	  });
	  
	  





// document.getElementById('addCropForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Fetch form data
//     const formData = new FormData(this);

//     // Send the form data to the backend
//     fetch('api/crops', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // Reload or update the crops table
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });

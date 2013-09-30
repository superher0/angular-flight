(function(){

	// init global DOM elements, functions and arrays
  	window.app = {el : {}, fn : {}, mapped : []};

	/**
	 * Get user's current location
	 */
	app.fn.getCurrentPosition = function() {
		if(!navigator.geolocation) return;
		// this will ask permission to access user's location. Without permission, use server side IP address lookup if accuracy is not an issue
		navigator.geolocation.getCurrentPosition(app.fn.showPosition, app.fn.skipPosition, {timeout:10000});
	}

	/**
	 * Callback on success getCurrentPosition
	 * @param  position
	 */
	app.fn.showPosition  = function(position) {
		app.userLatitude  = position.coords.latitude;
		app.userLongitude = position.coords.longitude;
	}

	/**
	 * Callback on failure/error getCurrentPosition
	 */
	app.fn.skipPosition = function(position) {
	    return false;
	}

	/**
	 * Haversine Formula - calculate distance between 2 places
	 * @param  float lat1 latitude of place1
	 * @param  float lon1 longitude of place1
	 * @param  float lat2 latitude of place2
	 * @param  float lon2 longitude of place2
	 * @return distance in km      
	 */
	app.fn.distance = function(t1, n1, t2, n2) {

		var lat1, lon1, lat2, lon2, dlat, dlon, a, c, R;
			
		// convert coordinates to radians
		lat1 = app.fn.deg2rad(t1);
		lon1 = app.fn.deg2rad(n1);
		lat2 = app.fn.deg2rad(t2);
		lon2 = app.fn.deg2rad(n2);
		
		// find the differences between the coordinates
		dlat = lat2 - lat1;
		dlon = lon2 - lon1;

		a    = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
		c    = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
		R    = 6373; // (where R is the radius of the Earth in km) 

		return app.fn.round(R * c);
	}

	/**
	 * Convert degrees to radians
	 * @param  float deg 
	 * @return radians
	 */
	app.fn.deg2rad = function(deg) {
		return deg * Math.PI/180; // radians = degrees * pi/180
	}

	/**
	 * Round to the nearest 1/1000
	 * @param  float x 
	 * @return return rounded x
	 */
	app.fn.round = function(x) {
		return Math.round( x * 1000) / 1000;
	}

	/**
	 * Return date in DD/MM/YYYY format
	 * @param  date dt
	 * @return formatted date
	 */
	app.fn.formattedDate = function( dt ) {
		var d, DD, MM, YYYY;
		d    = new Date(dt);
		DD   = d.getDate();
		MM   = d.getMonth() + 1; // Months are zero based
		YYYY = d.getFullYear();
		DD > 10 || ( DD = '0' + DD );
		MM > 10 || ( MM = '0' + MM );
		return DD + "/" + MM + "/" + YYYY;
	}

})();
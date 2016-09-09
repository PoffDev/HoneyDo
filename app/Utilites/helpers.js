var axios = require('axios');
var UserModel = require('../../models/User')

var helpers = {

	addTask: function (userID, HoneyDo, BrowniePoints, Date) {

		var user = localStorage.getItem('_id')

		return axios.post('/addtask', task)
			.then(function(response) {

				var userID = response.data.userID;
				var HoneyDo = response.data.HoneyDo;
				var BrowniePoints = response.data.BrowniePoints;
				var CompleteBy = response.data.CompleteBy;
			}.bind(this));

	},

	//populate tasks by user
	//add task by user
		//add point value by user
	//remove task by user

	signupUser: function (email, partner1, partner2, password) {

		var user = new UserModel(email, partner1, partner2, password)

			return axios.post('/signup', user)
				.then(function(response) {

					var email = response.data.email;
					var partner1 = response.data.partner1;
					var partner2 = response.data.partner2;
					var password = response.data.password;

			}.bind(this));
			
	},

	loginUser: function (email, password) {

		return new Promise(function(resolve,reject){
			var user = {
				email: email,
				password: password
			};

			return axios.post('/login', user)
				.then(function(response){

					console.log('helpers line 35: ' + JSON.stringify(response));
					if(response.data.login === true){
						localStorage.setItem('_id', response.data._id);
						resolve("Storage Is Set");
					}else{
						resolve("User is null No User by that email");
						console.warn("No user or email")
					}

					// this.isAuthenticated = true;

			}.bind(this))


		});
	},

	isAuthenticated: false

}

module.exports = helpers;
var axios = require('axios');
var UserModel = require('../../models/User')

var helpers = {

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
}

module.exports = helpers;
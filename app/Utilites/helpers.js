var axios = require('axios');
var UserModel = require('../../models/User')

var helpers = {

	findHoneyDo: function () {

		var user = localStorage.getItem('_id')

		return axios.get('/findHoneyDo/'+user)
			.then(function(response){

				for (var i = 0; i < response.data[0].task.length; i++) {
					
					var tasks = response.data[0].task[i].HoneyDo;
					var points = response.data[0].task[i].BrowniePoints;

					// console.log(tasks)
						
					};

				return response;
				
			}.bind(this));
	},

	findReward: function () {

		var user = localStorage.getItem('_id')

		return axios.get('/findReward/'+user)
			.then(function(response){

				for (var i = 0; i < response.data[0].reward.length; i++) {
					
					var reward = response.data[0].reward[i].Reward;
					var points = response.data[0].reward[i].PointValue;

					//console.log('find helper ' + reward)
						
					};

				return response;
				
			}.bind(this));
	},

	getPoints: function (){

		var user = localStorage.getItem('_id')

		return axios.get('/getpoints/'+user)
			.then(function(response){

				return response;
				
			}.bind(this));	
	},

	addTask: function (HoneyDo, BrowniePoints, CompleteBy, Done) {

		var task = {
			HoneyDo: HoneyDo,
			BrowniePoints: BrowniePoints,
			CompleteBy: CompleteBy,
			Done: false
		};

		var user = localStorage.getItem('_id')

		return axios.post('/add', {task: task, user: user})
			.then(function(response) {

				console.log(response)

			}.bind(this));

	},

	reward: function (Reward, PointValue, Redeemed){

		var reward = {
			Reward: Reward,
			PointValue: PointValue,
			Redeemed: false
		};

		var user = localStorage.getItem('_id')

		return axios.post('/reward', {reward: reward, user: user})
			.then(function(response) {

				console.log(response)
			}.bind(this));
	},

	completeTask: function (taskID) {

		var user = localStorage.getItem('_id')

		return axios.post('/completeTask', {user: user, taskID: taskID})
			.then(function(response){
				console.log('helpers deleted task')

			}.bind(this));
	},

	completeReward: function (rewardID) {

		var user = localStorage.getItem('_id')

		return axios.post('/completereward', {user: user, rewardID})
			.then(function(response){
				console.log('helpers completed reward')

			}.bind(this));
	},

	signupUser: function (email, partner1, partner2, password) {

		var user = new UserModel(email, partner1, partner2, password)

			return axios.post('/Signup', user)
				.then(function(response) {

					var email = response.data.email;
					var partner1 = response.data.partner1;
					var partner2 = response.data.partner2;
					var password = response.data.password;
					var points = 0;

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

			}.bind(this))


		});
	},

	isAuthenticated: false

}

module.exports = helpers;
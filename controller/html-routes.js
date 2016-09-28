var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongojs = require('mongojs');

// MongoDB
// -------------------------------------------------

//MongoLab
//var databaseUrl = 'mongodb://heroku_p4fxmdhp:flluml0imtkisl87catagjddcf@ds011449.mlab.com:11449/heroku_p4fxmdhp'

// MongoDB Configuration configuration (Change this URL to your own DB)
var databaseUrl = 'mongodb://heroku_hp60kktt:tum76b8vkm11rgvcnesme04sju@ds033126.mlab.com:33126/heroku_hp60kktt';
//var databaseUrl = 'HoneyDo';
var collections = ["users"];

// use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);
 
db.on('error', function (err) {
    console.log('database error', err)
})
 
db.on('connect', function () {
    console.log('database connected')
})


// Passport
// --------------------------------------------------

// Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, email, password, done) {
    console.log(email, password);

  }
));

// These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


// Routes
// --------------------------------------------------

module.exports = function(app) {

  // entry for the React app
  app.get('/', function(req, res) {
    res.sendFile(__dirname + './app/Public/index.html');
  });

  app.get('/findHoneyDo/:_id', function(req, res) {

    var ID = req.params._id;

    console.log(ID)

    db.users.find({"_id": mongojs.ObjectId(ID)}, {"task.HoneyDo": 1, "task.BrowniePoints": 1, "task.Completed": 1,}, function(err, docs){

      res.send(docs);
      if (err) throw err;
    })
  });

  app.get('/findReward/:_id', function(req, res) {

    var ID = req.params._id;

    console.log(ID)

    db.users.find({"_id": mongojs.ObjectId(ID)}, {"reward.Reward": 1, "reward.PointValue": 1}, function(err, docs){

      res.send(docs);
      if (err) throw err;
    })
  });


  app.get('/getpoints/:_id', function(req, res) {

    var ID = req.params._id;

    //console.log('getpoints hitting');

     db.users.find({"_id": mongojs.ObjectId(ID)},{Points:1}, function (err, docs) {

        console.log('get points db query ' + docs);

        res.send(docs);
      })
    });

  // signup a user
  app.post('/Signup', function(req, res) {
    var user = req.body;
    console.log(user);
    db.users.insert(user, function(err, docs) {
      if (err) throw err;
      console.log('saved to db');
      res.send(docs);
    }); // end db.Users.insert()
  }); // end app.post()

  // login a user
  app.post('/login', function(req, res){
    console.log(req.body.email);

    db.users.findOne({email: req.body.email}, function(err, user){

      if(user == null || user == []){
        res.send({status: "Error", Error: "No User By That Email", transaction: "un-paid"});
        console.log({status: "Error", Error: "No User By That Email", transaction: "un-paid"});
      }else{
        if(user.password === req.body.password){
          res.send({
            status: "Ok",
            transaction: "Paid",
            _id: user._id,
            login: true,
          })
          console.log({
            status: "Ok",
            transaction: "Paid",
            _id: user._id,
            login: true,
          })
        }
      }


    });
  });

  app.post('/add', function(req, res){
    console.log('hit')
    

      db.users.update({"_id": mongojs.ObjectId(req.body.user)}, { $push: {"task": req.body.task} }, function(err, docs) {

        if (err) throw err;

        console.log('task pushed to db');
        res.send(docs)

      })
  });

  app.post('/reward', function (req, res) {

    console.log('reward hit');

      db.users.update({"_id": mongojs.ObjectId(req.body.user)}, { $push: {"reward": req.body.reward} }, function (err, docs) {

      if (err) throw err;

      console.log('reward pushed to db');

      res.send(docs)
    })
  });

  app.post('/completetask', function (req, res) {

    console.log('complete task hit route');

    console.log(req.body.taskID);

    var taskID = req.body.taskID;

    var $set = {};
    $set["task."+taskID+".Done"] = true;
    
    db.users.findAndModify({
      query: {"_id": mongojs.ObjectId(req.body.user)}, 
      update: {$set: $set },
      new: true
    }, function (err, doc){

        if (err) throw err

        console.log('set to true fired');
        
        db.users.findAndModify({

                          query: {"_id": mongojs.ObjectId(req.body.user)}, 
                          update: {$inc: {"Points" : parseInt(doc.task[taskID].BrowniePoints)}},
                          upsert: false,
                          multi:true
                        }, function (err, docs){

                            console.log('find and modify fired');

                            db.users.update({"_id": mongojs.ObjectId(req.body.user)}, {$pull: {"task": {"Done": true}}}, function (err, docs) {

                              console.log( 'update and delete')
                              if (err) throw err;

                             res.send(docs)
                              
                            });
                            //delete an array mongo call
                            //db.users.update({}, {$pull: {"task": {"Done": true}}});
                          });
      
      if (err) throw err;

    });

  });




  app.post('/completereward', function (req, res) {

    console.log('complete reward hit route');

    console.log(req.body.rewardID)

    var rewardID = req.body.rewardID;

    var $set = {};
    $set["reward."+rewardID+".Redeemed"] = true;
    
    db.users.findAndModify({
      query: {"_id": mongojs.ObjectId(req.body.user)}, 
      update: {$set: $set },
      new: true
    }, function (err, doc){

        console.log('completed reward set to true fired');
        
        db.users.findAndModify({

                          query: {"_id": mongojs.ObjectId(req.body.user)}, 
                          update: {$inc: {"Points" : -(parseInt(doc.reward[rewardID].PointValue))}},
                          upsert: false,
                          multi:true
                        }, function (err, docs){

                            console.log('subtracted points fired');

                            db.users.update({"_id": mongojs.ObjectId(req.body.user)}, {$pull: {"reward": {"Redeemed": true}}}, function (err, docs) {

                              console.log( 'reward update and delete')
                              if (err) throw err;

                             res.send(docs)
                              
                            });
                            //delete an array mongo call
                            //db.users.update({}, {$pull: {"task": {"Done": true}}});
                          });
      
      if (err) throw err;

    });

  });

  
}
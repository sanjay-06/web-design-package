const localstrategy=require('passport-local').Strategy;
const config=require('../config/database');
const bcrypt=require('becryptjs');

module.exports =function(passport){
    passport.use(new Localstrategy(function(username,password,done){
        let query ={username:username};
        username.findOne(query)
    }))
}
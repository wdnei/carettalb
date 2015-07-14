module.exports = function(app) {
  var User = app.models.User;
  var Complaint=app.models.Complaint;
  var Nest=app.models.Nest;
  var Turtle=app.models.Turtle;
  
  //User.defineProperty('age', { type: 'number' });
          
  User.hasMany(Complaint, {as: 'complaints',foreignKey: "userId"});
  User.hasMany(Nest, {as: 'nests',foreignKey: "userId"});
  User.hasMany(Turtle, {as: 'turtles',foreignKey: "userId"});
  
 // console.log(User);
  //var SomeOtherModel = app.models.SomeOtherModel;
  //User.hasMany(SomeOtherModel, {as: 'someOtherModels', foreignKey: 'someOtherModelId'});
};
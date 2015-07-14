var path = require('path');
var app = require(path.resolve(__dirname, '../server'));


var dataSource = app.dataSources.mySQL;


dataSource.automigrate('User', function(err) {
  if (err) throw err;

  console.log('User model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('AccessToken', function(err) {
  if (err) throw err;

  console.log('AccessToken model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('ACL', function(err) {
  if (err) throw err;

  console.log('ACL model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('RoleMapping', function(err) {
  if (err) throw err;

  console.log('RoleMapping model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('Role', function(err) {
  if (err) throw err;

  console.log('Role model migrated');
  //dataSource.disconnect();
});

dataSource.automigrate('Nest', function(err) {
  if (err) throw err;

  console.log('Nest model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('Complaint', function(err) {
  if (err) throw err;

  console.log('Complaint model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('Turtle', function(err) {
  if (err) throw err;

  console.log('Turtle model migrated');
  dataSource.disconnect();
});

module.exports = function(app) {
  var User = app.models.User;
  var Complaint=app.models.Complaint;
  var Nest=app.models.Nest;
  var Turtle=app.models.Turtle;
  var ACL=app.models.ACL;

  ACL.create( {principalType: ACL.USER,
               principalId: 'u001',
               model: 'User',
               property: ACL.ALL,
               accessType: ACL.ALL,
               permission: ACL.ALLOW}
             ,function (err, acl) {
                  console.log(acl);
              });

};

//sumbit events from the form

Template.profile.events({
    "submit .edit-profile": function(event){
        var file = $('#profileImage').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);

            ProfileImages.insert(fsFile, function(err, result){
            if(err){
                throw new Meteor.Error(err);

                } else {

                    var imageLoc = '/cfs/files/ProfileImages/'+results._id;

                    UserImages.insert({
                        UserId: Meteor.userId(),
                        username: Meteor.user().username,
                        image: imageLoc
                    });
                    Router.go('/');
                }
            });
        }

        return false;
        }
});
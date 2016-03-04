Meteor.publish("posts", function () {
    return Posts.find();
})

Meteor.publish('comments', function (postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});


Meteor.publish('notifications', function () {
    //return Notifications.find();
    return Notifications.find({userId: this.userId, read: false});
});

/*Meteor.publish('post',function(author){
 //只是发布db中flagged的值为true的数据
 return Posts.find({flagged: true, author: author});
 })*/

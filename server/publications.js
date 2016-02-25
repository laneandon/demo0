Meteor.publish("posts",function(){
    return Posts.find();
})


/*Meteor.publish('post',function(author){
    //只是发布db中flagged的值为true的数据
    return Posts.find({flagged: true, author: author});
})*/

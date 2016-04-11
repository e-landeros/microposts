Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    //post route
    this.route('posts', {
        path: '/',
        template: 'posts'
    });

    //about route
    this.route('about');

    //profile
    this.route('profile');
});
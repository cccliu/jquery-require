require.config({
    baseUrl:"./static",
    paths: {
        "jquery": ["jquery"],
        "template":["template"],
        "text":["component/text"],
        "css":["component/css"]
    },
});
require(['template','jquery'], function(template,jquery) {
    var obj = {
        init: function () {
           obj.hasIniteNet();
           obj.bind();
        },
        bind: function () {
           $(window).on('hashchange',obj.hasIniteNet);
        },
        hasIniteNet: function () {
            var hash = window.location.hash,
                para = /#!(([^!]*)!)?/.exec(hash),
                directory = hash.replace(/#!(([^!]*)!)?/ig, '').split('/');
                if(directory[0] && directory[1]){
                    var PathUrl='component'+'/'+directory[0]+'/'+directory[1];
                        require([PathUrl],function(fn){
                           fn.fill(template);
                        });
                };
        }
    }
    obj.init();
});


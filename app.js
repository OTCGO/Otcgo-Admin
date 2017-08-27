(function ($) {

    console.log('app')
    window.app = $.sammy('#app', function () {
        this.use('Template');

        // 主页
        this.get('#/', function (context) {
            this.partial('./view/index.template');
        });



        /**
         * login  && regeste
         */
        this.get('#/login/', function (context) {
            //  this.partial('./view/login/login.template');  
            // context.render('./view/login/login.template',function(result){
            //     $("body").html(result)
            // });  
        });


        /**
         * 404 not found
         */
        this.get('#/404/', function (context) {
            context.render('./view/404.template', function (result) {
                $("body").html(result)
            });
        });


        /**
         * 财务管理
         */
        //冲值
        this.get('#/deposit/', function (context) {
            this.partial('./view/finance/deposit.template');
        });

        // 提现
        this.get('#/enchashment/', function (context) {
            this.partial('./view/finance/enchashment.template');
        });


        this.notFound = function () {
            this.runRoute('get', '#/404/');
        };
    });
    app.run('#/');



    $(window).bind('hashchange', function (event) {
        /* things */
        console.log('event', window.location.hash)
        switch (window.location.hash) {
            case '#/login/':
                $('.index-page').css({
                    "display": "none"
                })
                $('.login-page').css({
                    "display": "block"
                })
                break;

            default:
                $('.index-page').css({
                    "display": "block"
                })
                $('.login-page').css({
                    "display": "none"
                })
                break;
        }
    });


})(jQuery);




function handleLogin() {
    //   app.setLocation('#/');
    location.href = '#/'
}
var path = require('path');
var Koa = require('koa');
var VueView = require('../lib/index.js');
var app = new Koa();
const router = require('koa-router')()
const axios = require('axios')
const DOUBAN_MOVIE_HOT = 'https://api.douban.com/v2/movie/in_theaters'
app.use(VueView({
    methodName: 'render',
    data: {
        /*users: {}*/
    },
    methods: {
      /*  getData () {
            var result = axios.get(DOUBAN_MOVIE_HOT).then(res => {
                this.data.users = result.data;
            })
            
        }*/
    },
    components: {
        Master: {
            path: path.resolve(__dirname, '../epk-view/src/views/Master.vue'),
            data() {

            },

        },
        List: {
            path: path.resolve(__dirname, '../epk-view/src/components/List2.vue'),
             data() {
                this.layoutVersion = '1.0.0';
                return {
                    layoutName: 'master'
                }
            },
            methods: {
                  





               
            }    
        }
    }
}));
router.get('/', async(ctx, next) => {
    result = await axios.get(DOUBAN_MOVIE_HOT)
    console.log(result);
    ctx.state.users = result.data;
    ctx.render(path.resolve(__dirname, '../epk-view/src/views/Layout.vue'));

})
app.use(router.routes(), router.allowedMethods())
app.on('error', (err, ctx) => {
    ctx.body = 'sdf：' + err.message;
})
app.listen(8206);
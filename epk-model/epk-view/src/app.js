var path = require('path');
var Koa = require('koa');
var VueView = require('../../lib/index.js');
var app = new Koa();
const router = require('koa-router')()
const axios = require('axios')
const DOUBAN_MOVIE_HOT = 'https://api.douban.com/v2/movie/in_theaters'
app.use(VueView({
    methodName: 'render',
    data: {
        //_: require('lodash'),
        app: {
            name: 'Github',
            version: '1.0.0'
        }
    },
    methods: {
        add(a, b) {
            return a + b;
        }
    },
    components: {
        Master: {
            path: path.resolve(__dirname, './views/Master.vue'),
            data() {
                this.layoutVersion = '1.0.0';
                return {
                    layoutName: 'master'
                }
            },
            methods: {
                hight(str) {
                    return `***${str}***`;
                }
            }
        },
        Age: path.resolve(__dirname, './components/Age.vue')
    }
}));
router.get('/', async (ctx, next) => {
      result = await axios.get(DOUBAN_MOVIE_HOT)
      console.log(result);
      ctx.state.users = result.data;
      ctx.render(path.resolve(__dirname, './views/User.vue'));
})

app.use(router.routes(), router.allowedMethods())
app.on('error', (err, ctx) => {
    ctx.body = 'sdf：' + err.message;
})

app.listen(8200);
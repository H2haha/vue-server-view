      
export function hearts () {

       var count = 0;
        var url = "ws://172.23.128.96:8082";
        var ws = new WebSocket(url);
        var timer =  setInterval(() => {
            ws.send('我是浏览器发送过来的数据');
        }, 3000);
        ws.onopen = function(event) {
            console.log('和服务端建立连接');
        }
        ws.onerror = function (params) {
            console.log('error');
            clearInterval(timer);
        }
        ws.onclose = function () {
            clearInterval(timer);
        }
        ws.onmessage = function(event) {
            var showData = count++ + '   ' + event.data;
            console.log(showData);
        }
}
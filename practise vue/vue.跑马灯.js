<!-- 分析：
    1.给 “动起来” 按钮，绑定一个点击事件 v-on  @
    2.给按钮的时间处理函数中，写相关的的业务逻辑代码：
      拿到 mgs字符串，然后调用字符串的substring来进
      行字符串的截取操作，把第一个字符截取出来，放到
      最后一个位置即可 
    3.为了实现点击下按钮，自动截取功能，需要把2步骤中
      的代码，放到一个定时器中去-->
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title></title>
        <!-- 引入vue.js -->
        <script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
    </head>
    <body>
        <div id='app'>
            <input type="button" value="跑起来" @click="start">
            <input type="button" value="停下来" @click="stop">
            <h3>{{msg}}</h3>
        </div>
    
    </body>
    <script>
        // 实例化vue对象
        // 在vm实例中，如果想要获取 data 上的数据，或者想要调用methods中
        // 的方法，必须通过this.数据属性名 或 this.方法名 来进行访问
        // ，这里的this，就表示我们new出来的vm实例对象
        let vm = new Vue({
            // 绑定对象
            el:'#app',
            data:{
                msg:'你好，少航，严欣豪，烟瘾好',
                myInterval:null
            },
            methods:{
                start:function(){
                    console.log("跑起来")
                    // 如果已经定义，则不再向下执行
                    if(this.myInterval){
                        return
                    }
                    // 如果不使用箭头函数需要写let this = this
                    // 定义定时器
                    this.myInterval = setInterval(()=>{
                        // 获取第一个字符
                        let start = this.msg.substring(0,1)
                        // 获取剩下的字符
                        let end = this.msg.substring(1)
                        // 重新拼凑字符串
                        this.msg = end + start
                    },100)
                    // vm实例，会监听自己身上data中所有数据的改变，
                    // 只要数据一发生变化，就会自动把最新的数据，从data
                    // 上同步到页面中去；好处：可以只关心数据，不需要考
                    // 虑如何重新渲染dom页面
                },
                // Es6写法
                stop(){
                    console.log("停下来")
                    // 清除定时器
                    clearInterval(this.myInterval)
                    this.myInterval = null
                }
            }
        })
    </script>
</html>

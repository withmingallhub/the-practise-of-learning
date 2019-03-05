<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
    <!-- 使用 v-cloak 能够解决 差值闪烁的问题 -->
    <div id="block" v-cloak>
        <p>===={{mgs}}++++</p>
    <!-- 默认 v-text时没有闪烁问题的 -->
    <!-- v-text会覆盖原本的内容，但是 插值表达式 只会替换自己的这个占位符 ，
    不会把整个元素的的内容清空 -->
        <p v-text="mgs">====++++</p>
        <span>{{mms}}</span>
        <br>
        <span v-text="mms"></span>


        <!-- 直接引入和v-text都会默认会渲染为一个字符串 -->
        <div>{{mmp}}</div>
        <!-- v-html也会覆盖内容 -->
        <div v-html="mmp">1111</div>

        <!-- v-bind ： 是vue中，提供的用于绑定属性的指令 ，bind后边会视为js代码，可以使用 + 加上字符串
        并且，v-bind：可以简写为一个英文得到冒号:-->
        <input type="button" value="按钮" v-bind:title="mytitle + '一二三'">
        
        <!-- vue中提供了v-on事件绑定机制 -->
        <!-- 错误写法： <input type='button' value='按钮' :title="mytitle + '123'" v-on:click="alert('hello')"> -->
        <!-- v-on的缩写是@ -->
        <input type="button" value="按钮" v-on:click="show">


    
    </div>


    

    <script src="vue.min.js"></script>
    <script>
        var vu = new Vue({
            el:'#block',
            data:{
                mgs:'一个p标签',
                mms:'一个span标签',
                mmp:'<p>这是一个p标签</p>',
                mytitle:'按钮的名字'
            },
            methods:{ //methods 属性中定义了当前vue实例中所有可用的方法
                show:function(){
                    alert("hello");
                }
            }
        });
    </script>
</body>
</html>

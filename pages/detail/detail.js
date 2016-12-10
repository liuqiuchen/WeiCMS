// aboutme.js
//获取应用实例
var app = getApp();
Page({
  data: {
    info: {
        id: 1,
        img: '../../images/logo.png',
        title: 'aaaaaaaa',
        cTime: '2016-09-26 21:40',
        content: '本文档将带你一步步创建完成一个微信小程序，' +
        '并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，' +
        '点击头像，可以在新开的页面中查看当前小程序的启动日志。'
    }
  },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
        //console.log(options);
    },
    onReady:function(){
        // 页面渲染完成
    },
    onShow:function(){
        // 页面显示
    },
    onHide:function(){
        // 页面隐藏
    },
    onUnload:function(){
        // 页面关闭
    }
});
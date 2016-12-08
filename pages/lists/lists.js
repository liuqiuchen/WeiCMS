// pages/lists/lists.js
Page({
  data:{
    newsList: [
        {
            id: 1,
            img: '../../images/logo.png',
            title: 'aaaaaaaa',
            cTime: '2016-09-26 21:40'
        },
        {
            id: 2,
            img: '../../images/logo.png',
            title: 'bbbbbbbb',
            cTime: '2016-09-26 21:40'
        },
        {
            id: 3,
            img: '../../images/logo.png',
            title: 'ccccc',
            cTime: '2016-09-26 21:40'
        },
        {
            id: 4,
            img: '../../images/logo.png',
            title: 'dddddd',
            cTime: '2016-09-26 21:40'
        }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      console.log(options);
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
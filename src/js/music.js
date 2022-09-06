// 轮播图
var container = document.querySelector('.picture')
var container_ul = document.querySelector('.img')
var container_ul_li = document.querySelector('.img li')
var before = container_ul[0]
var after = container_ul[1]
var width
var i = 0
var flag = 0
var ol = document.querySelector('.circle')
for (var i = 0; i < container_ul.length; i++) {
  // 创建一个li
  var li = document.createElement('li');
  console.log(li);
  // 记录序列号
  li.setAttribute('index', i);
  // 把li插到ol里面
  ol.appendChild(li)
  // 利用排他思想，可以直接在生成小圆圈的同时直接绑定点击事件
  li.addEventListener('click', function () {
    for (i = 0; i < ol.children.length; i++) {
      ol.children[i].className = ''
    }
    // 留下我自己 当前的小li设置样式
    this.className = 'current'
  })
}
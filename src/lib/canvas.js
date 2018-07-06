import jquery from 
(function () {
  var $circle = [{
      el: $('.circle2'),
      initRotates: [30, 140, 230, 330],
      actIndex: 0
  }, {
      el: $('.circle3'),
      initRotates: [60, 20, 123],
  }];
  var circleText = {
      '稳定性': ['稳定性', '稳定性', '稳定性'],
      '安全性': ['安全性', '安全性', '安全性'],
      '功能': ['功能', '功能', '功能'],
      '性能': ['性能', '性能', '性能'],
  }
  var rotate = 0;//旋转角度
  var flag = true;// 是否旋转
  setInterval(function () {
      if (flag) {
          rotate += .1;
          rotateChange();
      }
  }, 10)
  rotateChange();

  function rotateChange() {
      rotate %= 360;
      $circle.forEach(function (item) {
          setRotate(rotate, item.el)
          item.el.children().each(function (index, child) {
              setRotate(-item.initRotates[index] - rotate, $(child).find('.small-circle'))
          })
      })
  }

  $circle.forEach(function (item) {
      item.el.children().each(function (index, child) {
          if (index == item.actIndex) {
              $(child).find('.small-circle').addClass('active');
              tabCircleText($(child).find('.small-circle').text())
          }
          $(child).css({
              transform: ' rotate(' + item.initRotates[index] + 'deg)'
          })
      })
  })

  function setRotate(num, $el) {
      $el.css({
          transform: 'translate3d(-50%, -50%, 0) rotate(' + num + 'deg)'
      })
  }

  function tabCircleText(text) {
      if (!text) return;
      $wrap = $('.gltext>ul');
      $wrap.empty();
      var textArr = circleText[text];
      for (var i = 0; i < textArr.length; i++) {
          $wrap.append($('<li>').text(textArr[i]))
      }
  }

  // jq 事件
  $('.circle-warp').mouseover(function () {
      flag = false;
  }).mouseleave(function () {
      flag = true;
  })

  $('.small-circle:not(.no-active)').click(function () {
      $(this).closest('.circle-warp').find('.small-circle').removeClass('active');
      tabCircleText($(this).text());
      $(this).addClass('active');
  })
}())
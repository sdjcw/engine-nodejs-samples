var page = require('webpage').create();

page.viewportSize = { width: 1440, height: 900 };

page.open('https://leancloud.cn/docs', function (status) {
  console.log('open', status);
  page.render('./screenshot.png', {format: 'png'});
});

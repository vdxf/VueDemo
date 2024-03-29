## xss攻击是什么
XSS全称是Cross Site Scripting，为了与“CSS”区分开来，故简称XSS，翻译过来就是“跨站脚本”。XSS攻击是指黑客往HTML文件中或者DOM中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。
跨站脚本攻击可以做很多事，比如以下几点：
1. 可以窃取Cookie信息。恶意JavaScript可以通过“document.cookie”获取Cookie信息，然后通过XMLHttpRequest或者Fetch加上CORS功能将数据发送给恶意服务器；恶意服务器拿到用户的Cookie信息之后，就可以在其他电脑上模拟用户的登录，然后进行转账等操作。
2. 可以监听用户行为。恶意JavaScript可以使用“addEventListener”接口来监听键盘事件，比如可以获取用户输入的信用卡等信息，将其发送到恶意服务器。黑客掌握了这些信息之后，又可以做很多违法的事情。
3. 可以通过修改DOM伪造假的登录窗口，用来欺骗用户输入用户名和密码等信息。

## 跨站脚本注入方式
1. 存储型XSS攻击
首先黑客利用站点漏洞将一段恶意JavaScript代码提交到网站的数据库中；
然后用户向网站请求包含了恶意JavaScript脚本的页面；
当用户浏览该页面的时候，恶意脚本就会将用户的Cookie信息等数据上传到服务器。
2. 反射型XSS攻击
在一个反射型XSS攻击过程中，恶意JavaScript脚本属于用户发送给网站请求中的一部分，随后网站又把恶意JavaScript脚本返回给用户。当恶意JavaScript脚本在用户页面中被执行时，黑客就可以利用该脚本做一些恶意操作。需要注意的是，Web服务器不会存储反射型XSS攻击的恶意脚本，这是和存储型XSS攻击不同的地方。
3. 基于DOM的XSS攻击
基于DOM的XSS攻击是不牵涉到页面Web服务器的。具体来讲，黑客通过各种手段将恶意脚本注入用户的页面中，比如通过网络劫持在页面传输过程中修改HTML页面的内容，这种劫持类型很多，有通过WiFi路由器劫持的，有通过本地恶意软件来劫持的，它们的共同点是在Web资源传输过程或者在用户使用页面的过程中修改Web页面的数据。

## 如何阻止XSS攻击
1. 服务器对输入脚本进行过滤或转码
2. 充分利用CSP
3. 使用httpOnly属性
4. 限制输入长度
5. 添加验证码防止脚本冒充用户提交危险操作
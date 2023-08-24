## JS 如何实现多线程
多线程的实现可以通过 Web Workers 来实现。Web Worker 是浏览器提供的一种 JavaScript API，用于在后台线程中执行耗时的任务，以避免阻塞主线程。它可以提高网页的响应性能和用户体验。

## web worker
Web Worker (工作线程) 是 HTML5 中提出的概念，分为两种类型，专用线程（Dedicated Web Worker） 和共享线程（Shared Web Worker）。专用线程仅能被创建它的脚本所使用（一个专用线程对应一个主线程），而共享线程能够在不同的脚本中使用（一个共享线程对应多个主线程）。

需要注意的点:
有同源限制
无法访问 DOM 节点
运行在另一个上下文中，无法使用Window对象
Web Worker 的运行不会影响主线程，但与主线程交互时仍受到主线程单线程的瓶颈制约。换言之，如果 Worker 线程频繁与主线程进行交互，主线程由于需要处理交互，仍有可能使页面发生阻塞
共享线程可以被多个浏览上下文（Browsing context）调用，但所有这些浏览上下文必须同源（相同的协议，主机和端口号）

专用线程由 Worker()方法创建，可以接收两个参数，第一个参数是必填的脚本的位置，第二个参数是可选的配置对象，可以指定 type、credentials、name 三个属性。
  var worker = new Worker('worker.js', { name: 'dedicatedWorker'})

共享线程使用 Shared Worker() 方法创建，同样支持两个参数，用法与 Worker() 一致。
  var sharedWorker = new SharedWorker('shared-worker.js')

## Web Worker 的工作原理
当使用 Web Worker 时，开发者可以创建一个独立的后台线程，该线程可以执行一些复杂的计算、处理大量数据或执行其他耗时的操作。主线程可以继续执行其他任务，而不会受到后台线程的影响
1、开发者创建一个新的 Web Worker 对象，并指定要执行的脚本文件。
2、浏览器会为该 Web Worker 创建一个独立的后台线程，该线程会加载并执行指定的脚本文件。
3、在后台线程中，开发者可以通过监听事件来接收和发送消息。例如，可以通过 postMessage 方法向后台线程发送消息，后台线程可以通过 onmessage 事件监听来接收消息。
4、后台线程执行完任务后，可以通过 postMessage 方法向主线程发送消息，主线程可以通过 onmessage 事件监听来接收消息。
5、主线程和后台线程之间的通信是通过消息传递机制实现的，这样可以确保线程之间的安全性和可靠性

## 使用 Web Workers 实现多线程的基本步骤：

1. 创建一个新的 JavaScript 文件，该文件将作为 Web Worker 的脚本.
  创建一个名为 `worker.js` 的文件

2. 在主线程中创建一个新的 Web Worker 对象，指定要执行的脚本文件。　
  const worker = new Worker('worker.js');

3. 在 Web Worker 脚本文件中定义需要执行的任务。　
  // 在 Web Worker 中接收主线程发送的消息
  self.onmessage = function(event) {
    const data = event.data;

    // 执行耗时的任务
    const result = performHeavyTask(data);

    // 将结果发送回主线程
    self.postMessage(result);
  };

  function performHeavyTask(data) {
    // 执行耗时的任务，例如复杂的计算或者数据处理

    // 返回结果
    return result;
  }

4. 在主线程中向 Web Worker 发送消息，并处理 Web Worker 返回的结果。　　
  // 在主线程中发送消息给 Web Worker
  worker.postMessage(data);

  // 在主线程中接收 Web Worker 发送的消息
  worker.onmessage = function(event) {
    const result = event.data;

    // 处理 Web Worker 返回的结果
    // ...
  };
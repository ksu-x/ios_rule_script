// @name Shadowrocket Logger
// @version 1.0
// @description Report each request to external server
// @author ChatGPT
// @type http-request
// @pattern ^https?://.*
// @script

(async function() {
  const url = $request.url;
  const method = $request.method;
  const headers = $request.headers;
  const hostname = $request.hostname;

  // 拼接完整地址（你可以只上传 host，也可以带 path）
  const reportData = {
    method,
    url,
    hostname,
    time: new Date().toISOString()
  };

  // 你自己的接收服务器地址（支持 GET/POST）
  const reportUrl = `https://your-server.com/report`;

  // 用 POST 上报（推荐）
  await $httpClient.post(reportUrl, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reportData)
  });

  // ✅ 允许原始请求继续
  $done({});
})();

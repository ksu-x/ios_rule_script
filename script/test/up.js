// report-logger.js
(async function () {
  const reportUrl = $arguments['report_url'];
  $.notification.post(reportUrl);

  const encodedUrl = encodeURIComponent($request.url);
  const fullUrl = `${reportUrl}?url=${encodedUrl}`;

  // 发 GET 请求到服务器
  await $httpClient.get(fullUrl, () => {
    $done({});
  });
})();

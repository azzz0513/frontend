// 统一处理Token和请求头设置
(function() {
    // 从localStorage获取Token
    const token = localStorage.getItem('authToken');

    // 拦截所有fetch请求
    const originalFetch = window.fetch;
    window.fetch = function(url, options = {}) {
        // 添加Authorization头
        options.headers = options.headers || {};
        options.headers['Authorization'] = `Bearer ${token}`;
        return originalFetch.call(this, url, options);
    };
})();
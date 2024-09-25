function updateTime() {
    const now = new Date(); // 获取当前时间
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedTime = now.toLocaleString('zh-CN', options); // 格式化时间
    document.getElementById('currentTime').textContent = formattedTime; // 更新时间显示
}

// 每秒更新一次时间
window.setInterval(updateTime, 1000);

// 页面加载时显示时间
updateTime();
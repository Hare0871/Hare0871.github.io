// 获取按钮元素
const toggleBtn = document.getElementById('themeToggle');

// 检查本地存储中保存的主题（让用户的选择不会丢失）
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// 根据状态应用主题
function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    // 保存到本地存储
    localStorage.setItem('darkMode', isDarkMode);
}

// 切换按钮点击事件
toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // 取反
    applyTheme();
});

// 页面加载时应用之前保存的主题
applyTheme();
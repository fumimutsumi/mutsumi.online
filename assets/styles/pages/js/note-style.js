// 显示自定义弹窗函数
function showCustomAlert(message) {
    document.getElementById('alertMessage').innerHTML = message;
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// 关闭自定义弹窗函数
function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// 检查环境函数
function checkEnvironment() {
    // 第一个弹窗：检测中提示
    showCustomAlert('環境掃描中…Ciallo~(∠・ω< )⌒★<br><div style="margin-top:10px; text-align:center;">⏳ 正在扫描安全协议...</div>');
    
    // 等待1秒后弹出第二个弹窗
    setTimeout(function() {
        var messages = [
            '安全認証完了です! 可以放心提交了喵~<br><span style="color:green;">✓ 环境安全评级: AAA</span>',
            '「防火墻の超電磁屏障」展開!… 通過!無異常です!<br><span style="color:blue;">🛡️ 电磁护盾: 已激活</span>',
            '>>> 威胁指数: 0.0 >>> 环境非常安全喵~<br><span style="color:purple;">🔒 加密通道: 已建立</span>'
        ];
        
        var randomIndex = Math.floor(Math.random() * messages.length);
        showCustomAlert(messages[randomIndex]);
    }, 1000);
}
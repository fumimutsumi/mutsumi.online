// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const toggleBtn = document.getElementById('toggle-btn');
  const toggleIcon = document.getElementById('toggle-icon');
  const birthdayTitle = document.getElementById('birthday-title');
  const blessingText = document.getElementById('blessing-text');
  const lightButtons = document.querySelectorAll('.light-row button');
  const darkButtons = document.querySelectorAll('.dark-row button');
  const fallingContainer = document.getElementById('falling-container');
  const instruction = document.getElementById('instruction');
  
  // 定义两种状态的数据
  const cousinBirthdayData = {
    title: "WSH的生日祝福",
    blessings: [
      "今天是你的农历生日！",
      "愿你的每一天都充满欢笑与阳光。",
      "愿你的梦想像星星一样闪亮，像月亮一样圆满。",
      "生日快乐，愿你永远保持童心与快乐！"
    ],
    lightButtons: ["W", "S", "H"],
    darkButtons: ["S", "R", "K", "L"],
    fallingText: "🎂生日快乐",
    instruction: "点击任意按钮，会有特殊效果"
  };
  
  const myBirthdayData = {
    title: "我的成年日祝福",
    blessings: [
      "今天是我踏入成年的重要日子！",
      "愿今后的学习顺顺利利，每一步都踏踏实实。",
      "愿学的技术栈可以实现目标，迈进前端交互。",
      "成年不是终点，而是崭新旅程的开始！"
    ],
    lightButtons: ["W", "T", "Q"],
    darkButtons: ["C", "N", "K", "L"],
    fallingText: "✨恭喜成年",
    instruction: "点击任意按钮，会有特殊效果"
  };
  
  // 初始状态为WSH的生日
  let isMyBirthday = false;
  
  // 更新页面内容
  function updateContent() {
    const data = isMyBirthday ? myBirthdayData : cousinBirthdayData;
    
    // 更新标题
    birthdayTitle.textContent = data.title;
    
    // 更新祝福文本
    blessingText.innerHTML = '';
    data.blessings.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      blessingText.appendChild(p);
    });
    
    // 更新浅色按钮文本
    lightButtons.forEach((btn, index) => {
      if (index < data.lightButtons.length) {
        btn.textContent = data.lightButtons[index];
      }
    });
    
    // 更新深色按钮文本
    darkButtons.forEach((btn, index) => {
      if (index < data.darkButtons.length) {
        btn.textContent = data.darkButtons[index];
      }
    });
    
    // 更新说明文本
    instruction.textContent = data.instruction;
    
    // 更新切换按钮图标,使用左右箭头表示状态
    // 向右箭头表示从WSH生日切换到我的生日
    // 向左箭头表示从我的生日切换到WSH生日
    if (isMyBirthday) {
      toggleIcon.className = 'fas fa-arrow-left';
      toggleBtn.title = "切换到WSH生日";
    } else {
      toggleIcon.className = 'fas fa-arrow-right';
      toggleBtn.title = "切换到我的成年日";
    }
  }
  
  // 切换按钮点击事件
  toggleBtn.addEventListener('click', function() {
    isMyBirthday = !isMyBirthday;
    updateContent();
    
    // 切换时创建一个掉落文字
    createFallingText();
  });
  
  // 创建掉落文字
  function createFallingText() {
    const data = isMyBirthday ? myBirthdayData : cousinBirthdayData;
    const fallingText = document.createElement('div');
    fallingText.className = 'falling-text';
    fallingText.textContent = data.fallingText;
    
    // 随机水平位置,确保在屏幕内
    const maxLeft = window.innerWidth - 60;
    const leftPosition = Math.random() * Math.max(20, maxLeft);
    fallingText.style.left = leftPosition + 'px';
    
    // 随机动画时长 (3-5秒)
    const duration = 3 + Math.random() * 2;
    
    // 应用动画
    fallingText.style.animation = `fall ${duration}s linear forwards`;
    
    // 添加到容器
    fallingContainer.appendChild(fallingText);
    
    // 动画结束后移除元素
    setTimeout(() => {
      if (fallingText.parentNode) {
        fallingText.parentNode.removeChild(fallingText);
      }
    }, duration * 1000);
  }
  
  // 为所有按钮添加点击事件
  function setupButtonEvents() {
    const allButtons = [...lightButtons, ...darkButtons];
    
    allButtons.forEach(button => {
      button.addEventListener('click', function() {
        // 创建掉落文字
        createFallingText();
      });
    });
  }
  
  // 初始化页面
  updateContent();
  setupButtonEvents();
});
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const birthdayTitle = document.getElementById('birthday-title');
  const pinkButtons = document.querySelectorAll('.pink-btn');
  const purpleButtons = document.querySelectorAll('.purple-btn');
  const fallingContainer = document.getElementById('falling-container');
  const carrotBg = document.getElementById('carrot-bg');
  
  // 顶部banner元素
  const bannerSlides = document.querySelector('.banner-slides');
  const bannerDots = document.querySelectorAll('.banner-dots .dot');
  const bannerPrevBtn = document.querySelector('.banner-container .prev-btn');
  const bannerNextBtn = document.querySelector('.banner-container .next-btn');
  
  // 生日贺图轮播元素
  const gallerySlides = document.querySelector('.gallery-slides');
  const galleryDots = document.querySelectorAll('.gallery-dots .dot');
  const galleryPrevBtn = document.querySelector('.gallery-container .prev-btn');
  const galleryNextBtn = document.querySelector('.gallery-container .next-btn');
  
  // 轮播状态
  let bannerCurrentIndex = 0;
  let galleryCurrentIndex = 0;
  const bannerTotalSlides = document.querySelectorAll('.banner-slide').length;
  const galleryTotalSlides = document.querySelectorAll('.gallery-slide').length;
  
  // 创建胡萝卜背景
  function createCarrotBackground() {
    const rows = 15; // 行数
    const carrotsPerRow = 20; // 每行胡萝卜数量
    
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      row.className = 'carrot-row';
      
      // 设置行的位置和角度
      const top = (i * 80) - 40; // 行间距
      const angle = 45; // 45度倾斜
      
      row.style.top = `${top}px`;
      row.style.transform = `rotate(${angle}deg)`;
      
      // 设置动画方向
      if (i % 2 === 0) {
        row.style.animation = `moveLeft ${20 + i * 2}s linear infinite`;
      } else {
        row.style.animation = `moveRight ${25 + i * 2}s linear infinite`;
      }
      
      // 创建胡萝卜
      for (let j = 0; j < carrotsPerRow; j++) {
        const carrot = document.createElement('div');
        carrot.className = 'carrot';
        row.appendChild(carrot);
      }
      
      carrotBg.appendChild(row);
    }
    
    // 添加动画关键帧
    const style = document.createElement('style');
    style.textContent = `
      @keyframes moveLeft {
        0% { transform: rotate(45deg) translateX(0); }
        100% { transform: rotate(45deg) translateX(-100px); }
      }
      @keyframes moveRight {
        0% { transform: rotate(45deg) translateX(0); }
        100% { transform: rotate(45deg) translateX(100px); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // 更新banner轮播
  function updateBanner() {
    const slideWidth = 100 / bannerTotalSlides; // 每个轮播项的宽度百分比
    const offset = -bannerCurrentIndex * slideWidth;
    bannerSlides.style.transform = `translateX(${offset}%)`;
    
    // 更新指示点
    bannerDots.forEach((dot, index) => {
      if (index === bannerCurrentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // 更新生日贺图轮播
  function updateGallery() {
    const slideWidth = 100 / galleryTotalSlides; // 每个轮播项的宽度百分比
    const offset = -galleryCurrentIndex * slideWidth;
    gallerySlides.style.transform = `translateX(${offset}%)`;
    
    // 更新指示点
    galleryDots.forEach((dot, index) => {
      if (index === galleryCurrentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // 下一个banner
  function nextBanner() {
    bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotalSlides;
    updateBanner();
  }
  
  // 上一个banner
  function prevBanner() {
    bannerCurrentIndex = (bannerCurrentIndex - 1 + bannerTotalSlides) % bannerTotalSlides;
    updateBanner();
  }
  
  // 下一个生日贺图
  function nextGallery() {
    galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryTotalSlides;
    updateGallery();
  }
  
  // 上一个生日贺图
  function prevGallery() {
    galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryTotalSlides) % galleryTotalSlides;
    updateGallery();
  }
  
  // 创建掉落文字
  function createFallingText(buttonText = '') {
    const fallingText = document.createElement('div');
    fallingText.className = 'falling-text';
    
    // 根据按钮文本选择不同的掉落内容
    const texts = {
      'A': '🎀阿米娅🎀',
      'M': '🎂生日快乐🎂',
      'Y': '✨永远闪耀✨',
      'S': '🎁生日快乐🎁',
      'R': '❤️博士爱你❤️',
      'K': '🎉生日快乐🎉',
      'L': '🌟罗德岛之光🌟'
    };
    
    fallingText.textContent = texts[buttonText] || '🎂生日快乐🎂';
    
    // 根据按钮文本设置颜色
    if (['A', 'M', 'Y'].includes(buttonText)) {
      fallingText.style.color = '#ff4081'; // 粉色
    } else if (['S', 'R', 'K', 'L'].includes(buttonText)) {
      fallingText.style.color = '#9c27b0'; // 紫色
    } else {
      fallingText.style.color = '#ff4081'; // 默认粉色
    }
    
    // 随机水平位置
    const maxLeft = window.innerWidth - 100;
    const leftPosition = Math.random() * Math.max(20, maxLeft);
    fallingText.style.left = leftPosition + 'px';
    
    // 随机动画时长
    const duration = 3 + Math.random() * 2;
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
    const allButtons = [...pinkButtons, ...purpleButtons];
    
    allButtons.forEach(button => {
      button.addEventListener('click', function() {
        // 创建掉落文字
        createFallingText(this.textContent);
        
        // 添加点击反馈
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });
  }
  
  // 为指示点添加点击事件
  function setupDotsEvents() {
    // Banner指示点
    bannerDots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        bannerCurrentIndex = index;
        updateBanner();
      });
    });
    
    // 生日贺图指示点
    galleryDots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        galleryCurrentIndex = index;
        updateGallery();
      });
    });
  }
  
  // 初始化页面
  function initPage() {
    // 创建胡萝卜背景
    createCarrotBackground();
    
    // 设置按钮事件
    setupButtonEvents();
    
    // 设置指示点事件
    setupDotsEvents();
    
    // 设置banner轮播控制
    bannerNextBtn.addEventListener('click', nextBanner);
    bannerPrevBtn.addEventListener('click', prevBanner);
    
    // 设置生日贺图轮播控制
    galleryNextBtn.addEventListener('click', nextGallery);
    galleryPrevBtn.addEventListener('click', prevGallery);
    
    // 自动轮播
    setInterval(nextBanner, 5000);
    setInterval(nextGallery, 6000);
    
    // 页面加载后随机创建一个掉落文字
    setTimeout(() => {
      createFallingText();
    }, 1000);
  }
  
  // 启动初始化
  initPage();
});
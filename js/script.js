    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
              
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Эффект при скролле для шапки
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Анимация при загрузке
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.feature-card, .about-feature, .server-stat, .rules-category, .server-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('rules-category')) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            if (el.classList.contains('rules-category')) {
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease';
            }
            observer.observe(el);
        });
    });

    // Анимация для premium сервера
    const premiumCard = document.querySelector('.server-card.premium');
    if (premiumCard) {
        premiumCard.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                premiumCard.classList.add('clicked');
                setTimeout(() => {
                    premiumCard.classList.remove('clicked');
                }, 1000);
            }
        });
    }

    // Функции для модальных окон
    function openModal(modalId) {
        document.getElementById(modalId).classList.add('show');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
        document.body.style.overflow = ''; // Восстанавливаем прокрутку
    }

    // Закрытие модальных окон по клику на крестик или вне окна
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });

    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal.show').forEach(modal => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });

    // Функция копирования IP в буфер обмена
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Можно добавить уведомление об успешном копировании
            alert('IP-адрес скопирован: ' + text);
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    }

    // Кнопка "Наверх"
const scrollToTopBtn = document.getElementById('scrollToTop');

// Показать/скрыть кнопку при скролле
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Плавная прокрутка наверх при клике
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Исправленная анимация для правил
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .about-feature, .server-stat, .rules-category, .server-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('rules-category')) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.visibility = 'visible';
                }
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        if (el.classList.contains('rules-category')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            el.style.visibility = 'visible'; // Добавляем это
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            el.style.visibility = 'visible'; // Добавляем это
        }
        observer.observe(el);
    });
});

// Добавьте новые элементы в observer
const elements = document.querySelectorAll('.feature-card, .about-feature, .server-stat, .rules-category, .server-card, .media-card, .moderator-step, .requirement-item');

// Добавьте в ваш script.js
document.addEventListener('DOMContentLoaded', function() {
    // Принудительно показываем элементы медийки
    const mediaElements = document.querySelectorAll('.streamer-card, .collab-project');
    mediaElements.forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
    });
});

// ===== НОВЫЕ JS ФУНКЦИИ =====

// 1. Функция для динамического обновления онлайн статуса стримеров
function updateStreamerStatus() {
    const onlineStatuses = document.querySelectorAll('.online-status');
    
    // Имитация проверки онлайн статуса (в реальности здесь был бы API запрос)
    onlineStatuses.forEach(status => {
        const isOnline = Math.random() > 0.3; // 70% шанс быть онлайн
        
        if (isOnline) {
            status.innerHTML = `
                <div class="status-dot"></div>
                <span>Online</span>
            `;
            status.style.background = 'rgba(76, 175, 80, 0.2)';
            status.style.borderColor = 'rgba(76, 175, 80, 0.3)';
        } else {
            status.innerHTML = `
                <div class="status-dot" style="background: #f44336;"></div>
                <span>Offline</span>
            `;
            status.style.background = 'rgba(244, 67, 54, 0.2)';
            status.style.borderColor = 'rgba(244, 67, 54, 0.3)';
        }
    });
}

// 2. Функция для обратного отсчета до следующего стрима
function initStreamCountdown() {
    const countdownElement = document.createElement('div');
    countdownElement.className = 'stream-countdown';
    countdownElement.innerHTML = `
        <div class="countdown-container">
            <i class="fas fa-broadcast-tower"></i>
            <span class="countdown-text">Следующий стрим через: </span>
            <span class="countdown-timer">--:--:--</span>
        </div>
    `;
    
    // Добавляем в секцию медийки
    const mediaHeader = document.querySelector('.media-header');
    mediaHeader.appendChild(countdownElement);
    
    // Стили для счетчика
    const countdownStyles = `
        .stream-countdown {
            margin-top: 20px;
            padding: 15px 25px;
            background: linear-gradient(135deg, rgba(145, 70, 255, 0.2), rgba(255, 107, 107, 0.2));
            border-radius: 15px;
            border: 1px solid rgba(145, 70, 255, 0.3);
            backdrop-filter: blur(10px);
        }
        .countdown-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            color: white;
            font-weight: 600;
        }
        .countdown-container i {
            color: #9146FF;
            font-size: 1.2rem;
        }
        .countdown-timer {
            color: #ff6b6b;
            font-family: 'Courier New', monospace;
            font-size: 1.1rem;
            font-weight: 700;
        }
        @media (max-width: 768px) {
            .countdown-container {
                flex-direction: column;
                gap: 8px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = countdownStyles;
    document.head.appendChild(styleSheet);
    
    // Запускаем обратный отсчет
    startCountdown();
}

function startCountdown() {
    const countdownTimer = document.querySelector('.countdown-timer');
    if (!countdownTimer) return;
    
    // Устанавливаем время следующего стрима (например, через 3 часа)
    const nextStreamTime = new Date();
    nextStreamTime.setHours(nextStreamTime.getHours() + 3);
    nextStreamTime.setMinutes(0);
    nextStreamTime.setSeconds(0);
    
    function updateCountdown() {
        const now = new Date();
        const diff = nextStreamTime - now;
        
        if (diff <= 0) {
            countdownTimer.textContent = 'СКОРО НАЧНЕТСЯ!';
            countdownTimer.style.color = '#4caf50';
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Меняем цвет когда осталось меньше часа
        if (hours === 0) {
            countdownTimer.style.color = '#ff9800';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// 3. Функция для анимации печатающегося текста
function initTypingAnimation() {
    const elements = document.querySelectorAll('[data-typing]');
    
    elements.forEach(element => {
        const text = element.getAttribute('data-typing');
        const speed = parseInt(element.getAttribute('data-speed')) || 50;
        
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Запускаем анимацию когда элемент появляется в viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// 4. Функция для плавного появления элементов при скролле
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Добавляем задержку для элементов в grid
                if (entry.target.classList.contains('streamer-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Наблюдаем за всеми анимируемыми элементами
    const animatedElements = document.querySelectorAll('.streamer-card, .collab-project, .rules-category');
    animatedElements.forEach(el => observer.observe(el));
}

// 5. Функция для копирования IP с улучшенным UI
function initEnhancedCopyIP() {
    const ipButtons = document.querySelectorAll('[onclick*="copyToClipboard"]');
    
    ipButtons.forEach(button => {
        // Сохраняем оригинальный текст
        const originalText = button.textContent;
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Получаем IP из функции onclick
            const onclickContent = button.getAttribute('onclick');
            const ipMatch = onclickContent.match(/copyToClipboard\('([^']+)'\)/);
            
            if (ipMatch) {
                const ip = ipMatch[1];
                copyToClipboardWithFeedback(ip, button, originalText);
            }
        });
    });
}

function copyToClipboardWithFeedback(text, button, originalText) {
    navigator.clipboard.writeText(text).then(() => {
        // Сохраняем оригинальные стили
        const originalBackground = button.style.background;
        const originalColor = button.style.color;
        
        // Показываем успешное копирование
        button.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
        button.style.background = '#4caf50';
        
        // Возвращаем обратно через 2 секунды
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = originalBackground;
            button.style.color = originalColor;
        }, 2000);
        
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        button.innerHTML = '<i class="fas fa-times"></i> Ошибка!';
        button.style.background = '#f44336';
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    });
}

// 6. Функция для предзагрузки изображений
function preloadImages() {
    const images = [
        'images/streamers/xaril.jpg',
        'images/streamers/ded.jpg',
        'image/icon.png',
        'image/image.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 7. Функция для управления звуковыми эффектами
function initSoundEffects() {
    const soundButtons = document.querySelectorAll('.btn, .streamer-link, .server-card');
    
    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            playClickSound();
        });
        
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
}

function playClickSound() {
    // Создаем звуковой контекст (в реальном проекте использовались бы реальные звуковые файлы)
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio context not supported');
    }
}

function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
        console.log('Audio context not supported');
    }
}

// 8. Функция для темной/светлой темы
function initThemeToggle() {
    // Проверяем, не добавлена ли кнопка уже
    if (document.querySelector('.theme-toggle')) {
        return;
    }

    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.title = 'Переключить тему';
    themeToggle.setAttribute('aria-label', 'Переключить тему');
    
    document.body.appendChild(themeToggle);
    
    // Восстанавливаем тему из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.title = 'Переключить на темную тему';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.title = 'Переключить на темную тему';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.title = 'Переключить на светлую тему';
            localStorage.setItem('theme', 'dark');
        }
    });
}
// 9. Функция для показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Стили для уведомлений
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            color: #333;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        .notification.show {
            transform: translateX(0);
        }
        .notification-success {
            border-left: 4px solid #4caf50;
        }
        .notification-error {
            border-left: 4px solid #f44336;
        }
        .notification-info {
            border-left: 4px solid #2196f3;
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-content i {
            font-size: 1.2rem;
        }
        .notification-success i { color: #4caf50; }
        .notification-error i { color: #f44336; }
        .notification-info i { color: #2196f3; }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// 10. Функция для управления модальными окнами с анимациями
function initEnhancedModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalWithAnimation(modal.id);
            }
        });
    });
}

function closeModalWithAnimation(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            modal.style.opacity = '';
        }, 300);
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ ФУНКЦИЙ =====
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем все новые функции
    updateStreamerStatus();
    initStreamCountdown();
    initTypingAnimation();
    initScrollAnimations();
    initEnhancedCopyIP();
    preloadImages();
    initSoundEffects();
    initThemeToggle();
    initEnhancedModals();
    
    // Обновляем статус стримеров каждые 5 минут
    setInterval(updateStreamerStatus, 300000);
    
    console.log('🚀 Все JS функции успешно загружены!');
});

// ===== ОБНОВЛЕННАЯ ФУНКЦИЯ COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`IP-адрес скопирован: ${text}`, 'success');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        showNotification('Ошибка при копировании', 'error');
    });
}

// Принудительная инициализация кнопки темы
function forceThemeToggle() {
    console.log('Инициализация кнопки темы...');
    
    // Удаляем существующую кнопку если есть
    const existingToggle = document.querySelector('.theme-toggle');
    if (existingToggle) {
        existingToggle.remove();
    }
    
    // Создаем новую кнопку
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.title = 'Переключить тему';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #9c27b0, #e91e63);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(156, 39, 176, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeToggle);
    
    // Восстанавливаем тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    console.log('Кнопка темы создана!');
}

// Запускаем принудительную инициализацию
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(forceThemeToggle, 1000);
});

// ===== ДОПОЛНИТЕЛЬНЫЕ РАБОЧИЕ ФУНКЦИИ =====

// 11. Функция для прогресс-бара при скролле
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    document.body.appendChild(progressBar);
    
    // Стили для прогресс-бара
    const progressStyles = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: transparent;
            z-index: 10000;
        }
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            width: 0%;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(156, 39, 176, 0.5);
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = progressStyles;
    document.head.appendChild(styleSheet);
    
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight - winHeight;
        const scrolled = (window.scrollY / docHeight) * 100;
        
        const progressBarElement = document.querySelector('.scroll-progress-bar');
        if (progressBarElement) {
            progressBarElement.style.width = scrolled + '%';
        }
    });
}

// 12. Функция для плавного скролла к секциям с offset для фиксированного header
function initSmoothScrollWithOffset() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Обновляем активную ссылку в навигации
                updateActiveNavLink(targetId);
            }
        });
    });
}

function updateActiveNavLink(activeId) {
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[href="${activeId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// 13. Функция для ленивой загрузки изображений
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// 14. Функция для кастомного курсора
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);
    
    // Стили для кастомного курсора
    const cursorStyles = `
        .custom-cursor {
            position: fixed;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        }
        .cursor-dot {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        }
        .custom-cursor.hover {
            transform: scale(1.5);
        }
        .custom-cursor.hover .cursor-dot {
            background: var(--accent);
        }
        @media (max-width: 768px) {
            .custom-cursor {
                display: none;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = cursorStyles;
    document.head.appendChild(styleSheet);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Эффект при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .btn, .streamer-link, .server-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// 15. Функция для показа времени последнего обновления
function initLastUpdate() {
    const lastUpdateElement = document.createElement('div');
    lastUpdateElement.className = 'last-update';
    lastUpdateElement.innerHTML = `
        <i class="fas fa-sync-alt"></i>
        Обновлено: <span class="update-time">${new Date().toLocaleTimeString()}</span>
    `;
    
    // Добавляем в футер
    const footer = document.querySelector('footer .footer-content');
    if (footer) {
        footer.appendChild(lastUpdateElement);
    }
    
    // Стили для времени обновления
    const updateStyles = `
        .last-update {
            margin-top: 20px;
            padding: 10px 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            font-size: 0.9rem;
            color: var(--gray);
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .last-update i {
            color: var(--primary);
        }
        .update-time {
            color: white;
            font-weight: 600;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = updateStyles;
    document.head.appendChild(styleSheet);
    
    // Обновляем время каждую минуту
    setInterval(() => {
        const timeElement = document.querySelector('.update-time');
        if (timeElement) {
            timeElement.textContent = new Date().toLocaleTimeString();
        }
    }, 60000);
}

// 16. Функция для поиска по странице
function initSearchFunctionality() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-box">
            <input type="text" placeholder="Поиск по странице..." class="search-input">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
            <button class="search-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="search-results"></div>
    `;
    
    document.body.appendChild(searchContainer);
    
    // Стили для поиска
    const searchStyles = `
        .search-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        .search-container.open {
            transform: translateX(0);
        }
        .search-box {
            display: flex;
            align-items: center;
            background: rgba(30, 30, 60, 0.95);
            border-radius: 25px;
            padding: 8px 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        .search-input {
            background: transparent;
            border: none;
            color: white;
            padding: 8px 12px;
            width: 0;
            transition: width 0.3s ease;
            font-size: 14px;
        }
        .search-container.open .search-input {
            width: 200px;
        }
        .search-input:focus {
            outline: none;
        }
        .search-input::placeholder {
            color: var(--gray);
        }
        .search-btn, .search-close {
            background: transparent;
            border: none;
            color: var(--primary);
            cursor: pointer;
            padding: 8px;
            font-size: 1rem;
            transition: color 0.3s ease;
        }
        .search-btn:hover, .search-close:hover {
            color: var(--accent);
        }
        .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(30, 30, 60, 0.95);
            border-radius: 10px;
            margin-top: 10px;
            padding: 10px;
            display: none;
            max-height: 300px;
            overflow-y: auto;
        }
        .search-result-item {
            padding: 8px 12px;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 5px;
            transition: background 0.3s ease;
        }
        .search-result-item:hover {
            background: rgba(156, 39, 176, 0.2);
        }
        .search-result-item mark {
            background: var(--accent);
            color: white;
            padding: 2px 4px;
            border-radius: 3px;
        }
        @media (max-width: 768px) {
            .search-container {
                top: 10px;
                right: 10px;
            }
            .search-container.open .search-input {
                width: 150px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = searchStyles;
    document.head.appendChild(styleSheet);
    
    // Обработчики событий для поиска
    const searchBtn = document.querySelector('.search-btn');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    searchBtn.addEventListener('click', function() {
        searchContainer.classList.add('open');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', function() {
        searchContainer.classList.remove('open');
        searchInput.value = '';
        searchResults.style.display = 'none';
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchContent(searchTerm);
        displaySearchResults(results, searchTerm);
    });
    
    // Закрываем поиск при клике вне его
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target) && !e.target.classList.contains('search-btn')) {
            searchContainer.classList.remove('open');
            searchResults.style.display = 'none';
        }
    });
}

function searchContent(term) {
    const contentElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .streamer-description, .feature-card p');
    const results = [];
    
    contentElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(term)) {
            results.push({
                element: element,
                text: element.textContent,
                html: element.innerHTML
            });
        }
    });
    
    return results;
}

function displaySearchResults(results, term) {
    const searchResults = document.querySelector('.search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    let html = '';
    results.slice(0, 10).forEach(result => {
        const highlightedText = result.text.replace(
            new RegExp(term, 'gi'),
            match => `<mark>${match}</mark>`
        );
        
        html += `
            <div class="search-result-item" data-target="${result.element.id || ''}">
                ${highlightedText}
            </div>
        `;
    });
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
    
    // Обработчик клика по результату
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    targetElement.style.animation = 'highlight 2s ease';
                }
            }
            document.querySelector('.search-container').classList.remove('open');
            searchResults.style.display = 'none';
        });
    });
}

// 17. Функция для показа системной информации
function initSystemInfo() {
    const systemInfo = document.createElement('div');
    systemInfo.className = 'system-info';
    systemInfo.innerHTML = `
        <div class="system-info-content">
            <h4><i class="fas fa-info-circle"></i> Системная информация</h4>
            <div class="system-stats">
                <div class="system-stat">
                    <span class="stat-name">Браузер:</span>
                    <span class="stat-value" id="browser-info"></span>
                </div>
                <div class="system-stat">
                    <span class="stat-name">Разрешение:</span>
                    <span class="stat-value" id="resolution-info"></span>
                </div>
                <div class="system-stat">
                    <span class="stat-name">Время загрузки:</span>
                    <span class="stat-value" id="load-time-info"></span>
                </div>
            </div>
            <button class="system-info-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(systemInfo);
    
    // Стили для системной информации
    const systemStyles = `
        .system-info {
            position: fixed;
            bottom: 90px;
            left: 30px;
            background: rgba(30, 30, 60, 0.95);
            border-radius: 15px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            z-index: 999;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 300px;
        }
        .system-info.show {
            transform: translateY(0);
            opacity: 1;
        }
        .system-info-content h4 {
            color: var(--primary);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .system-stats {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .system-stat {
            display: flex;
            justify-content: between;
        }
        .stat-name {
            color: var(--gray);
            flex: 1;
        }
        .stat-value {
            color: white;
            font-weight: 600;
        }
        .system-info-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: transparent;
            border: none;
            color: var(--gray);
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        .system-info-close:hover {
            color: var(--accent);
            background: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
            .system-info {
                left: 20px;
                right: 20px;
                max-width: none;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = systemStyles;
    document.head.appendChild(styleSheet);
    
    // Заполняем системную информацию
    document.getElementById('browser-info').textContent = detectBrowser();
    document.getElementById('resolution-info').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    
    // Время загрузки
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        document.getElementById('load-time-info').textContent = `${loadTime}ms`;
    });
    
    // Показываем/скрываем системную информацию
    const systemToggle = document.createElement('button');
    systemToggle.className = 'system-toggle';
    systemToggle.innerHTML = '<i class="fas fa-desktop"></i>';
    systemToggle.title = 'Системная информация';
    systemToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 90px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2196f3, #03a9f4);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(33, 150, 243, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(systemToggle);
    
    systemToggle.addEventListener('click', function() {
        systemInfo.classList.toggle('show');
    });
    
    document.querySelector('.system-info-close').addEventListener('click', function() {
        systemInfo.classList.remove('show');
    });
}

function detectBrowser() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    
    return 'Unknown';
}

// 18. Функция для создания эффекта параллакса
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// 19. Функция для показа случайных фактов о сервере
function initRandomFacts() {
    const facts = [
        "🎮 Сервер работает 24/7 без перебоев",
        "⚡ Используем мощное железо для максимальной производительности",
        "🛡️ Система защиты от гриферов и читеров",
        "🎯 Регулярные обновления и новые фичи",
        "👥 Активное и дружелюбное комьюнити",
        "🎁 Еженедельные ивенты с призами",
        "🔧 Техническая поддержка 24/7",
        "🎨 Уникальные моды и плагины"
    ];
    
    const factElement = document.createElement('div');
    factElement.className = 'random-fact';
    factElement.innerHTML = `
        <div class="fact-content">
            <i class="fas fa-lightbulb"></i>
            <span class="fact-text">${facts[Math.floor(Math.random() * facts.length)]}</span>
        </div>
    `;
    
    // Добавляем в hero секцию
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.appendChild(factElement);
    }
    
    // Стили для случайных фактов
    const factStyles = `
        .random-fact {
            margin-top: 30px;
            padding: 15px 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            animation: fadeIn 1s ease;
        }
        .fact-content {
            display: flex;
            align-items: center;
            gap: 12px;
            color: white;
            font-weight: 500;
        }
        .fact-content i {
            color: var(--accent);
            font-size: 1.2rem;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = factStyles;
    document.head.appendChild(styleSheet);
    
    // Меняем факт каждые 10 секунд
    setInterval(() => {
        const factText = document.querySelector('.fact-text');
        if (factText) {
            factText.textContent = facts[Math.floor(Math.random() * facts.length)];
        }
    }, 10000);
}

// 20. Функция для управления клавиатурными сокращениями
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+K или Cmd+K для поиска
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.search-container').classList.add('open');
            document.querySelector('.search-input').focus();
        }
        
        // Escape для закрытия модальных окон и поиска
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(modal => {
                closeModalWithAnimation(modal.id);
            });
            document.querySelector('.search-container').classList.remove('open');
            document.querySelector('.system-info').classList.remove('show');
        }
        
        // ? для показа помощи
        if (e.key === '?') {
            showKeyboardHelp();
        }
    });
}

function showKeyboardHelp() {
    const helpModal = document.createElement('div');
    helpModal.className = 'modal help-modal';
    helpModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close">&times;</span>
            <h2>Клавиатурные сокращения</h2>
            <div class="shortcuts-list">
                <div class="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>K</kbd>
                    <span>Поиск по странице</span>
                </div>
                <div class="shortcut-item">
                    <kbd>ESC</kbd>
                    <span>Закрыть модальные окна</span>
                </div>
                <div class="shortcut-item">
                    <kbd>?</kbd>
                    <span>Показать эту справку</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(helpModal);
    
    // Стили для справки
    const helpStyles = `
        .shortcuts-list {
            margin: 20px 0;
        }
        .shortcut-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .shortcut-item:last-child {
            border-bottom: none;
        }
        .shortcut-item kbd {
            background: var(--primary);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9rem;
            min-width: 60px;
            text-align: center;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = helpStyles;
    document.head.appendChild(styleSheet);
    
    helpModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Обработчики для закрытия
    helpModal.querySelector('.close').addEventListener('click', function() {
        helpModal.remove();
        document.body.style.overflow = '';
    });
    
    helpModal.addEventListener('click', function(e) {
        if (e.target === helpModal) {
            helpModal.remove();
            document.body.style.overflow = '';
        }
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ НОВЫХ ФУНКЦИЙ =====
document.addEventListener('DOMContentLoaded', function() {
    // Запускаем все новые функции
    initScrollProgress();
    initSmoothScrollWithOffset();
    initLazyLoading();
    initCustomCursor();
    initLastUpdate();
    initSearchFunctionality();
    initSystemInfo();
    initParallaxEffect();
    initRandomFacts();
    initKeyboardShortcuts();
    
    console.log('🎯 Все дополнительные функции загружены!');
});

// Добавляем CSS анимацию для highlight
const highlightStyles = `
    @keyframes highlight {
        0% { background-color: transparent; }
        50% { background-color: rgba(156, 39, 176, 0.3); }
        100% { background-color: transparent; }
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = highlightStyles;
document.head.appendChild(styleSheet);

// Анимация для карточек серверов
function initServerCardsAnimation() {
    const serverCards = document.querySelectorAll('.server-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    serverCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initServerCardsAnimation();
});
// Улучшенные функции для модальных окон
function openModalEnhanced(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Добавляем класс loading для анимации загрузки
        modal.classList.add('loading');
        
        // Имитация загрузки контента
        setTimeout(() => {
            modal.classList.remove('loading');
        }, 500);
        
        // Запускаем анимации появления контента
        setTimeout(() => {
            const sections = modal.querySelectorAll('.modal-section, .modal-ip-section, .modal-stats-grid');
            sections.forEach((section, index) => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transitionDelay = `${0.1 + index * 0.1}s`;
            });
        }, 100);
    }
}

function closeModalEnhanced(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Анимация закрытия
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            modal.style.opacity = '';
        }, 300);
    }
}

// Инициализация улучшенных модальных окон
function initEnhancedModals() {
    // Обработчики для закрытия
    document.querySelectorAll('.modal-enhanced .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal-enhanced');
            closeModalEnhanced(modal.id);
        });
    });

    // Закрытие по клику вне окна
    document.querySelectorAll('.modal-enhanced').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModalEnhanced(this.id);
            }
        });
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-enhanced.show').forEach(modal => {
                closeModalEnhanced(modal.id);
            });
        }
    });

    // Анимация hover для карточек
    document.querySelectorAll('.plugin-card, .modal-stat-card, .connection-step').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Обновленная функция copyToClipboard с улучшенным UI
function copyToClipboardEnhanced(text, element = null) {
    navigator.clipboard.writeText(text).then(() => {
        // Показываем уведомление
        showNotification(`IP-адрес скопирован: ${text}`, 'success');
        
        // Анимация для элемента, если он передан
        if (element) {
            const originalHTML = element.innerHTML;
            const originalBg = element.style.background;
            
            element.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
            element.style.background = 'var(--success)';
            
            setTimeout(() => {
                element.innerHTML = originalHTML;
                element.style.background = originalBg;
            }, 2000);
        }
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        showNotification('Ошибка при копировании', 'error');
    });
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    // Создаем контейнер для уведомлений если его нет
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <div class="notification-progress"></div>
    `;
    
    container.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'info': 'info-circle',
        'warning': 'exclamation-triangle'
    };
    return icons[type] || 'info-circle';
}

// Стили для уведомлений
const notificationStyles = `
    .notification {
        background: rgba(30, 41, 59, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 15px 20px;
        min-width: 300px;
        backdrop-filter: blur(15px);
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        overflow: hidden;
        border-left: 4px solid var(--primary);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left-color: var(--success);
    }
    
    .notification-error {
        border-left-color: var(--error);
    }
    
    .notification-info {
        border-left-color: var(--primary);
    }
    
    .notification-warning {
        border-left-color: var(--warning);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
        color: white;
        font-weight: 500;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .notification-success i { color: var(--success); }
    .notification-error i { color: var(--error); }
    .notification-info i { color: var(--primary); }
    .notification-warning i { color: var(--warning); }
    
    .notification-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: var(--primary);
        width: 100%;
        transform: scaleX(1);
        transform-origin: left;
        animation: progress 5s linear forwards;
    }
    
    .notification-success .notification-progress {
        background: var(--success);
    }
    
    .notification-error .notification-progress {
        background: var(--error);
    }
    
    .notification-warning .notification-progress {
        background: var(--warning);
    }
    
    @keyframes progress {
        to {
            transform: scaleX(0);
        }
    }
`;

// Добавляем стили для уведомлений
if (!document.querySelector('#notification-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedModals();
    
    // Обновляем обработчики для кнопок открытия модальных окон
    document.querySelectorAll('[onclick*="openModal"]').forEach(btn => {
        const originalOnClick = btn.getAttribute('onclick');
        if (originalOnClick.includes('openModal')) {
            const modalId = originalOnClick.match(/openModal\('([^']+)'\)/)[1];
            btn.onclick = () => openModalEnhanced(modalId);
        }
    });
    
    // Обновляем обработчики для кнопок закрытия
    document.querySelectorAll('[onclick*="closeModal"]').forEach(btn => {
        const originalOnClick = btn.getAttribute('onclick');
        if (originalOnClick.includes('closeModal')) {
            const modalId = originalOnClick.match(/closeModal\('([^']+)'\)/)[1];
            btn.onclick = () => closeModalEnhanced(modalId);
        }
    });
    
    // Обновляем обработчики для копирования IP
    document.querySelectorAll('[onclick*="copyToClipboard"]').forEach(btn => {
        const originalOnClick = btn.getAttribute('onclick');
        if (originalOnClick.includes('copyToClipboard')) {
            const ipMatch = originalOnClick.match(/copyToClipboard\('([^']+)'\)/);
            if (ipMatch) {
                const ip = ipMatch[1];
                btn.onclick = () => copyToClipboardEnhanced(ip, btn);
            }
        }
    });
});

// Дополнительные улучшения для UX
function enhanceModalUX() {
    // Добавляем интерактивность для IP-адресов
    document.querySelectorAll('.modal-ip-display').forEach(ipDisplay => {
        ipDisplay.addEventListener('click', function() {
            const ip = this.querySelector('.ip-address').textContent;
            copyToClipboardEnhanced(ip, this);
            
            // Анимация клика
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Добавляем tooltip для иконок
    document.querySelectorAll('.plugin-icon, .stat-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'modal-tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip') || '';
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 40) + 'px';
        });
        
        icon.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.modal-tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Стили для tooltip
const tooltipStyles = `
    .modal-tooltip {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.8rem;
        z-index: 10001;
        pointer-events: none;
        transform: translateY(-10px);
        opacity: 0;
        animation: tooltipFadeIn 0.2s ease forwards;
    }
    
    @keyframes tooltipFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Добавляем стили для tooltip
if (!document.querySelector('#tooltip-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'tooltip-styles';
    styleSheet.textContent = tooltipStyles;
    document.head.appendChild(styleSheet);
}

// Запускаем улучшения UX
document.addEventListener('DOMContentLoaded', enhanceModalUX);

// Улучшенная функция копирования с визуальными эффектами
function copyToClipboardEnhanced(text, element = null) {
    navigator.clipboard.writeText(text).then(() => {
        // Показываем уведомление
        showNotification(`IP-адрес скопирован: ${text}`, 'success');
        
        // Визуальные эффекты для секции IP
        const ipSection = element ? element.closest('.modal-ip-section') : null;
        if (ipSection) {
            ipSection.classList.add('copied');
            setTimeout(() => {
                ipSection.classList.remove('copied');
            }, 1000);
        }
        
        // Анимация для элемента, если он передан
        if (element) {
            const originalHTML = element.innerHTML;
            const originalBg = element.style.background;
            
            element.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
            element.style.background = 'var(--success)';
            
            setTimeout(() => {
                element.innerHTML = originalHTML;
                element.style.background = originalBg;
            }, 2000);
        }
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        showNotification('Ошибка при копировании', 'error');
    });
}

// Обновляем обработчики для IP-секций
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.modal-ip-display').forEach(ipDisplay => {
        ipDisplay.addEventListener('click', function() {
            const ip = this.querySelector('.ip-address').textContent;
            copyToClipboardEnhanced(ip, this);
        });
    });
    
    document.querySelectorAll('.modal-ip-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ipSection = this.closest('.modal-ip-section');
            const ip = ipSection.querySelector('.ip-address').textContent;
            copyToClipboardEnhanced(ip, this);
        });
    });
});

// Анимация для карточек "О сервере"
function initAboutAnimations() {
    const aboutCards = document.querySelectorAll('.about-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    aboutCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimations();
});

// Удаляем кнопку "Наверх"
document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.scroll-to-top, .back-to-top');
    scrollButtons.forEach(button => {
        button.remove();
    });
});

let supportMessages = [];

function openSupport() {
    document.getElementById('supportModal').style.display = 'block';
    loadMessages();
}

function closeSupport() {
    document.getElementById('supportModal').style.display = 'none';
}

function sendSupportMessage() {
    const input = document.getElementById('supportInput');
    const message = input.value.trim();
    
    if (message) {
        const messageObj = {
            text: message,
            timestamp: new Date().toLocaleString(),
            user: 'Посетитель'
        };
        
        supportMessages.push(messageObj);
        saveMessages();
        displayMessages();
        input.value = '';
        
        // Здесь можно добавить отправку на сервер
        console.log('Сообщение поддержки:', messageObj);
    }
}

function saveMessages() {
    localStorage.setItem('supportMessages', JSON.stringify(supportMessages));
}

function loadMessages() {
    const saved = localStorage.getItem('supportMessages');
    if (saved) {
        supportMessages = JSON.parse(saved);
    }
    displayMessages();
}

function displayMessages() {
    const container = document.getElementById('supportMessages');
    container.innerHTML = supportMessages.map(msg => `
        <div class="message">
            <strong>${msg.user}:</strong> ${msg.text}
            <small>(${msg.timestamp})</small>
        </div>
    `).join('');
}

const TELEGRAM_BOT_TOKEN = '8260839116:AAE7dpXnemRjZIj2CUgtR4eCDBkoJCjE7JY'; // ЗАМЕНИ НА СВОЙ ТОКЕН
const TELEGRAM_CHAT_ID = '8127102211'; // ЗАМЕНИ НА СВОЙ CHAT_ID

let isSupportOpen = false;
let attachedFile = null;

function toggleSupport() {
    const modal = document.getElementById('supportModal');
    isSupportOpen = !isSupportOpen;
    
    if (isSupportOpen) {
        modal.style.display = 'block';
        loadMessages();
    } else {
        modal.style.display = 'none';
    }
}

async function sendMessage() {
    const input = document.getElementById('supportInput');
    const message = input.value.trim();
    const messagesContainer = document.getElementById('supportMessages');
    
    if (message || attachedFile) {
        // Сообщение пользователя
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `
                <strong>Вы:</strong> ${message}
                <span class="time">${new Date().toLocaleTimeString()}</span>
            `;
            messagesContainer.appendChild(userMessage);
            
            // Отправляем в Telegram
            const telegramResult = await sendToTelegram(`💬 НОВОЕ СООБЩЕНИЕ ПОДДЕРЖКИ\n\n📝 Сообщение: ${message}\n🕒 Время: ${new Date().toLocaleString()}\n🌐 Сайт: ${window.location.hostname}`);
            
            if (telegramResult && telegramResult.ok) {
                console.log('Сообщение отправлено в Telegram');
            } else {
                console.error('Ошибка отправки в Telegram');
            }
        }
        
        // Если есть файл
        if (attachedFile) {
            const fileMessage = document.createElement('div');
            fileMessage.className = 'message user-message';
            fileMessage.innerHTML = `
                <strong>Вы:</strong> 
                <div class="attached-file">
                    <img src="${URL.createObjectURL(attachedFile)}" alt="Прикрепленное изображение" class="attached-image">
                    <span>${attachedFile.name}</span>
                </div>
                <span class="time">${new Date().toLocaleTimeString()}</span>
            `;
            messagesContainer.appendChild(fileMessage);
            
            // Для файлов можно отправить уведомление
            await sendToTelegram(`📎 Пользователь прикрепил файл: ${attachedFile.name}\nРазмер: ${(attachedFile.size / 1024).toFixed(2)} KB`);
            
            attachedFile = null;
            document.getElementById('fileName').textContent = '';
        }
        
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Авто-ответ
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = `
            <strong>Поддержка:</strong> Сообщение отправлено! Мы ответим вам в Telegram в ближайшее время.
            <span class="time">${new Date().toLocaleTimeString()}</span>
        `;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Функция отправки в Telegram
async function sendToTelegram(text) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        return null;
    }
}

// Работа с файлами
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Проверяем размер файла (макс 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Файл слишком большой! Максимальный размер: 5MB');
            return;
        }
        
        // Проверяем тип файла (только изображения)
        if (!file.type.startsWith('image/')) {
            alert('Можно прикреплять только изображения!');
            return;
        }
        
        attachedFile = file;
        document.getElementById('fileName').textContent = file.name;
        
        // Уведомляем о прикреплении файла
        const messagesContainer = document.getElementById('supportMessages');
        const infoMessage = document.createElement('div');
        infoMessage.className = 'message info-message';
        infoMessage.innerHTML = `
            <strong>Система:</strong> Файл "${file.name}" прикреплен
            <span class="time">${new Date().toLocaleTimeString()}</span>
        `;
        messagesContainer.appendChild(infoMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

function saveMessage(sender, text) {
    const messages = JSON.parse(localStorage.getItem('supportMessages') || '[]');
    messages.push({
        sender: sender,
        text: text,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('supportMessages', JSON.stringify(messages));
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('supportMessages') || '[]');
    const container = document.getElementById('supportMessages');
    
    if (messages.length > 0) {
        container.innerHTML = messages.map(msg => `
            <div class="message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}">
                <strong>${msg.sender === 'user' ? 'Вы:' : 'Поддержка:'}</strong> ${msg.text}
                <span class="time">${new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
        `).join('');
    }
    
    container.scrollTop = container.scrollHeight;
}

// Закрытие при клике вне модалки
document.addEventListener('click', function(e) {
    const modal = document.getElementById('supportModal');
    const btn = document.querySelector('.support-btn');
    
    if (isSupportOpen && !modal.contains(e.target) && !btn.contains(e.target)) {
        toggleSupport();
    }
});

// Enter для отправки
document.getElementById('supportInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
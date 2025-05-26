// 默认渲染器
class DefaultRenderer {
    constructor() {
        this.currentIndex = 0;
        this.startX = 0;
        this.isDragging = false;
    }

    // 初始化渲染
    initialize(profile) {
        this.profile = profile;
        this.initializeBasicInfo();
        this.initializeAboutSection();
        this.initializeSkills();
        this.initializeInterests();
        this.initializeTimeline();
        this.initializeProjects();
        this.initializeCompetitions();
        this.initializeActivities();
        this.initializeCertificates();
    }

    // 初始化基本信息
    initializeBasicInfo() {
        document.getElementById('avatar').src = this.profile.basics.avatar;
        document.getElementById('avatar').alt = this.profile.basics.name;
        document.getElementById('name').textContent = this.profile.basics.name;
        document.getElementById('bio').textContent = this.profile.basics.bio;
        document.getElementById('email').textContent = this.profile.basics.email;
        document.getElementById('phone').textContent = this.profile.basics.phone;
        document.getElementById('location').textContent = this.profile.basics.location;
        document.getElementById('birthday').textContent = this.profile.basics.birthday;

        // 初始化社交链接
        this.initializeSocialLinks();
    }

    // 初始化社交链接
    initializeSocialLinks() {
        const socialLinks = document.getElementById('social-links');
        const socialIcons = {
            github: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.031 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>`,
            linkedin: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
            twitter: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
        };

        Object.entries(this.profile.social).forEach(([platform, url]) => {
            if (url && socialIcons[platform]) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'text-gray-300 hover:text-gray-100 transition-colors';
                link.innerHTML = socialIcons[platform];
                socialLinks.appendChild(link);
            }
        });
    }

    // 初始化About部分
    initializeAboutSection() {
        const aboutIntro = document.getElementById('about-intro');
        const text = this.profile.basics.about.intro;
        let index = 0;
        
        // 添加光标样式
        if (!document.getElementById('cursor-style')) {
            const style = document.createElement('style');
            style.id = 'cursor-style';
            style.textContent = `
                #about-intro::after {
                    content: '|';
                    color: #4ade80;
                    margin-left: 2px;
                    font-size: 1.2em;
                    font-weight: bold;
                    animation: cursor 0.5s infinite;
                    position: relative;
                    top: -1px;
                }
                
                @keyframes cursor {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                .about-char {
                    opacity: 0;
                    animation: fadeIn 0.01s forwards;
                }
                
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // 逐字显示函数
        const typeNextChar = () => {
            if (index < text.length) {
                const char = text[index];
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'about-char';
                aboutIntro.appendChild(span);
                index++;
                
                // 调整不同标点符号的停顿时间
                let delay;
                if (char === '.') {
                    delay = 800; // 句号停顿最长
                } else if (char === '—') {
                    delay = 600; // 破折号停顿次之
                } else if (/[,!?]/.test(char)) {
                    delay = 400; // 其他标点停顿适中
                } else {
                    delay = 25; // 普通字符快速打字
                }
                setTimeout(typeNextChar, delay);
            }
        };
        
        // 开始打字效果
        typeNextChar();
    }

    // 初始化标题动画
    initializeTitle() {
        const titleElement = document.getElementById('title');
        let currentTitleIndex = 0;
        let isTyping = false;
        
        async function typeText(text) {
            titleElement.innerHTML = '<span class="text-orange-500 font-bold">"</span>';
            for (let i = 0; i < text.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 100));
                titleElement.innerHTML = '<span class="text-orange-500 font-bold">"</span>' + text.substring(0, i + 1) + '<span class="cursor-blink">|</span><span class="text-orange-500 font-bold">"</span>';
            }
        }

        async function eraseText() {
            const text = titleElement.textContent;
            const textWithoutQuotes = text.substring(1, text.length - 1);
            for (let i = textWithoutQuotes.length; i > 0; i--) {
                await new Promise(resolve => setTimeout(resolve, 50));
                titleElement.innerHTML = '<span class="text-orange-500 font-bold">"</span>' + textWithoutQuotes.substring(0, i - 1) + '<span class="cursor-blink">|</span><span class="text-orange-500 font-bold">"</span>';
            }
        }

        async function updateTitle() {
            if (isTyping) return;
            isTyping = true;
            
            await eraseText();
            await typeText(this.profile.basics.titles[currentTitleIndex]);
            
            currentTitleIndex = (currentTitleIndex + 1) % this.profile.basics.titles.length;
            isTyping = false;
        }
        
        // 初始标题
        titleElement.innerHTML = '<span class="text-orange-500 font-bold">"</span><span class="cursor-blink">|</span><span class="text-orange-500 font-bold">"</span>';
        typeText(this.profile.basics.titles[0]);
        
        // 每5秒轮换标题
        setInterval(updateTitle.bind(this), 5000);
    }

    // 其他初始化方法将在后续添加...
}

// 导出渲染器
export default DefaultRenderer; 
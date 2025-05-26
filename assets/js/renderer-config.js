// 渲染器配置
export const rendererConfig = {
    // 默认渲染器
    default: {
        name: '默认风格',
        description: '现代简约的默认展示风格',
        path: './renderers/default-renderer.js'
    },
    // 未来可以添加更多渲染器
    modern: {
        name: '现代风格',
        description: '更现代的卡片式布局',
        path: './renderers/modern-renderer.js'
    },
    minimal: {
        name: '极简风格',
        description: '极简主义设计风格',
        path: './renderers/minimal-renderer.js'
    },
    creative: {
        name: '创意风格',
        description: '富有创意的动态展示风格',
        path: './renderers/creative-renderer.js'
    }
};

// 渲染器管理器
class RendererManager {
    constructor() {
        this.currentRenderer = null;
        this.profile = null;
    }

    // 初始化配置文件
    async initialize(profile) {
        this.profile = profile;
        // 默认加载默认渲染器
        await this.switchRenderer('default');
    }

    // 切换渲染器
    async switchRenderer(rendererKey) {
        if (!rendererConfig[rendererKey]) {
            throw new Error(`找不到渲染器: ${rendererKey}`);
        }

        try {
            // 动态导入渲染器
            const module = await import(rendererConfig[rendererKey].path);
            const Renderer = module.default;
            
            // 创建新的渲染器实例
            this.currentRenderer = new Renderer();
            
            // 初始化渲染
            this.currentRenderer.initialize(this.profile);
            
            // 触发渲染器切换事件
            this.onRendererSwitch(rendererKey);
        } catch (error) {
            console.error(`加载渲染器失败: ${rendererKey}`, error);
            throw error;
        }
    }

    // 渲染器切换事件
    onRendererSwitch(rendererKey) {
        // 更新UI显示当前使用的渲染器
        const rendererInfo = rendererConfig[rendererKey];
        document.getElementById('current-renderer').textContent = rendererInfo.name;
        document.getElementById('renderer-description').textContent = rendererInfo.description;
    }

    // 获取所有可用的渲染器
    getAvailableRenderers() {
        return Object.entries(rendererConfig).map(([key, config]) => ({
            key,
            ...config
        }));
    }
}

export default new RendererManager(); 
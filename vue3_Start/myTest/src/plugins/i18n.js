export default {
    install: (app, Options) => {
        // 编写逻辑
        app.config.globalProperties.$translate = (key) => {
            // 获取 options 对象的深层原理
            // 使用 key  作为索引
            return key.split(".").reduce((o, i) => {
                if (o) return o[i]
            }, Options)
        }
    }
}
module.exports = {
    // 配置资源文件输出路径
    publicPath: '/',
    devServer: {
        // 设置代理
        proxy: {
            '/': {
                target: '',
                changeOrigin: true,
                secure: false
            }
        }
    },
    // 配置资源限制输出警告
    configureWebpack: {
        performance: {
            hints: false
        }
    }
}
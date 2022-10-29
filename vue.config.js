module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        proxy: {
          '/api': {
            //目标地址
            target: 'http://localhost:8000',
            //路径重定向   key：value key 要写正则表达式 ，value 写替换的内容
            pathRewrite:{'^/api':''},
            ws: true,   // 用于支持websocket   如果不写则为真
            changeOrigin: true   //如果不写则为真  //用于控制请求头中的host值
          },
        }
      }
}
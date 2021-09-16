// 选项的步骤
/**
 * 这里对于整个构建细节步骤进行分割
 * 这里方便了拓展
 */
exports.getPromptModules = () => {
  return [
    'vueVersion', // 选择vue相关版本
    'babel', // babel相关选项
    'typescript', // ts相关选项
    'pwa', // pwa相关选项
    'router', // router 路由处理的选项
    'vuex', // vuex 的相关配置
    'cssPreprocessors', // css预处理器的配置
    'linter', // lint 相关配置
    'unit', // 单元测试选项
    'e2e' // 端到端测试选项
  ].map(file => require(`../promptModules/${file}`))
}

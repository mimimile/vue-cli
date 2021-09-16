/**
 * 二次封装了Inquirer.js
 */
module.exports = class PromptModuleAPI {
  constructor (creator) {
    this.creator = creator
  }

  // 当选择自定义的时候 加入新的功能
  injectFeature (feature) {
    this.creator.featurePrompt.choices.push(feature)
  }

  // 加入新的预设选项
  injectPrompt (prompt) {
    this.creator.injectedPrompts.push(prompt)
  }

  injectOptionForPrompt (name, option) {
    this.creator.injectedPrompts.find(f => {
      return f.name === name
    }).choices.push(option)
  }

  // 当填写结束后的回调
  onPromptComplete (cb) {
    this.creator.promptCompleteCbs.push(cb)
  }
}

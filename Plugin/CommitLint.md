# CommitLint

`commitlint` 用于检查你的提交信息是否符合约定式提交格式。

## commit 结构

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## conventional-config

- **feat:** ✨ 新功能<br>
- **fix:** 🐛 修复 bug<br>
- **docs:** 📚 仅文档相关的更改<br>
- **style:** 💎 不影响代码含义的改动（空格、格式、缺少分号等）<br>
- **refactor:** 📦 既不修复 bug 也不添加功能的代码更改<br>
- **perf:** 🚀 提升性能的代码更改<br>
- **test:** 🚨 增加缺失的测试或修正现有测试<br>
- **build:** 🛠 影响构建系统或外部依赖的更改（例如：gulp、broccoli、npm）<br>
- **ci:** ⚙️ 对 CI 配置文件和脚本的更改（例如：Travis、Circle、BrowserStack、SauceLabs）<br>
- **chore:** ♻️ 其他不修改 `src` 或测试文件的更改<br>
- **revert:** 🗑 回滚之前的提交

## 为什么使用约定式提交

- 自动化生成 CHANGELOG。<br>
- 基于提交的类型，自动决定语义化的版本变更。<br>
- 向同事、公众与其他利益关系者传达变化的性质。<br>
- 触发构建和部署流程。<br>
- 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。<br>

## 每日一题

[https://github.com/k1ngbanana/EveryDay](https://github.com/k1ngbanana/EveryDay)

## 参考

[config-conventional 源码](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/src/index.ts)<br>
[https://www.conventionalcommits.org/zh-hans/v1.0.0/](https://www.conventionalcommits.org/zh-hans/v1.0.0/)<br>

// eslintrc.cjs

module.exports = {
    root: true, // 停止向上查找父级目录中的配置文件
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        './.eslintrc-auto-import.json',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier', // eslint-config-prettier 的缩写
    ],
    parser: 'vue-eslint-parser', // 指定要使用的解析器
    // 给解析器传入一些其他的配置参数
    parserOptions: {
        ecmaVersion: 'latest', // 支持的es版本
        parser: '@typescript-eslint/parser',
        sourceType: 'module', // 模块类型，默认为script，我们设置为module
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'], // eslint-plugin- 可以省略
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // 	自动对齐上下文冒号是什么命令？
        'prettier/prettier': [
            'error',
            {
                // 一行最多 120 字符
                printWidth: 120,
                // 使用 4 个空格缩进
                tabWidth: 4,
                // 不使用 tab 缩进，而使用空格
                useTabs: false,
                // 行尾需要有分号
                semi: true,
                // 使用单引号代替双引号
                singleQuote: true,
                // 对象的 key 仅在必要时用引号
                quoteProps: 'as-needed',
                // jsx 不使用单引号，而使用双引号
                jsxSingleQuote: false,
                // 末尾使用逗号
                trailingComma: 'all',
                // 大括号内的首尾需要空格 { foo: bar }
                bracketSpacing: true,
                // jsx 标签的反尖括号需要换行
                jsxBracketSameLine: false,
                // 箭头函数，只有一个参数的时候，也需要括号
                arrowParens: 'always',
                // 每个文件格式化的范围是文件的全部内容
                rangeStart: 0,
                rangeEnd: Infinity,
                // 不需要写文件开头的 @prettier
                requirePragma: false,
                // 不需要自动在文件开头插入 @prettier
                insertPragma: false,
                // 使用默认的折行标准
                proseWrap: 'preserve',
                // 根据显示样式决定 html 要不要折行
                htmlWhitespaceSensitivity: 'css',
                // 换行符使用 lf
                endOfLine: 'auto',
            },
        ],
    },
};

module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
    ],
    rules: {
        // 行末分号（启用）
        semi: ['warn', 'always'],
        // 函数名后的空格（禁用）
        'space-before-function-paren': ['error', 'never'],
        // 尾随逗号，兼容低版本IE
        'comma-dangle': ['error', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
        // 模块引入检查
        'import/no-extraneous-dependencies': 'off',
        // 箭头函数的参数是否使用圆括号
        'arrow-parens': ['error', 'as-needed'],
        // 文件扩展名的验证
        'import/extensions': 'off',
        // 引入模块路径是否允许绝对路径
        'import/no-absolute-path': 'off',
        // 兼容允许路径别名
        'import/no-unresolved': 'off',
        // 三元表达式
        'no-mixed-operators': 'off',
        // 驼峰校验
        camelcase: 'off',
        // ++
        'no-plusplus': 'off',
        // 每行最大字符长度限制
        'max-len': ['error', {
            code: 300,
            ignoreRegExpLiterals: true
        }],
        'no-unused-vars': 'off', // 未使用定义不报错
        'import/prefer-default-export': 1, // 可以只导出一个但不使用default
        'no-redeclare': 1, // 禁止重复声明变量
        'no-shadow': 1,
        'no-underscore-dangle': 0, // 允许命名中包含下划线
        'no-use-before-define': 0, // 定义前调用
        'no-useless-escape': 0, // 正则转义字符
        'arrow-body-style': 0, // 箭头函数函数体不限制大括号
        "object-curly-newline": 0, // 花括号内换行符的一致性
        'newline-per-chained-call': 0

    },
    overrides: [
    ]
};

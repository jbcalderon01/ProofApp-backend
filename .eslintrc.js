module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'import'
    ],
    rules: {
        'max-len': ['warn', 130],
        'jsx-quotes': ['warn', 'prefer-double'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_.*?$',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'no-console': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 1,
        'no-extra-semi': 2,
        'no-unreachable': 2,
        'no-unexpected-multiline': 2,
        'valid-jsdoc': 1,
        /** Best Practices */
        'array-callback-return': 1,
        eqeqeq: 1,
        curly: [2, 'multi-line'],
        'no-empty-pattern': 1,
        'no-eval': 2,
        'no-loop-func': 1,
        'no-multi-spaces': 1,
        'no-param-reassign': 2,
        'no-redeclare': 2,
        'no-unused-labels': 1,
        'vars-on-top': 1,
        /** Variables */
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 2,
        'no-undef-init': 1,
        'no-undef': 2,
        'no-use-before-define': 1,
        /** NodeJS */
        'global-require': 0,
        'no-path-concat': 1,
        'no-process-exit': 1,
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        /** ECMAScript 6 */
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'no-class-assign': 1,
        'arrow-parens': [1, 'as-needed'],
        'no-confusing-arrow': 'off',
        'no-const-assign': 1,
        'no-dupe-class-members': 1,
        'no-this-before-super': 1,
        'no-var': 1,
        'no-useless-constructor': 1,
        'object-shorthand': 1,
        'prefer-const': 1,
        'prefer-spread': 1,
        'prefer-template': 1,
        'template-curly-spacing': [1, 'always'],
        /** Stylistic Issues */
        camelcase: 0,
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        indent: [2, 4],
        quotes: [2, 'single'],
        'keyword-spacing': 1,
        'implicit-arrow-linebreak': [2, 'beside'],
        'no-multiple-empty-lines': [
            2,
            {
                max: 1
            }
        ],
        'no-whitespace-before-property': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-unneeded-ternary': 1,
        'object-curly-spacing': [2, 'always'],
        'operator-assignment': [1, 'always'],
        'space-in-parens': [1, 'never'],
        'eol-last': [1, 'always']
    }
};

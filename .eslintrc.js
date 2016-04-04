module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'rules': {
        'no-console': 0,
        'no-use-before-define': [2, 'nofunc'],
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'max-len': [0, 150, 4],

        // react rules
        'react/jsx-indent-props': [2, 4],
        'react/jsx-no-bind': [2, {
            'ignoreRefs': true,
            'allowArrowFunctions': true,
            'allowBind': false,
        }],
        'react/jsx-closing-bracket-location': [2, {
            'nonEmpty': 'after-props',
            'selfClosing': 'tag-aligned',
        }],
    },
};

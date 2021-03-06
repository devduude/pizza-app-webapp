module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [ 'babel' ],
  parser: 'babel-eslint',
  rules: {
    'react/sort-comp': [ 'error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    'react/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' }],
    'react/jsx-filename-extension': 'error',
    'react/jsx-wrap-multilines': [ 'error', { declaration: 'parens-new-line', assignment: 'parens-new-line', return: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line' }],
    'react/jsx-key': 'error',
    'react/prop-types': 'error',
    'react/no-array-index-key': 'error',
    'react/forbid-prop-types': [ 'error', { forbid: [ 'any' ] }],
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'error',
    'react/destructuring-assignment': [ 'error', 'always', { ignoreClassFields: true }],
    camelcase: [ 'error', { allow: [ '^UNSAFE_' ] }],
    'no-underscore-dangle': 'error',
    'no-useless-escape': 'off',
    'no-useless-return': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'prefer-arrow-callback': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-param-reassign': 'error',
    'no-await-in-loop': 'off',
    'no-trailing-spaces': [
      'error',
      { ignoreComments: true },
    ],
    'no-alert': 'off',
    'no-console': 'off',
    'no-cond-assign': 'error',
    'no-continue': 'off',
    'no-unused-vars': [ 'error', { vars: 'local', args: 'none', ignoreRestSiblings: true }], // currently does not regards global vars due to possible Meteor issues
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-confusing-arrow': 'error',
    'no-else-return': [ 'error', { allowElseIf: true }],
    'new-cap': 'error',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    eqeqeq: 'off',
    'max-len': [ 'error', { code: 100, ignoreStrings: true, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreComments: true }],
    'function-paren-newline': [ 'error', 'multiline' ],
    'prefer-const': [ 'error', { destructuring: 'all' }],
    'prefer-destructuring': 'off',
    // quotes: [ "error", "double" ],
    'func-names': 'off',
    'padded-blocks': 'off',
    'arrow-parens': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    // curly: [ 'error', 'all' ],
    'no-multiple-empty-lines': [ 'error', { max: 2, maxBOF: 1 }],
    'object-curly-newline': [ 'error', { multiline: true }],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 }],
    'react/jsx-props-no-spreading': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        ArrayExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
      },
    ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
  },
};

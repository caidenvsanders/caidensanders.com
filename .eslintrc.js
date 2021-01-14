'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    jest: {
      version: '26.6.3',
    },
  },
  plugins: ['jest'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    indent: [2, 'tab'],

    /**
     * Airbnb Style Guide
     */

    // Airbnb Style Guide References
    'prefer-const': ERROR,
    'no-const-assign': ERROR,
    'no-var': ERROR,

    // Airbnb Style Guide Objects
    'no-new-object': ERROR,
    'object-shorthand': ERROR,
    'quote-props': ERROR,
    'no-prototype-builtins': ERROR,
    'prefer-object-spread': ERROR,

    // Airbnb Style Guide Arrays
    'no-array-constructor': ERROR,
    'array-callback-return': ERROR,

    // Airbnb Style Guide Destructuring
    'prefer-destructuring': ERROR,
    quotes: ERROR,
    'prefer-template': ERROR,
    'template-curly-spacing': ERROR,
    'no-eval': ERROR,
    'no-useless-escape': ERROR,

    // Airbnb Style Guide Functions
    'func-style': ERROR,
    'wrap-iife': ERROR,
    'no-loop-func': ERROR,
    'prefer-rest-params': ERROR,
    'default-param-last': ERROR,
    'no-new-func': ERROR,
    'space-before-function-paren': ERROR,
    'space-before-blocks': ERROR,
    'no-param-reassign': ERROR,
    'prefer-spread': ERROR,
    'function-paren-newline': ERROR,

    // Airbnb Style Guide Arrow Functions
    'prefer-arrow-callback': ERROR,
    'arrow-spacing': ERROR,
    'arrow-parens': ERROR,
    'arrow-body-style': OFF,
    'no-confusing-arrow': ERROR,
    'implicit-arrow-linebreak': ERROR,

    // Airbnb Style Guide Classes & Constructors
    'no-useless-constructor': ERROR,
    'no-dupe-class-members': ERROR,
    'class-methods-use-this': ERROR,

    // Airbnb Style Guide Modules
    'no-duplicate-imports': OFF,
    'import/no-mutable-exports': ERROR,
    'import/prefer-default-export': ERROR,
    'import/first': ERROR,
    'object-curly-newline': ERROR,
    'import/no-webpack-loader-syntax': ERROR,
    'import/extensions': ERROR,

    // Airbnb Style Guide Iterators and Generators
    'no-iterator': ERROR,
    'no-restricted-syntax': ERROR,
    'generator-star-spacing': ERROR,

    // Airbnb Style Guide Properties
    'dot-notation': ERROR,
    'no-restricted-properties': ERROR,

    // Airbnb Style Guide Variables
    'no-undef': ERROR,
    'prefer-const': ERROR,
    'one-var': ERROR,
    'no-multi-assign': ERROR,
    'no-plusplus': ERROR,
    'operator-linebreak': OFF,
    'no-unused-vars': ERROR,

    // Airbnb Style Guide Hoisting
    // '': '',

    // Airbnb Style Guide Comparison Operators & Equality
    eqeqeq: ERROR,
    'no-case-declarations': ERROR,
    'no-nested-ternary': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-mixed-operators': ERROR,

    // Airbnb Style Guide Blocks
    'nonblock-statement-body-position': ERROR,
    'brace-style': ERROR,
    'no-else-return': ERROR,

    // Airbnb Style Guide Control Statements
    // '': '',

    // Airbnb Style Guide Comments
    'spaced-comment': ERROR,

    // Airbnb Style Guide Whitespace
    indent: ERROR,
    'space-before-blocks': ERROR,
    'keyword-spacing': ERROR,
    'space-infix-ops': ERROR,
    'eol-last': ERROR,
    'newline-per-chained-call': ERROR,
    'no-whitespace-before-property': ERROR,
    'padded-blocks': ERROR,
    'no-multiple-empty-lines': ERROR,
    'space-in-parens': ERROR,
    'array-bracket-spacing': ERROR,
    'object-curly-spacing': ERROR,
    'max-len': ERROR,
    'block-spacing': ERROR,
    'comma-spacing': ERROR,
    'computed-property-spacing': ERROR,
    'func-call-spacing': ERROR,
    'key-spacing': ERROR,
    'no-trailing-spaces': OFF,
    'no-multiple-empty-lines': ERROR,

    // Airbnb Style Guide Commas
    'comma-style': ERROR,
    'comma-dangle': ERROR,

    // Airbnb Style Guide Semicolons
    semi: ERROR,

    // Airbnb Style Guide Type Casting & Coercion
    'no-new-wrappers': ERROR,
    radix: ERROR,

    // Airbnb Style Guide Naming Conventions
    'id-length': ERROR,
    camelcase: ERROR,
    'new-cap': ERROR,
    'no-underscore-dangle': ERROR,

    // Airbnb Style Guide Accessors
    // '': '',

    // Airbnb Style Guide Events
    // '': '',

    // Airbnb Style Guide Standard Library
    'no-restricted-globals': ERROR,

    // Airbnb Style Guide Miscellaneous
    'no-console': WARN,

    /**
     * Typescript ESLint Style Guide
     */

    '@typescript-eslint/adjacent-overload-signatures': ERROR,
    '@typescript-eslint/array-type': ERROR,
    '@typescript-eslint/await-thenable': ERROR,
    '@typescript-eslint/ban-ts-comment': ERROR,
    '@typescript-eslint/ban-tslint-comment': ERROR,
    '@typescript-eslint/ban-types': ERROR,
    '@typescript-eslint/class-literal-property-style': ERROR,
    '@typescript-eslint/consistent-indexed-object-style': ERROR,
    '@typescript-eslint/consistent-type-assertions': ERROR,
    '@typescript-eslint/consistent-type-definitions': ERROR,
    '@typescript-eslint/consistent-type-imports': ERROR,
    '@typescript-eslint/explicit-function-return-type': ERROR,
    '@typescript-eslint/explicit-member-accessibility': ERROR,
    '@typescript-eslint/explicit-module-boundary-types': ERROR,
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/member-ordering': ERROR,
    '@typescript-eslint/method-signature-style': ERROR,
    '@typescript-eslint/naming-convention': ERROR,
    '@typescript-eslint/no-base-to-string': ERROR,
    '@typescript-eslint/no-confusing-non-null-assertion': ERROR,
    '@typescript-eslint/no-confusing-void-expression': OFF,
    '@typescript-eslint/no-dynamic-delete': ERROR,
    '@typescript-eslint/no-empty-interface': ERROR,
    '@typescript-eslint/no-explicit-any': ERROR,
    '@typescript-eslint/no-extra-non-null-assertion': ERROR,
    '@typescript-eslint/no-extraneous-class': ERROR,
    '@typescript-eslint/no-floating-promises': ERROR,
    '@typescript-eslint/no-for-in-array': ERROR,
    '@typescript-eslint/no-implicit-any-catch': ERROR,
    '@typescript-eslint/no-inferrable-types': ERROR,
    '@typescript-eslint/no-invalid-void-type': ERROR,
    '@typescript-eslint/no-misused-new': ERROR,
    '@typescript-eslint/no-misused-promises': ERROR,
    '@typescript-eslint/no-namespace': ERROR,
    '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR,
    '@typescript-eslint/no-parameter-properties': ERROR,
    '@typescript-eslint/no-require-imports': ERROR,
    '@typescript-eslint/no-this-alias': ERROR,
    '@typescript-eslint/no-type-alias': ERROR,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
    '@typescript-eslint/no-unnecessary-condition': OFF,
    '@typescript-eslint/no-unnecessary-qualifier': ERROR,
    '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
    '@typescript-eslint/no-unnecessary-type-constraint': ERROR,
    '@typescript-eslint/no-unsafe-assignment': ERROR,
    '@typescript-eslint/no-unsafe-call': ERROR,
    '@typescript-eslint/no-unsafe-member-access': ERROR,
    '@typescript-eslint/no-unsafe-return': OFF,
    '@typescript-eslint/no-unused-expressions': ERROR,
    '@typescript-eslint/no-var-requires': ERROR,
    '@typescript-eslint/prefer-as-const': ERROR,
    '@typescript-eslint/prefer-enum-initializers': ERROR,
    '@typescript-eslint/prefer-for-of': ERROR,
    '@typescript-eslint/prefer-function-type': ERROR,
    '@typescript-eslint/prefer-includes': ERROR,
    '@typescript-eslint/prefer-literal-enum-member': ERROR,
    '@typescript-eslint/prefer-namespace-keyword': ERROR,
    '@typescript-eslint/prefer-nullish-coalescing': ERROR,
    '@typescript-eslint/prefer-optional-chain': ERROR,
    '@typescript-eslint/prefer-readonly': ERROR,
    '@typescript-eslint/prefer-readonly-parameter-types': OFF,
    '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
    '@typescript-eslint/prefer-regexp-exec': ERROR,
    '@typescript-eslint/prefer-string-starts-ends-with': ERROR,
    '@typescript-eslint/prefer-ts-expect-error': ERROR,
    '@typescript-eslint/promise-function-async': ERROR,
    '@typescript-eslint/require-array-sort-compare': ERROR,
    '@typescript-eslint/restrict-plus-operands': ERROR,
    '@typescript-eslint/restrict-template-expressions': ERROR,
    '@typescript-eslint/strict-boolean-expressions': OFF,
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    '@typescript-eslint/triple-slash-reference': ERROR,
    '@typescript-eslint/type-annotation-spacing': ERROR,
    '@typescript-eslint/typedef': ERROR,
    '@typescript-eslint/unbound-method': ERROR,
    '@typescript-eslint/unified-signatures': ERROR,

    /**
     * React
     */
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,

    /**
     * Jest Style Guide
     */

    'jest/no-disabled-tests': ERROR,
    'jest/no-focused-tests': ERROR,
    'jest/no-identical-title': ERROR,
    'jest/no-identical-title': ERROR,
    'jest/prefer-to-have-length': ERROR,
    'jest/valid-expect': ERROR,
  },
};

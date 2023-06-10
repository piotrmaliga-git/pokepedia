module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'hotfix', 'ref', 'style', 'conf', 'docs', 'test']],
  },
};

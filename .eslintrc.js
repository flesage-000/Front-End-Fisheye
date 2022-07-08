module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node":true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest"
  },
  "rules": {
      "no-console": "off",
      "no-invalid-regexp": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-undef":"off"
  }
}
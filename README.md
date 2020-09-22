# bpk-scope-migration

[![npm version](https://badge.fury.io/js/%40skyscanner%2Fbpk-scope-migration.svg)](https://badge.fury.io/js/%40skyscanner%2Fbpk-scope-migration)

Renames dependencies related to [Backpack](https://backpack.github.io) to use scoped packages. Works on `dependencies`, `devDependencies` and `peerDependencies`.

## Example

### Before

```json
{
    "name": "my-package",
    "version": "1.0.0",
    "dependencies": {
        "bpk-component-button": "^1.2.3",
        "bpk-component-switch": "4.5.6",
        "lodash": "^7.8.9"
    }
}
```

### After

```json
{
    "name": "my-package",
    "version": "1.0.0",
    "dependencies": {
        "@skyscanner/bpk-component-button": "^1.2.3",
        "@skyscanner/bpk-component-switch": "4.5.6",
        "lodash": "^7.8.9"
    }
}
```


## Usage

In the folder where your `package.json` is stored:

```bash
npx @skyscanner/bpk-scope-migration
```
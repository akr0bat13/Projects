# eslint-plugin-fsd-plugin

plugon for base checking FSD structure

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-fsd-plugin`:

```sh
npm install eslint-plugin-fsd-plugin --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-fsd-plugin` and add `fsd-plugin` to the `plugins` key:

```js
import { defineConfig } from "eslint/config";
import fsd-plugin from "eslint-plugin-fsd-plugin";

export default defineConfig([
    {
        plugins: {
            fsd-plugin
        }
    }
]);
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



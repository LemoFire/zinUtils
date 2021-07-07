# znUtils

## Quickstart

```
npm install zinutils
```

## Vue global binding way

### Vue
main.js
```
// Init window.znConfig
import "zinutils/init/vite";        <- vite use this
import "zinutils/init/webpack";     <- vue/cli use this

// Bind to global
import { vue3 as zinUtils } from "zinutils/init";     // or import vue2 (no test)
App.use(zinUtils)
```
*You can also introduce it in a non-vue environment（see On-demand introduction）*

### Usage

```
this.$dev.log("Global binding")
```
## On-demand introduction
### Init window.znConfig in main.js (Optional)
```
import "zinutils/init/vite";         <- vite use this
import "zinutils/init/webpack";      <- vue/cli use this
import "zinutils/init";              <- others use this (window.znConfig.isDevelopment will always be set to true)
```

### Usage
```
import { [MODUELs] } from "zintuils"

[MODUELs].Function()
```

## Module

### mobile
##### Import
```
import { mobile } from "zintuils"
```
###### main.js import
When imported in main.js, disableZoom function will be automatically loaded
```
import "zintuils/mobile";
```

##### Function

| Function name | Description                                  | Parameter |            Description            |  type  |
| ------------- | -------------------------------------------- | :-------: | :-------------------------------: | :----: |
| disableZoom   | Disable mobile zooming via meta tag          |     -     |                 -                 | String |
| inputRec      | Fix the rebound error of input box under IOS |  inputEl  |           input element           | String |
| inputsRec     | Fix the rebound error of input box under IOS |  wrapEl   | Parent element of multiple inputs | String |


### dev
##### Import
```
import "zinutils/init/vite";  // Load it in main.js
// or use `import "zinutils/init/webpack"`;

import { dev } from "zintuils"
```
##### Function
| Function name | Description                                                | Parameter | Description | type  |
| ------------- | ---------------------------------------------------------- | :-------: | :---------: | :---: |
| log           | console.log() // log only in the development environment   |     -     |      -      |   -   |
| logError      | console.error() // log only in the development environment |     -     |      -      |   -   |
| logWarn       | console.warn() // log only in the development environment  |     -     |      -      |   -   |


### checker
*README undone*

### data
*README undone*

### element
*README undone*

### common
*README undone*
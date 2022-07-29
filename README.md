# zinUtils

Moved to [https://github.com/LemoFire/ntang](https://github.com/LemoFire/ntang)

## Quickstart

### Installation

```
npm install zinutils
```

```javascript
import { [MODUELs] } from "zinutils"

[MODUELs].Function()
```

### Initial configuration

_(Optional, but not entirely optional, still initialized XD)_

```javascript
// main.js

// For vite
import "zinutils/init/vite";
// For vue/cli
import "zinutils/init/webpack";
// Other (or not import, window.znConf.isDevelopment will default to true)
import "zinutils/init";
```

_window.znConf_
| Variable name | Description | type | Default |
| ------------- | ------------------ | :-----: | :-------: |
| isDevelopment | Lazy to explain :D | Boolean | true |
| isIOS | Lazy to explain :D | Boolean | undefined |
| isIPad | Lazy to explain :D | Boolean | undefined |
| isAndroid | Lazy to explain :D | Boolean | undefined |
| isPC | Lazy to explain :D | Boolean | undefined |

### Global binding for vue

```javascript
// main.js

// Vue 3
import { vue3 as zinUtils } from "zinutils/init";
// Vue 2
import { vue3 as zinUtils } from "zinutils/init";

App.use(zinUtils);
```

#### Usage

```javascript
this.$dev.log("Good day");
```

## Module

Contents

- [common](#common)
- [check](#check)
- [time](#time)
- [filter](#filter)
- [encrypt](#encrypt)
- [auth](#auth)
- [mobile](#mobile)
- [dev](#dev)

### common

```javascript
import { common } from "zinutils";
```

##### Function

| Function name | Description                                     |  Parameter  |    Description     |  type  |   return    |
| ------------- | ----------------------------------------------- | :---------: | :----------------: | :----: | :---------: |
| debounce      | [see here](https://www.baidu.com/s?wd=debounce) | func, delay | Lazy to explain :D |   -    |    Guess    |
| getParam      | Get a url parameter                             |  paramName  | Lazy to explain :D | String | String/null |

### check

```javascript
import { check } from "zinutils";
```

##### Function

| Function name | Description                 |             Parameter             |   Description    |        type         | return  |
| ------------- | --------------------------- | :-------------------------------: | :--------------: | :-----------------: | :-----: |
| isNull        | Is null                     |              content              |        -         | Array/Object/String | Boolean |
| hasNull       | Obj/arr's sub item has null | testBuffer, useGenerator = false  | Look source code |    Array/Object     | Boolean |
| isObject      | isObject                    | checkBuffer, includeArray = false |        -         |         Any         | Boolean |
| isPhone       | Is phone number             |               phone               |        -         |          -          | Boolean |

### time

```javascript
import { time } from "zinutils";
```

##### Function

| Function name | Description                                 | Parameter | Description | type | return |
| ------------- | ------------------------------------------- | :-------: | :---------: | :--: | :----: |
| sleep         | Like python's time.sleep, need to use await |    ms     |      -      |  -   |  Void  |

### filter

```javascript
import { filter } from "zinutils";
```

##### Function

| Function name | Description                                          |    Parameter    |        Description        |  type  | return |
| ------------- | ---------------------------------------------------- | :-------------: | :-----------------------: | :----: | :----: |
| limitLen      | Length limit                                         | content, length | Content and target length | String | String |
| parseNum      | Remove other characters except numbers in the string |     content     |             -             | String | String |

### encrypt

```javascript
import { encrypt } from "zinutils";
```

#### encrypt.md5 (See [md5.js](http://pajhome.org.uk/crypt/md5) for more info.)

##### Function

| Function name | Description | Parameter |    Description     | type | return |
| ------------- | ----------- | :-------: | :----------------: | :--: | :----: |
| hex           | hex_md5     |     s     | Lazy to explain :D |  -   | String |
| base64        | b64_md5     |     s     | Lazy to explain :D |  -   | String |
| any           | any_md5     |    s,e    | Lazy to explain :D |  -   | String |

#### encrypt.hmacmd5 (See [md5.js](http://pajhome.org.uk/crypt/md5) for more info.)

##### Function

| Function name | Description  | Parameter |    Description     | type | return |
| ------------- | ------------ | :-------: | :----------------: | :--: | :----: |
| hex           | hex_hmac_md5 |    k,d    | Lazy to explain :D |  -   | String |
| base64        | b64_hmac_md5 |    k,d    | Lazy to explain :D |  -   | String |
| any           | any_hmac_md5 |   k,d,e   | Lazy to explain :D |  -   | String |

### auth

```javascript
import { auth } from "zinutils";
```

##### Function

| Function name  | Description                          | Parameter | Description | type | return |
| -------------- | ------------------------------------ | :-------: | :---------: | :--: | :----: |
| getFingerPrint | Get browser fingerprint (not unique) |     -     |      -      |  -   | String |

### mobile

```javascript
import { mobile } from "zinutils";

// You can also import it directly into main.js, It will automatically execute some functions (Now only disableZoom)
import "zinutils/mobile";
```

#### Function

| Function name           | Description                                  | Parameter |            Description            |  type  | return |
| ----------------------- | -------------------------------------------- | :-------: | :-------------------------------: | :----: | :----: |
| disableZoom             | Disable mobile zooming via meta tag          |     -     |                 -                 |   -    |  Void  |
| disableElasticScrolling | Disable IOS elastic scrolling                |     -     |                 -                 |   -    |  Void  |
| enableElasticScrolling  | enable IOS elastic scrolling                 |     -     |                 -                 |   -    |  Void  |
| inputRec                | Fix the rebound error of input box under IOS |  inputEl  |           input element           | String |  Void  |
| inputsRec               | Fix the rebound error of input box under IOS |  wrapEl   | Parent element of multiple inputs | String |  Void  |

### dev

_Need to [initialize configuration](#initial-configuration)_

```javascript
import { dev } from "zinutils";
```

##### Function

| Function name | Description                             | Parameter | Description | type | return |
| ------------- | --------------------------------------- | :-------: | :---------: | :--: | :----: |
| log           | Output log in development environment   |     -     |      -      |  -   |   -    |
| logError      | Output error in development environment |     -     |      -      |  -   |   -    |
| logWarn       | Output warn in development environment  |     -     |      -      |  -   |   -    |

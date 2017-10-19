# learning-three.js-by-oreilly
[初めてのThree.js 第2版](oreilly-japan/learning-three-js-2e-ja-support)をES2015+webpackを利用して書き直す。

# import
`npm install`したパッケージは

```javascript
import THREE from 'three';
```

ではなく、以下のように記述すると利用できる。


```javascript
import * as THREE from 'three';
```
![build](https://github.com/bravemaster619/safe-number/workflows/build/badge.svg)
![dependabot](https://flat.badgen.net/dependabot/bravemaster619/safe-number?icon=dependabot)
![download](https://img.shields.io/npm/dt/@bravemaster619/safe-number)
# safe-number
Safe number to use in eCommerce solutions

## Usage

```javascript
import { safeNumber as $n } from "@bravemaster619/safe-number";

// convert input value to number
$n("6.19") // 6.19

// for default, does not allow negative value
$n(-6.19) // 0

// return defaultValue if input is invalid
$n(-6.19, 12.17) // 12.17
$n(1/0, 0) // 0
$n("string", 0) // 0

// allow negative value
$n(-6.19, 12,17, true) // -6.19


```

## Parameters

```javascript
export declare const safeNumber: (num: any, defaultValue?: number, allowNegative?: boolean) => number;
```

| No | Parameter Name | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| 1 | num | any | N/A |Input value |
| 2 | defaultValue | Number | 0 | Fall back value if `num` is not a number or a negative value |
| 3| allowNegative | Boolean | false | True if allow negative values, false otherwise |
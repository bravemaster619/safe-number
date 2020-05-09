# safe-number
Safe number to use in eCommerce solutions

## Install

```javascript
npm i -S @bravemaster619/safe-number
```

## Usage

```javascript
import { safeNumber as $n } from "@bravemaster619/safe-number";

$n(-6.19) // 0
$n(-6.19, 12.17) // 12.17
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
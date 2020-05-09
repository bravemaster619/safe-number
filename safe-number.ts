export const safeNumber = (num: any, defaultValue: number = 0, allowNegative: boolean = false): number => {
  num = parseFloat(num);
  if (isNaN(num) || !isFinite(num)) {
    return defaultValue;
  }
  if (num < 0 && !allowNegative) {
    return defaultValue;
  }
  return num;
};
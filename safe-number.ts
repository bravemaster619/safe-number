export const safeNumber = (num: any, defaultValue: number = 0, allowNegative: boolean = false) => {
  num = parseFloat(num);
  if (isNaN(num) || !isFinite) {
    return defaultValue;
  }
  if (num < 0 && !allowNegative) {
    return defaultValue;
  }
  return num;
};
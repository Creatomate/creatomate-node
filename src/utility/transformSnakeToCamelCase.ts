export function transformSnakeToCamelCase(value: string): string {
  let newValue = '';

  for (let i = 0; i < value.length; i++) {
    if (value[i] === '_') {
      if (value[i + 1]) {
        newValue += value[i + 1].toUpperCase();
        i++;
      }
    } else {
      newValue += value[i];
    }
  }

  return newValue;
}

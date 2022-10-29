export function transformCamelToSnakeCase(value: string): string {
  let newValue = '';

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      newValue += '_' + value[i].toLowerCase();
    } else {
      newValue += value[i];
    }
  }

  return newValue;
}

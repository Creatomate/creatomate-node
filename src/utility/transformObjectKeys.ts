export function transformObjectKeys<T extends Record<string, any>>(
  keyTransformer: (key: string) => string,
  object: Record<string, any>,
): T {
  if (object && typeof object === 'object') {
    const transformedObject: any = {};

    for (const key of Object.keys(object)) {
      const transformedKey = keyTransformer(key);
      transformedObject[transformedKey] = object[key];
    }

    return transformedObject;
  } else {
    return {} as T;
  }
}

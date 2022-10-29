import { Keyframe } from '../properties';

export function expandProperties(properties: Record<string, any>): Record<string, any> {
  const expandedProperties: Record<string, any> = {};

  for (const key of Object.keys(properties)) {
    const value = properties[key];

    // Detect whether the value is an array a keyframes or not
    if (Array.isArray(value) && value[0] instanceof Keyframe) {
      for (const keyframe of value) {
        // Expand each keyframe
        if (keyframe instanceof Keyframe) {
          // Expand combined property to separate values
          if (typeof keyframe.value?.toMap === 'function') {
            const nestedProperties = keyframe.value.toMap();
            for (const nestedKey of Object.keys(nestedProperties)) {
              if (!Array.isArray(expandedProperties[nestedKey])) {
                expandedProperties[nestedKey] = [];
              }

              expandedProperties[nestedKey].push({
                time: keyframe.time,
                easing: keyframe.easing,
                value: nestedProperties[nestedKey],
              });
            }
          } else {
            // Singular property
            if (!Array.isArray(expandedProperties[key])) {
              expandedProperties[key] = [];
            }

            expandedProperties[key].push({
              time: keyframe.time,
              easing: keyframe.easing,
              value: keyframe.value,
            });
          }
        }
      }
    } else if (typeof value?.toMap === 'function') {
      // Expand combined property to separate values
      const nestedProperties = value.toMap();
      for (const nestedKey of Object.keys(nestedProperties)) {
        expandedProperties[nestedKey] = nestedProperties[nestedKey];
      }
    } else {
      expandedProperties[key] = properties[key];
    }
  }

  return expandedProperties;
}

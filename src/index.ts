export function get(obj: any, prop: string) {
  prop = prop.toLowerCase();

  const key = Object.keys(obj).find(name => prop === name.toLowerCase());

  return key && obj[key];
}

export function multiGet(obj: any, props: string[]) {
  props = props.map(p => p.toLowerCase());

  const keys = Object.keys(obj);
  const result = [];

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    const index = props.indexOf(key.toLowerCase());
    if (index < 0) {
      continue;
    }

    result[index] = obj[key];
    delete props[index];
  }

  return result;
}

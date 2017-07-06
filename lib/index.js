const get = (obj, prop) => {
  prop = prop.toLowerCase();

  const key = Object.keys(obj).find(name => prop === name.toLowerCase());

  return obj[key];
};

exports.get = get;

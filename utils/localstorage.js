/**
 * 获取数据
 */
export const getItem = (key, default_value = null) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return default_value;
  }
  try {
    return JSON.parse(data); // undefined和null会报错
  } catch (err) {
    return data;
  }
};
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
export const removeItem = (value) => {
  localStorage.removeItem(value);
};

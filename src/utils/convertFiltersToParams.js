export const convertFiltersToParams = filters => {
  const params = {};

  for (let [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      value.forEach(filter => {
        if (filter === 'automatic') {
          params['transmission'] = filter;
        } else {
          params[filter] = true;
        }
      });
    } else if (value) {
      params[key] = value;
    }
  }

  return params;
};

const resetObj = (obj: any) => {
  for (const key in obj) {
    if (key.indexOf('List') >= 0 || key.indexOf('Items') >= 0) {
      obj[key] = [];
    } else if (key === 'dynamically') {
      obj[key] = false;
    } else {
      obj[key] = '';
    }
  }
};

export default { resetObj };

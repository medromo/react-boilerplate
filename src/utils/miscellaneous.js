const focusElement = (id, subTag, index = 0) => {
  let element = document.getElementById(id);
  if (subTag) element = element.getElementsByTagName(subTag);
  const rect = element[index].getBoundingClientRect();
  element[index].focus();
};

const scrollToBottom = element => {
  element?.scrollTo(0, element.scrollHeight);
};

const isValidObj = obj => {
  try {
    if (!obj) return false;
    if (typeof obj != "object" || Array.isArray(obj)) return false;
    return Object.keys(obj).length > 0;
  } catch (error) {
    return false;
  }
};

const isAnyObj = obj => {
  try {
    if (!obj) return false;
    if (typeof obj != "object" || Array.isArray(obj)) return false;
    return true;
  } catch (error) {
    return false;
  }
};

const areValidObj = objects => {
  return objects.every(obj => isValidObj(obj));
};

export { focusElement, scrollToBottom, isValidObj, areValidObj, isAnyObj };

const firstLetterUpper = word => {
  if (typeof word != "string")
    return console.error("Value passed to firstLetterUpper() is not a string");
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const formatPhone = (phone, separator = "-") => {
  const phoneString = phone.toString();
  const pattern = /(\d{3})(\d{3})(\d{2})(\d{2})/;
  const match = phoneString.match(pattern);
  return match.splice(1).join(separator);
};

const firstLetterUpperAll = sentence => {
  if (typeof sentence != "string")
    return console.error("Value passed to firstLetterUpper() is not a string");
  const pattern = /[^\s]+/g;
  const match = sentence.match(pattern);
  const capitalizedSentence = match
    .map(word => firstLetterUpper(word))
    .join(" ");
  return capitalizedSentence;
};

export { firstLetterUpper, formatPhone, firstLetterUpperAll };

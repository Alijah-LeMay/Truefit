// Capitalize first letter in every word
export const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

// Cuts a (text) at a given max length (limit) and adds...
export const elipsesText = (text, limit) => {
  if (text.length > limit) {
    const cut = text.slice(0, limit);
    const elips = cut.concat('...');
    return elips;
  } else {
    return text;
  }
};

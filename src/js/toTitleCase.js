export default function kabbasToTitleCase(str) {
    // Split the string into individual words using the dash ("-") as a separator
    const words = str.split('-');
  
    // Capitalize the first letter of each word
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the words back together to form the title case string
    const titleCaseStr = titleCaseWords.join(' ');
  
    return titleCaseStr;
  }
  
  // Example usage:
  const kabbasString = 'this-is-an-example';
  const titleCaseString = kabbasToTitleCase(kabbasString);
  console.log(titleCaseString); // Output: 'This Is An Example'
  
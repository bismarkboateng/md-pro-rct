export const countWords = (text) => {
  const words = text.split(/\s+/);
  const nonEmptyWords = words.filter(word => word !== '');
  return nonEmptyWords.length;
}

export const calculateReadingDuration = (wordCount, wordsPerMinute)  => {
    if (wordCount <= 0 || wordsPerMinute <= 0) {
      return 0; 
    }  
    const readingDurationMinutes = Math.ceil(wordCount / wordsPerMinute);
    
    return readingDurationMinutes;
}
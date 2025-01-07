export const getImageUrl = (path: string) => {
  try {
    return new URL(`../assets/images/${path}`, import.meta.url).href;
  } catch (error) {
    console.error('Error loading image:', error);
    return '';
  }
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};
function getImageURL(name) {
return new URL(`../assets/assets/books/${name}`, import.meta.url);
    
} 
export {getImageURL}

const convertImage = (url: string, category: string): string => {
    const baseUrlImage = "https://image.tmdb.org/t/p/"
    if (url != null) {
        return `${baseUrlImage}${category}${url}`;
    }
    return 'https://i.stack.imgur.com/GNhxO.png';
}
export { convertImage }
function getStarArray(rating = 0) {
    const r = Math.max(0, Math.min(5, Math.round(rating)));
    return Array.from({ length: 5 }, (_, i) => i < r);
}
export { getStarArray };
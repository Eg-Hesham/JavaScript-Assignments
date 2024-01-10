function createSelectBox(startYear, endYear) {
  document.write(`<select name="Year">`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">`);
    document.write(`${i}`);
    document.write(`</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
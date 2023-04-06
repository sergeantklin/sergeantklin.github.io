/**
 * Fill a dom element with image tiles grouped by columns
 * 1. We only know the URLs of the images and columns count
 * 2. Images should be visible to the user as soon as possible.
 * 3. The height of the columns should not differ much
 * 4. Column widths are equal
*/


const URLS = [
  'assets/img/ava3.png',
  'assets/img/background.png',
  'assets/img/bootstrap-logo.png',
  'assets/img/fpark.jpg',
  'assets/img/gazprom.png',
  'assets/img/seregantklin.jpg',
  'assets/img/background.png',
  'assets/img/background.png',
  'assets/img/seregantklin.jpg',
  'assets/img/background.png',
  'assets/img/background.png',
];
(() => {

  const COLUMNS_COUNT = 3;

  let columnHeights = {};
  const images = {};
  const domColumns = {};
  const domColumnsContainer = document.createElement('div');
  domColumnsContainer.style.display = 'flex';
  document.body.appendChild(domColumnsContainer);

  const loadImageAndCalculateHeight = async (url) => {
    let image = new Image();
    await new Promise(r => image.onload = r, image.src = url);
    const { width, height } = image;
    images[url] = image;
    image.style.width = '100%';
    return height / width;
  };

  const pushImageToColumn = (height, url) => {
    let minHeight = Infinity;
    let minHeightColIdx = -1;
    for (let idx = 0; idx < COLUMNS_COUNT; idx++) {
      const colHeight = columnHeights[idx] || 0;
      if (colHeight < minHeight) {
        minHeight = colHeight;
        minHeightColIdx = idx;
      };
    };
    let domColumn = domColumns[minHeightColIdx];
    if (!domColumn) {
      domColumn = domColumns[minHeightColIdx] = document.createElement('div');
      domColumn.style.width = `${100 / COLUMNS_COUNT}%`;
      domColumnsContainer.appendChild(domColumn);
    }
    columnHeights[minHeightColIdx] = minHeight + height;
    domColumn.appendChild(images[url]);
  };

  URLS.forEach(async (url) => {
    const imgHeight = await loadImageAndCalculateHeight(url);
    pushImageToColumn(imgHeight, url);
  });

})();
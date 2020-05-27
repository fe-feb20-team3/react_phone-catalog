export const techInfo = (goodInfo: Good, goodDetail: GoodDetail, param: string, order: string) => {
  let value = '';

  if (order === 'info') {
    switch (param) {
      case 'Screen':
        value = goodInfo.screen;
        break;

      case 'RAM':
        value = goodInfo.ram;
        break;

      case 'Built in memory':
        value = goodInfo.capacity;
    }
  }

  if (order === 'detail') {
    switch (param) {
      case 'Resolution':
        value = goodDetail.display.screenResolution;
        break;

      case 'Processor':
        value = goodDetail.hardware.cpu;
        break;

      case 'Camera':
        value = goodDetail.camera.primary;
        break;

      case 'Zoom':
        value = goodDetail.camera.zoom;
        break;

      case 'Cell':
        value = goodDetail.connectivity.cell;
        break;
    }
  }

  return value ? value : 'No info'
}

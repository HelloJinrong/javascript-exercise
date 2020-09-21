export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let res = 0;
  collection.forEach(e => {
    if (/^粤A/.test(e)) {
      res += 1;
    }
  });
  return res;
}

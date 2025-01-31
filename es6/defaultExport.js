// 每個檔案只能有一個 default export(預設匯出)
export default {
  myName: '卡斯柏',
  fn() {
    console.log('defaultExport.js');
  },
};
// 具名匯出: 每個檔案能有多個具名匯出
export const myName = '卡斯柏';
export function fn() {
  console.log('defaultExport.js');
}

/*
 * @Description: 
 * @Author: KarChinKong
 * @Date: 2020-12-28 23:34:40
 * @LastEditors: KarChinKong
 * @LastEditTime: 2020-12-28 23:35:14
 */
const path = require('path');
const Promise = require('bluebird');
const childProcessExec = Promise.promisify(require('child_process').exec);
// 服务器地址
const SERVER_PATH = 'root@148.70.230.51:/usr/local/web';
// 编译输出目录
const DIST_PATH = path.join(__dirname, 'dist');

console.time('sync time');

childProcessExec(`rsync -Rr . ${SERVER_PATH}`, { cwd: DIST_PATH }).then(() => {
  console.info('sync cdn success~');
  console.timeEnd('sync time');
});
var fs = require('fs');
var sysPath = require('path');
var extensions = require('./lib/extensions.js');

var binaryPath = extensions.getBinaryPath();

if (fs.existsSync(binaryPath)) {
    module.exports = require('./lib/index.js');
} else {
    var url = extensions.getBinaryUrl().replace('https://npm.taobao.org/mirrors', 'http://cdn.npm.taobao.org/dist');

    console.log('\033[0;31m--> LibSass 的二进制文件('
        + binaryPath
        + ')缺失，请执行下面3条命令下载对应版本的二进制文件：（有可能引发此错误的原因是 Node 版本变更）\033[0m ');
    console.log('  mkdir -p ' + sysPath.dirname(binaryPath));
    console.log('  cd ' + sysPath.dirname(binaryPath));
    console.log('  curl -o ' + sysPath.basename(binaryPath) + ' ' + url);
    console.log('\033[0;31m--> MacOS 、Unix/Linux 请根据权限使用 sudo \033[0m ');
    process.exit(1);
}

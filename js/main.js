console.log("载入成功");

/*
	设置需要引入的js文件
*/
require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3", //遵从AMD规范
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"shoppingList":"shoppingList",

		"parabola": "parabola"
	},
	shim: {
		/*
			在实例的app中，还用到jquery以外的第三方库
			如果该类库不是一个标准AMD规范，我又不想去改代码
			需要通过下述方式定义该文件
		*/
		"parabola": {
			exports: "_"
		},
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"parabola": ["jquery"]
	}
})



//要去调用index.js中的main
require(["index"], function(index){
	console.log(index.main());
})

//调用slide.js 中的 slide函数
require(["fade"], function(fade){
	console.log(fade.fade());
})
require(["register"],function(register){
	console.log(register.register());
})
require(["goodsDetail"],function(goodsDetail){
	console.log(goodsDetail.goodsDetail());
})
require(["shoppingList"],function(shoppingList){
	console.log(shoppingList.shoppingList());
})

















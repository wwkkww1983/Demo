var debug = true;
var Config = {
	api:{
		api1:debug?"../../../asserts/debug/data/api3.json":"http://192.168.2.100:19091/prv/storage/getWeek",
		api2:debug?"../../../asserts/debug/data/api3-1.json":"http://192.168.2.100:19091/prv/storage/getToday",
		api3:debug?"../../../asserts/debug/data/api3-2.json":"http://192.168.2.100:19091/prv/storage/getPersent"
	}
};
import {
  AppRegistry,
} from 'react-native';
import AwesomeProject from './src/AwesomeProject'

import SQLite from 'react-native-sqlite-storage';
var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000,
	() => {
		console.log('opened');

		var sql = 'CREATE TABLE IF NOT EXISTS UserTable (FirstName varchar(255), LastName varchar(255))';
		db.transaction((tx) => {
			tx.executeSql(sql, [], (tx, results) => {
				console.log('' + results);
			});
		});

		var insertsql = "INSERT INTO UserTable VALUES ('mu', 'ji')";
		db.transaction((tx) => {
			tx.executeSql(insertsql, [], (tx, results) => {
				console.log('' + results);
			});
		});
	},
	(error) => {
		console.log('open error: ' + error);
	});

// query operation
var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000,
	() => {
		console.log('opened');

		var querysql = "SELECT * FROM UserTable";
		db.transaction((tx) => {
			tx.executeSql(querysql, [], (tx, results) => {
				var len = results.rows.length;
				for (let i = 0; i < len; i++) {
				let row = results.rows.item(i);
					console.log(`User name: ${row.FirstName}, Dept Name: ${row.LastName}`);
				}
			});
		});
	},
	(error) => {
		console.log('open error: ' + error);
	});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

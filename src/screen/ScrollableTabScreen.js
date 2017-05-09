import React, { Component } from 'react'
import {
  Text,
} from 'react-native'
var ScrollableTabView = require('react-native-scrollable-tab-view');
import { 
	Card 
} from 'react-native-material-design';

export default class ScrollableTabScreen extends React.Component {
  render() {
    return (
		<ScrollableTabView 
			style={{marginTop: 20, }}
		>
			<Card tabLabel='Tab #1'>
				<Text>List of recent chats</Text>
			</Card>
			<Card tabLabel='Tab #2'>
				<Text>List of recent chats</Text>
			</Card>
			<Card tabLabel='Tab #3'>
				<Text>List of recent chats</Text>
			</Card>
		</ScrollableTabView>
	)
  }
}
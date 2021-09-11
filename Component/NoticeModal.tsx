import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
	Linking
} from 'react-native';
import { borderColor } from '../CommonVariable';
import { NoticeScreen } from '../Screen';

// 이용자화면의 공지사항 모달
const NoticeModal = () => {
	const gotoInstagram = () => {
		Linking.openURL('https://instagram.com/uos_nalgae?utm_medium=copy_link');
	}

	return (
		<View style={{width:'100%', maxHeight: '90%', marginTop: 20}}>
			<NoticeScreen type="modal" />
			<View style={ModalStyle.Recommend}>
				<Text style={{padding: 2}}>날개의 활동이 궁금하다면? 👉</Text>
				<View onTouchStart={gotoInstagram}>
					<Image
						style={{width: 40, height: 40}}
						source={require('../assets/img/logo.png')}
					/>
				</View>
			</View>
		</View>
	);
}

const ModalStyle = StyleSheet.create({
	Recommend: {
		height: '10%',
		borderColor: borderColor,
		borderWidth: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default NoticeModal;
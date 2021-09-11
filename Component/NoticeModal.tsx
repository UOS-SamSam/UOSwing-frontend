import React from 'react';

import {
	View
} from 'react-native';
import { NoticeScreen } from '../Screen';

// 이용자화면의 공지사항 모달
const NoticeModal = () => {
	return (
		<View style={{width:'100%', maxHeight: '94%', marginTop: 20}}>
			<NoticeScreen type="modal" />
		</View>
	);
}

export default NoticeModal;
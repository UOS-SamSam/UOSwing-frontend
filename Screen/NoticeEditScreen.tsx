import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NoticeStackParamList } from '../Router/NoticeRouter';

type Props = {
	route: RouteProp<NoticeStackParamList, 'NoticeEdit'>;
}

const NoticeEditScreen = ({ route } : Props) => {
	const [titleState, setTitleState] = useState<string>("");
	const [contentsState, setContentsState] = useState<string>("");

	useEffect(() => {
		setTitleState(route.params.title);
		setContentsState(route.params.contents);
	}, [route.params]);

	return (
		<View>
			<TextInput
				onChangeText={setTitleState}
				value={titleState}
				multiline={true}
				placeholder="제목"
				style={{
					fontSize: 20,
					textDecorationLine: 'none',
					borderBottomWidth: 1,
					marginLeft: 20,
					marginRight: 20
				}}
			/>
			<TextInput
				onChangeText={setContentsState}
				value={contentsState}
				multiline={true}
				placeholder="내용을 입력해주세요."
				style={{
					marginLeft: 20,
					marginRight: 20
				}}
			/>
		</View>
	);
}

export default NoticeEditScreen;
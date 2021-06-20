import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../Screen';

const Stack = createStackNavigator();

// map 탭의 화면을 내보내는 곳
const MapRouter = () => {
	return (
		<Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
			<Stack.Screen name="Map" component={MapScreen} options={{ title: "Map", headerLeft: null }} />
		</Stack.Navigator>
	);
}

export default MapRouter;
import React from 'react';
import { View } from 'react-native';

import { colors } from '@/constants/theme';
import { Stack } from 'expo-router';

const PlaylistsScreenLayout = () => {
	return (
		<View className='defaultStyles'>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						headerTitle: 'Playlists',
						headerLargeTitle: true,
						headerLargeStyle: {
							backgroundColor: colors.background,
						},
						headerLargeTitleStyle: {
							color: colors.text,
						},
						headerTintColor: colors.text,
						headerTransparent: true,
						headerBlurEffect: 'prominent',
						headerShadowVisible: false,
					}}
				/>
			</Stack>
		</View>
	);
};

export default PlaylistsScreenLayout;

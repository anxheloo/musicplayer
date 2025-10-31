import React from 'react';
import { View } from 'react-native';

import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

const FavoritesScreenLayout = () => {
	return (
		<View className='defaultStyles'>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						headerTitle: 'Favorites',
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

export default FavoritesScreenLayout;

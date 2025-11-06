import React from 'react';

import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

const SongsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: 'Songs',
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
	);
};

export default SongsScreenLayout;

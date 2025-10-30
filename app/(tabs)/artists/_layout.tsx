import React from 'react';
import { StyleSheet, View } from 'react-native';

import { defaultStyles } from '@/styles';

import { Stack } from 'expo-router';

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						headerTitle: 'Artists',
					}}
				/>
			</Stack>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ArtistsScreenLayout;

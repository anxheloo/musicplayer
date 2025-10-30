import React from 'react';
import { StyleSheet, View } from 'react-native';

import { defaultStyles } from '@/styles';

import { Stack } from 'expo-router';

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						headerTitle: 'Playlists',
					}}
				/>
			</Stack>
		</View>
	);
};

const styles = StyleSheet.create({});

export default PlaylistsScreenLayout;

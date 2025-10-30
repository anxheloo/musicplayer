import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						headerTitle: 'Songs',
					}}
				/>
			</Stack>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SongsScreenLayout;

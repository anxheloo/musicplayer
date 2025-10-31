import { StyleSheet } from 'react-native';

import { colors, fontSize } from '@/constants/theme';
import { Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { BlurView } from 'expo-blur';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: { fontSize: fontSize.xs, fontWeight: 500 },
				headerShown: false,
				tabBarBackground: () => (
					<BlurView
						intensity={40}
						style={{
							...StyleSheet.absoluteFillObject,
						}}
					/>
				),
				tabBarStyle: {
					position: 'absolute',
					bottom: 0,
					overflow: 'hidden',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
				},
			}}
		>
			<Tabs.Screen
				name='favorites'
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome name='heart' size={focused ? 21 : 20} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name='playlists'
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons name='playlist-play' size={focused ? 29 : 28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='(songs)'
				options={{
					title: 'Songs',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name='musical-notes-sharp' size={focused ? 25 : 24} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name='artists'
				options={{
					title: 'Artists',
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome6 name='users-line' size={focused ? 21 : 20} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}

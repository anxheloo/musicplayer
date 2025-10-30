import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='Playlists' />
			<Tabs.Screen name='Favorites' />
		</Tabs>
	);
}

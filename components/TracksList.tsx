import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Track } from '@/types/appTypes';
import TrackListItem from './TrackListItem';

import { colors } from '@/constants/theme';
import datas from '../assets/data/library.json';

const TracksList = () => {
	const renderItem = ({ item }: { item: Track }) => {
		return <TrackListItem title={item.title} artist={item.artist} image={item.artwork} />;
	};

	return (
		<FlatList
			style={{ backgroundColor: colors.background }}
			data={datas}
			renderItem={renderItem}
			contentContainerClassName='gap-3 pt-[150px] grow'
		/>
	);
};

const styles = StyleSheet.create({});

export default TracksList;

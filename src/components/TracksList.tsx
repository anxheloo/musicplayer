import React, { useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Track } from '@/types/appTypes';
import TrackListItem from './TrackListItem';

import { colors } from '@/constants/theme';

import datas from '../assets/data/library.json';

import useNavigationSearch from '@/hooks/useNavigationSearch';

const TracksList = () => {
	//Dynamic Header search bar options
	const { search } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Search Songs',
			tintColor: colors.primary,
			hideWhenScrolling: false,
			autoFocus: true,
		},
	});

	const dataToRender = useMemo(
		() =>
			datas.filter(
				(item) =>
					item.title.toLowerCase().includes(search.toLowerCase()) ||
					item.artist?.toLowerCase().includes(search.toLowerCase())
			),
		[search]
	);

	const renderItem = ({ item }: { item: Track }) => {
		return <TrackListItem title={item.title} artist={item.artist} image={item.artwork} />;
	};

	return (
		<FlatList
			contentInsetAdjustmentBehavior='automatic'
			style={{ backgroundColor: colors.background, paddingHorizontal: 10 }}
			data={dataToRender}
			renderItem={renderItem}
			contentContainerClassName='gap-3 grow pt-2 pb-20'
		/>
	);
};

const styles = StyleSheet.create({});

export default TracksList;

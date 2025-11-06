import { useLayoutEffect, useState } from 'react';

import { colors } from '@/constants/theme';

import { useNavigation } from 'expo-router';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { SearchBarProps } from 'react-native-screens';

const defaultSearchOption: SearchBarProps = {
	tintColor: colors.primary,
};

type Props = {
	searchBarOptions?: SearchBarProps;
};

const useNavigationSearch = ({ searchBarOptions }: Props) => {
	const [search, setSearch] = useState('');
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOption,
				...searchBarOptions,
				onChangeText: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
					const t = e.nativeEvent.text;
					setSearch(t);
				},
			},
		});
	}, []);

	return { search };
};

export default useNavigationSearch;

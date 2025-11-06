import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { unknowntrackImageUrl } from '@/constants/images';
import { Image } from 'expo-image';

const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type Props = {
	title: string;
	image?: string;
	artist?: string;
};

const TrackListItem = ({ title, image, artist }: Props) => {
	const isActiveTrack = false;

	return (
		<TouchableHighlight className='p-1'>
			<View
				style={{
					flexDirection: 'row',
					gap: 10,
					borderBottomWidth: 1,
					borderBottomColor: 'rgba(255,255,255,0.2)',
					paddingBottom: 8,
				}}
			>
				<Image
					style={{
						width: 50,
						height: 50,
						borderRadius: 6,
						opacity: isActiveTrack ? 1 : 0.5,
					}}
					source={{
						uri: image ?? unknowntrackImageUrl,
					}}
					placeholder={{ blurhash }}
					contentFit='cover'
					transition={1000}
				/>

				{/* Track title + Artist */}
				<View className='flex-1 justify-center'>
					<Text
						numberOfLines={1}
						className={` text-text text-sm ${isActiveTrack ? ' text-primary' : ' text-text'}`}
					>
						{title}
					</Text>
					{artist && (
						<Text numberOfLines={1} className='text-textMuted text-sm'>
							{artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default TrackListItem;

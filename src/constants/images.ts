import { Image } from 'react-native';

import UnknownArtistImage from '../assets/images/unknown_artist.png';
import UnknownTrackImage from '../assets/images/unknown_track.png';

export const unknowntrackImageUrl = Image.resolveAssetSource(UnknownTrackImage).uri;
export const unknownartistImageUrl = Image.resolveAssetSource(UnknownArtistImage).uri;

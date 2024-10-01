export function formatImageSource(imageSource: string) {
	const parts = imageSource.split('/');
	return parts[parts.length - 1];
}
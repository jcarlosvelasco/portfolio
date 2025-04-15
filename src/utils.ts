export function formatImageSource(imageSource: string) {
	const parts = imageSource.split('/');
	return parts[parts.length - 1];
}

export const skillItems = [
	"SwiftUI", 
	"React",
	"TypeScript",
	"Compose",
	"Node.js",
	"Kotlin",
	"Java",
	"Xamarin",
	"Jupyter Notebook"
]
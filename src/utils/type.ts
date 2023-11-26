export interface ILocation {
	lat: number;
	lng: number;
}

export interface PlaceResult {
	name: string;
	id: string;
	types: string[];
	nationalPhoneNumber: string;
	internationalPhoneNumber: string;
	formattedAddress: string;
	addressComponents: AddressComponent[];
	plusCode: PlusCode;
	location: Location;
	viewport: Viewport;
	rating: number;
	googleMapsUri: string;
	websiteUri?: string;
	regularOpeningHours: RegularOpeningHours;
	utcOffsetMinutes: number;
	adrFormatAddress: string;
	businessStatus: string;
	priceLevel?: string;
	userRatingCount: number;
	iconMaskBaseUri: string;
	iconBackgroundColor: string;
	displayName: DisplayName;
	primaryTypeDisplayName: PrimaryTypeDisplayName;
	takeout?: boolean;
	dineIn: boolean;
	servesBreakfast?: boolean;
	servesLunch?: boolean;
	servesDinner?: boolean;
	servesBeer?: boolean;
	servesWine?: boolean;
	currentOpeningHours: CurrentOpeningHours;
	primaryType: string;
	shortFormattedAddress: string;
	reviews: Review[];
	photos: Photo[];
	outdoorSeating?: boolean;
	liveMusic?: boolean;
	servesCocktails?: boolean;
	servesCoffee?: boolean;
	allowsDogs: boolean;
	paymentOptions: PaymentOptions;
	delivery?: boolean;
	curbsidePickup?: boolean;
	reservable?: boolean;
	servesBrunch?: boolean;
	menuForChildren?: boolean;
	servesDessert?: boolean;
	goodForChildren?: boolean;
	restroom?: boolean;
	goodForGroups?: boolean;
	goodForWatchingSports?: boolean;
	accessibilityOptions?: AccessibilityOptions;
	editorialSummary?: EditorialSummary;
	servesVegetarianFood?: boolean;
	parkingOptions?: ParkingOptions;
}

export interface AddressComponent {
	longText: string;
	shortText: string;
	types: string[];
	languageCode: string;
}

export interface PlusCode {
	globalCode: string;
	compoundCode: string;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface Viewport {
	low: Low;
	high: High;
}

export interface Low {
	latitude: number;
	longitude: number;
}

export interface High {
	latitude: number;
	longitude: number;
}

export interface RegularOpeningHours {
	openNow: boolean;
	periods: Period[];
	weekdayDescriptions: string[];
}

export interface Period {
	open: Open;
	close: Close;
}

export interface Open {
	day: number;
	hour: number;
	minute: number;
}

export interface Close {
	day: number;
	hour: number;
	minute: number;
}

export interface DisplayName {
	text: string;
	languageCode: string;
}

export interface PrimaryTypeDisplayName {
	text: string;
	languageCode: string;
}

export interface CurrentOpeningHours {
	openNow: boolean;
	periods: Period2[];
	weekdayDescriptions: string[];
}

export interface Period2 {
	open: Open2;
	close: Close2;
}

export interface Open2 {
	day: number;
	hour: number;
	minute: number;
	date: Date;
	truncated?: boolean;
}

export interface Date {
	year: number;
	month: number;
	day: number;
}

export interface Close2 {
	day: number;
	hour: number;
	minute: number;
	date: Date2;
	truncated?: boolean;
}

export interface Date2 {
	year: number;
	month: number;
	day: number;
}

export interface Review {
	name: string;
	relativePublishTimeDescription: string;
	rating: number;
	text: Text;
	originalText: OriginalText;
	authorAttribution: AuthorAttribution;
	publishTime: string;
}

export interface Text {
	text: string;
	languageCode: string;
}

export interface OriginalText {
	text: string;
	languageCode: string;
}

export interface AuthorAttribution {
	displayName: string;
	uri: string;
	photoUri: string;
}

export interface Photo {
	name: string;
	widthPx: number;
	heightPx: number;
	authorAttributions: AuthorAttribution2[];
}

export interface AuthorAttribution2 {
	displayName: string;
	uri: string;
	photoUri: string;
}

export interface PaymentOptions {
	acceptsCreditCards: boolean;
	acceptsCashOnly: boolean;
	acceptsDebitCards?: boolean;
	acceptsNfc?: boolean;
}

export interface AccessibilityOptions {
	wheelchairAccessibleParking?: boolean;
	wheelchairAccessibleEntrance?: boolean;
	wheelchairAccessibleRestroom?: boolean;
	wheelchairAccessibleSeating?: boolean;
}

export interface EditorialSummary {
	text: string;
	languageCode: string;
}

export interface ParkingOptions {
	freeParkingLot: boolean;
	paidParkingLot?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceNote?: string;
  duration?: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  comment: string;
  isPlaceholderNote?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  altText: string;
}

export interface BusinessInfo {
  name: string;
  type: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  openingHours: string;
  googleRating: number;
  googleReviewCount: number;
  tagline: string;
  googleMapsUrl: string;
  bookingEmail: string;
  socials: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

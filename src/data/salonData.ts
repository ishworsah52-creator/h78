import { BusinessInfo, ServiceCategory, ServiceItem, ReviewItem, GalleryItem } from '../types';
import salonInteriorPhoto from '../assets/images/salon_interior_main_1786473498209.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'h78nepal',
  type: 'Beauty Salon',
  address: 'Eti Chowk, Jana Bahal Rd',
  city: 'Lalitpur (Patan)',
  postalCode: '44600',
  country: 'Nepal',
  phone: '9742871601',
  phoneDisplay: '974-2871601',
  whatsapp: '9742871601',
  openingHours: '10:00 AM – 7:00 PM',
  googleRating: 4.9,
  googleReviewCount: 143,
  tagline: 'It’s all about you 💕',
  googleMapsUrl: 'https://www.google.com/maps/place/h78nepal/@27.6702712,85.319916,873m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39eb190a8b38129d:0x7b63c84f17bd4623!8m2!3d27.6702712!4d85.3224909!16s%2Fg%2F11rtlw7dz5?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
  bookingEmail: 'ishworsah63@gmail.com',
  socials: {
    instagram: 'https://instagram.com/h78nepal',
    tiktok: 'https://tiktok.com/@h78nepal',
    facebook: 'https://facebook.com/h78nepal',
  },
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'all', name: 'All Services', description: 'Explore our full range of beauty & care services' },
  { id: 'hair-services', name: 'Hair Services', description: 'Precision cuts, blow dry, and classic hair care' },
  { id: 'hair-styling', name: 'Hair Styling', description: 'Event styling, curling, straightening & blowouts' },
  { id: 'hair-treatment', name: 'Hair Treatment', description: 'Deep conditioning, keratin, spa & scalp nourishment' },
  { id: 'facial-skincare', name: 'Facial & Skincare', description: 'Refreshing facials, skin glow & deep cleansing' },
  { id: 'makeup', name: 'Makeup', description: 'Party makeup, subtle natural glam & special occasions' },
  { id: 'nail-care', name: 'Nail Care', description: 'Manicures, pedicures & nail polish styling' },
  { id: 'beauty-services', name: 'Beauty Services', description: 'Threading, waxing & essential beauty upkeep' },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  // Hair Services
  {
    id: 'hs-1',
    name: 'Haircut & Styling',
    category: 'hair-services',
    description: 'Custom haircut tailored to your face structure with wash and quick blow dry.',
    priceNote: 'Contact for Price',
    iconName: 'Scissors',
  },
  {
    id: 'hs-2',
    name: 'Hair Wash & Blow Dry',
    category: 'hair-services',
    description: 'Relaxing scalp wash followed by a smooth, volume-enhancing blow dry.',
    priceNote: 'Contact for Price',
    iconName: 'Sparkles',
  },
  {
    id: 'hs-3',
    name: 'Hair Color & Highlights',
    category: 'hair-services',
    description: 'Root touch-up, global hair coloring, and highlights using gentle hair dyes.',
    priceNote: 'Contact for Price',
    iconName: 'Palette',
  },

  // Hair Styling
  {
    id: 'hst-1',
    name: 'Party Hair Styling',
    category: 'hair-styling',
    description: 'Elegantly pinned buns, soft waves, or curls perfect for family functions and gatherings.',
    priceNote: 'Contact for Price',
    iconName: 'Crown',
  },
  {
    id: 'hst-2',
    name: 'Hair Straightening & Ironing',
    category: 'hair-styling',
    description: 'Sleek heat styling with protective thermal spray for smooth finish.',
    priceNote: 'Contact for Price',
    iconName: 'Flame',
  },

  // Hair Treatment
  {
    id: 'ht-1',
    name: 'Deep Conditioning Hair Spa',
    category: 'hair-treatment',
    description: 'Nourishing cream treatment to revive dry, damaged hair and add healthy shine.',
    priceNote: 'Contact for Price',
    iconName: 'Droplets',
  },
  {
    id: 'ht-2',
    name: 'Keratin & Smoothing Treatment',
    category: 'hair-treatment',
    description: 'Frizz-reduction treatment that restores smoothness and manageability.',
    priceNote: 'Contact for Price',
    iconName: 'ShieldCheck',
  },

  // Facial & Skincare
  {
    id: 'fs-1',
    name: 'Glow Herbal Facial',
    category: 'facial-skincare',
    description: 'Gentle herbal blend designed to cleanse, exfoliate, and restore natural radiance.',
    priceNote: 'Contact for Price',
    iconName: 'Smile',
  },
  {
    id: 'fs-2',
    name: 'Deep Cleansing Skincare',
    category: 'facial-skincare',
    description: 'Pore unclogging, steam treatment, gentle blackhead removal & soothing mask.',
    priceNote: 'Contact for Price',
    iconName: 'Sun',
  },
  {
    id: 'fs-3',
    name: 'Hydrating Fruit Facial',
    category: 'facial-skincare',
    description: 'Vitamin-rich fruit extracts to refresh tired skin and boost moisture.',
    priceNote: 'Contact for Price',
    iconName: 'Heart',
  },

  // Makeup
  {
    id: 'mk-1',
    name: 'Party & Casual Makeup',
    category: 'makeup',
    description: 'Lightweight, long-wearing makeup highlighting your best features.',
    priceNote: 'Contact for Price',
    iconName: 'Wand2',
  },
  {
    id: 'mk-2',
    name: 'Eye Makeup & Lashes',
    category: 'makeup',
    description: 'Precision eye liner, eyeshadow blending, and mascara or lash placement.',
    priceNote: 'Contact for Price',
    iconName: 'Eye',
  },

  // Nail Care
  {
    id: 'nc-1',
    name: 'Classic Manicure',
    category: 'nail-care',
    description: 'Nail shaping, cuticle care, hand massage, and neat polish application.',
    priceNote: 'Contact for Price',
    iconName: 'Hand',
  },
  {
    id: 'nc-2',
    name: 'Relaxing Pedicure',
    category: 'nail-care',
    description: 'Soothing foot soak, scrub, nail grooming, and relaxing foot massage.',
    priceNote: 'Contact for Price',
    iconName: 'Footprints',
  },

  // Beauty Services
  {
    id: 'bs-1',
    name: 'Threading (Eyebrow & Facial)',
    category: 'beauty-services',
    description: 'Precise eyebrow shaping and gentle facial hair threading.',
    priceNote: 'Contact for Price',
    iconName: 'CheckCircle2',
  },
  {
    id: 'bs-2',
    name: 'Waxing Services',
    category: 'beauty-services',
    description: 'Hygienic and smooth arm, leg, or full-body waxing using soothing wax.',
    priceNote: 'Contact for Price',
    iconName: 'Zap',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'h78nepal Salon Interior & Mirrors',
    category: 'Interior',
    imageUrl: salonInteriorPhoto,
    altText: 'h78nepal salon interior setting with illuminated oval mirrors in Patan',
  },
  {
    id: 'gal-2',
    title: 'Hair Styling & Cut',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=900',
    altText: 'Hair styling and cutting at h78nepal',
  },
  {
    id: 'gal-3',
    title: 'Facial & Skincare Treatment',
    category: 'Facial',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=900',
    altText: 'Relaxing facial skincare session',
  },
  {
    id: 'gal-4',
    title: 'Nail Art & Manicure',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=900',
    altText: 'Neat manicure and nail styling',
  },
  {
    id: 'gal-5',
    title: 'Party Makeup Styling',
    category: 'Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=900',
    altText: 'Glamour makeup styling session',
  },
  {
    id: 'gal-6',
    title: 'Nourishing Hair Care',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=900',
    altText: 'Hair care spa wash session',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    authorName: 'Sujata S.',
    rating: 5,
    date: 'Recent Customer Review',
    comment: 'Very polite staff and clean salon! They took great care of my hair and eyebrow threading. Highly recommend if you are around Patan.',
    isPlaceholderNote: true,
  },
  {
    id: 'rev-2',
    authorName: 'Anjali M.',
    rating: 5,
    date: 'Recent Customer Review',
    comment: 'Got a relaxing facial and hair wash before an event. The results were amazing and prices are very reasonable. Loved the friendly vibe 💕',
    isPlaceholderNote: true,
  },
  {
    id: 'rev-3',
    authorName: 'Prashansa K.',
    rating: 5,
    date: 'Recent Customer Review',
    comment: 'Clean environment, great customer service, and located conveniently near Eti Chowk. I always feel confident leaving here!',
    isPlaceholderNote: true,
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Professional Beauty Care',
    description: 'Attentive and skilled staff delivering reliable hair, facial, makeup, and skin care services tailored to you.',
    iconName: 'Award',
  },
  {
    title: 'Comfortable Experience',
    description: 'A clean, welcoming, and relaxed salon atmosphere where you can unwind and feel cared for.',
    iconName: 'Heart',
  },
  {
    title: 'Convenient Patan Location',
    description: 'Easily accessible at Eti Chowk, Jana Bahal Road in Lalitpur with convenient appointment scheduling.',
    iconName: 'MapPin',
  },
  {
    title: 'Customer-Focused Service',
    description: 'We listen carefully to your preferences to ensure you leave feeling confident and happy with your look.',
    iconName: 'Users',
  },
];

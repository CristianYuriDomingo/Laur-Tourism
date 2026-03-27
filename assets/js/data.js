// assets/js/data.js — Laur Tourism shared data
// Update these numbers whenever you add/remove cards in attractions.html or visit.html

const attractions = [
  // Natural Attractions
  {
    title: "Seminublan Falls",
    category: "natural",
    location: "Brgy. San Fernando",
    description: "A stunning natural waterfall in the heart of Brgy. San Fernando.",
    image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=800&q=80",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.595597,121.215297"
  },
  {
    title: "Bato Ferry",
    category: "natural",
    location: "San Felipe",
    description: "A scenic river crossing in San Felipe — a unique and memorable local experience.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.553500,121.228886"
  },
  {
    title: "Hidden Falls",
    category: "natural",
    location: "Brgy. San Fernando",
    description: "A hidden waterfall waiting deep within Brgy. San Fernando.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.595597,121.215297"
  },
  {
    title: "Jampol River",
    category: "natural",
    location: "Brgy. San Juan",
    description: "A peaceful river in Brgy. San Juan — perfect for relaxation and nature walks.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.566697,121.206453"
  },
  // Man-made Attractions
  {
    title: "Casa Celestine",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "A beautiful private resort in Brgy. Siclong — perfect for relaxation and events.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    type: "Private Resort",
    contact: "09317275295",
    coordinates: "15.570000,121.230000"
  },
  {
    title: "Green House Private Pool",
    category: "manmade",
    location: "Brgy. San Josep",
    description: "Private pool resort in Brgy. San Josep — ideal for group outings and celebrations.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    type: "Private Pool Resort",
    contact: "09126147056",
    coordinates: "15.564997,121.240000"
  },
  {
    title: "Sunsetpeak Nature Camp",
    category: "manmade",
    location: "Brgy. Nauzon",
    description: "Experience nature camping with stunning sunset views in Brgy. Nauzon.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    type: "Nature Camp",
    contact: "",
    coordinates: "15.580000,121.219997"
  },
  {
    title: "Sierran Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "A relaxing resort in Brgy. Siclong with beautiful mountain surroundings.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
    type: "Resort",
    contact: "09484172382",
    coordinates: "15.574997,121.230000"
  },
  {
    title: "Mountain View Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "Enjoy stunning mountain views and resort facilities in Brgy. Siclong.",
    image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=800&q=80",
    type: "Resort",
    contact: "09386293261",
    coordinates: "15.573000,121.231997"
  },
  {
    title: "Camila Farm Resort",
    category: "manmade",
    location: "Brgy. Betania",
    description: "Farm resort experience in Brgy. Betania — offering nature, rest, and fresh air.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    type: "Farm Resort",
    contact: "09176388948",
    coordinates: "15.560000,121.250000"
  },
  {
    title: "Four Queens & Private Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "Private resort in Brgy. Siclong — ideal for family gatherings and special occasions.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    type: "Private Resort",
    contact: "09199996710",
    coordinates: "15.571997,121.231000"
  },
  {
    title: "Lelo's Mountain Resort",
    category: "manmade",
    location: "Brgy. San Isidro",
    description: "A beautiful mountain resort in Brgy. San Isidro with stunning natural surroundings.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    type: "Mountain Resort",
    contact: "09171446213",
    coordinates: "15.550000,121.209997"
  },
  {
    title: "Clareng's Farm Resort",
    category: "manmade",
    location: "Brgy. Sagana",
    description: "A beautiful farm resort in Brgy. Sagana — offering a true farm-to-table experience.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    type: "Farm Resort",
    contact: "09105493608",
    coordinates: "15.570000,121.260000"
  }
];

const stays = [
  {
    title: "Casa Celestine",
    category: "resort",
    location: "Brgy. Siclong",
    description: "A beautiful private resort in Brgy. Siclong — perfect for relaxation and events.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    type: "Private Resort",
    contact: "09317275295",
    coordinates: "15.570000,121.230000"
  },
  {
    title: "Green House Private Pool",
    category: "resort",
    location: "Brgy. San Josep",
    description: "Private pool resort in Brgy. San Josep — ideal for group outings and celebrations.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    type: "Private Pool Resort",
    contact: "09126147056",
    coordinates: "15.564997,121.240000"
  },
  {
    title: "Sunsetpeak Nature Camp",
    category: "camp",
    location: "Brgy. Nauzon",
    description: "Nature camping with stunning sunset views in Brgy. Nauzon.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    type: "Nature Camp",
    contact: "",
    coordinates: "15.580000,121.219997"
  },
  {
    title: "Sierran Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "A relaxing resort in Brgy. Siclong with mountain views.",
    image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
    type: "Resort",
    contact: "09484172382",
    coordinates: "15.574997,121.230000"
  },
  {
    title: "Mountain View Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "Enjoy stunning mountain views and facilities in Brgy. Siclong.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
    type: "Resort",
    contact: "09386293261",
    coordinates: "15.573000,121.231997"
  },
  {
    title: "Camila Farm Resort",
    category: "farm-resort",
    location: "Brgy. Betania",
    description: "Farm resort in Brgy. Betania — nature, rest, and fresh air.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    type: "Farm Resort",
    contact: "09176388948",
    coordinates: "15.560000,121.250000"
  },
  {
    title: "Four Queens & Private Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "Private resort in Brgy. Siclong — ideal for family gatherings and special occasions.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    type: "Private Resort",
    contact: "09199996710",
    coordinates: "15.571997,121.231000"
  },
  {
    title: "Lelo's Mountain Resort",
    category: "resort",
    location: "Brgy. San Isidro",
    description: "Beautiful mountain resort in Brgy. San Isidro with stunning natural surroundings.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    type: "Mountain Resort",
    contact: "09171446213",
    coordinates: "15.550000,121.209997"
  },
  {
    title: "Clareng's Farm Resort",
    category: "farm-resort",
    location: "Brgy. Sagana",
    description: "A beautiful farm resort in Brgy. Sagana — true farm-to-table experience.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    modalImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    type: "Farm Resort",
    contact: "09105493608",
    coordinates: "15.570000,121.260000"
  }
];

var LAUR_DATA = {
  barangays:     17,
  attractions:   attractions.length,   // total cards in #attr-grid (attractions.html)
  stays:          stays.length,   // total cards in #stay-grid (visit.html)
  distanceHours: '1.5hr'
};
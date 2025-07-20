import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const hotelStore = defineStore("hotel  ", () => {
  
  const roomList = ref([
    {
      id: 0,
      image:
        "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_1/room1.jpg",
      name: "Single Room",
      price: 25000,
      featurs: [
        { icon: "fi fi-tr-hot-tub", name: "Hot water shower" },
        { icon: "fi fi-sr-swimmer", name: "pool access" },
        { icon: "fi fi-tr-bed-alt", name: "king size bed" },
        { icon: "fi fi-tr-toilet-paper-blank", name: "king size bed" },
      ],
    },
    {
      id: 1,
      image:
        "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_2/room2.jpg",
      name: "Dubble Room",
      price: 35000,
      featurs: [
        { icon: "fi fi-tr-hot-tub", name: "Hot water shower" },
        { icon: "fi fi-sr-swimmer", name: "pool access" },
        { icon: "fi fi-tr-bed-alt", name: "king size bed" },
      ],
    },
    { 
      id: 2,
      image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_3/room3.jpg",
      name: "Dualux Room",
      price: 45000,
      featurs: [
        { icon: "fi fi-tr-hot-tub", name: "Hot water shower" },
        { icon: "fi fi-sr-swimmer", name: "pool access" },
        { icon: "fi fi-tr-bed-alt", name: "king size bed" },
      ],
    },
    {
      id: 3,
      image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_4/room4.jpg",
      name: "Hanymon Room",
      price: 75000,
      featurs: [
        { icon: "fi fi-tr-hot-tub", name: "Hot water shower" },
        { icon: "fi fi-sr-swimmer", name: "pool access" },
        { icon: "fi fi-tr-bed-alt", name: "king size bed" },
      ],
    },
    {
      id: 4,
      image:
        "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_5/room5.jpg",
      name: "luxeryX Room",
      price: 95000,
      featurs: [
        { icon: "fi fi-tr-hot-tub", name: "Hot water shower" },
        { icon: "fi fi-sr-swimmer", name: "pool access" },
        { icon: "fi fi-tr-bed-alt", name: "king size bed" },
      ],
    },
  ]);
  const questions = ref([
    // ACCOMMODATION (4 questions)
    {
      question: "What time is check-in and check-out?",
      answare: "Check-in is at 3:00 PM and check-out is at 11:00 AM.",
      tag: 'accomodation'
    },
    {
      question: "Do you provide baby cots or extra beds?",
      answare: "Yes, we provide baby cots free of charge. Extra beds are available for $20/night.",
      tag: 'accomodation'
    },
    {
      question: "Is room service available 24 hours?",
      answare: "Room service is available from 6:00 AM to 11:00 PM daily.",
      tag: 'accomodation'
    },
    {
      question: "Do rooms have air conditioning?",
      answare: "All our rooms are equipped with individual AC units with temperature control.",
      tag: 'accomodation'
    },

    // RESTAURANT (4 questions)
    {
      question: "What are the breakfast hours?",
      answare: "Breakfast is served daily from 7:00 AM to 10:30 AM in our main restaurant.",
      tag: 'restaurent'
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answare: "Yes, we offer vegetarian, vegan, gluten-free and halal options. Please inform us in advance.",
      tag: 'restaurent'
    },
    {
      question: "Is there a dress code for the restaurant?",
      answare: "Smart casual attire is preferred in our dining areas after 6:00 PM.",
      tag: 'restaurent'
    },
    {
      question: "Can non-guests dine at your restaurant?",
      answare: "Yes, our restaurant is open to the public with prior reservation.",
      tag: 'restaurent'
    },

    // GENERAL RULES (4 questions)
    {
      question: "What is your smoking policy?",
      answare: "We are 100% smoke-free. Smoking is only permitted in designated outdoor areas.",
      tag: 'hotel rules'
    },
    {
      question: "Are pets allowed in the hotel?",
      answare: "Only service animals are permitted with proper documentation.",
      tag: 'hotel rules'
    },
    {
      question: "Is there a minimum age requirement for check-in?",
      answare: "Guests must be at least 21 years old to check in without adult supervision.",
      tag: 'hotel rules'
    },
    {
      question: "What is your cancellation policy?",
      answare: "Cancellations must be made 48 hours prior to arrival to avoid a one-night charge.",
      tag: 'hotel rules'
    },

    // ONBOARD (4 questions)
    {
      question: "Do you offer airport transfers?",
      answare: "Yes, we provide airport shuttle service for $25 per vehicle each way.",
      tag: 'onbord'
    },
    {
      question: "Where can I store my luggage after check-out?",
      answare: "We offer complimentary luggage storage at the concierge desk until 6:00 PM.",
      tag: 'onbord'
    },
    {
      question: "How do I request early check-in?",
      answare: "Early check-in requests can be made at reception, subject to availability and a small fee.",
      tag: 'onbord'
    },
    {
      question: "Is valet parking available?",
      answare: "Yes, valet parking is available for $35 per night with unlimited in/out privileges.",
      tag: 'onbord'
    }
  ]);
  
  const gallery = ref([
      {
          name: 'room image 1',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246893040.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 2',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246893177.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 3',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246893227.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 4',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246893250.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 5',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246893902.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 6',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246897247.jpg',
          category: 'rooms'
      },
      {
          name: 'room image 7',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/rooms/246897884.jpg',
          category: 'rooms'
      },
      {
          name: 'washroom image 1',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246893501.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 2',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246893630.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 3',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246893813.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 4',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246895343.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 5',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246896536.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 6',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246896675.jpg',
          category: 'washroom'
      },
      {
          name: 'washroom image 6',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/washrooms/246896675.jpg',
          category: 'washroom'
      },
      {
          name: 'loby image 1',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/loby/246902036.jpg',
          category: 'loby'
      },
      {
          name: 'loby image 2',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/loby/246902150.jpg',
          category: 'loby'
      },
      {
          name: 'loby image 3',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/loby/246902091.jpg',
          category: 'loby'
      },
      {
          name: 'loby image 4',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/loby/246893132.jpg',
          category: 'loby'
      },
      {
          name: 'food image 1',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246898732.jpg',
          category: 'food'
      },
      {
          name: 'food image 2',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246899127.jpg',
          category: 'food'
      },
      {
          name: 'food image 3',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246900020.jpg',
          category: 'food'
      },
      {
          name: 'food image 4',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246900339.jpg',
          category: 'food'
      },
      // {
      //     name: 'food image 5',
      //     url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246900433.jpg',
      //     category: 'food'
      // },
      {
          name: 'food image 6',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246900726.jpg',
          category: 'food'
      },
      {
          name: 'garden image 1',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/garden/246891907.jpg',
          category: 'garden'
      },
      {
          name: 'garden image 2',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/garden/246901785.jpg',
          category: 'garden'
      },
      {
          name: 'garden image 3',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/garden/246902194.jpg',
          category: 'garden'
      },
      {
          name: 'garden image 4',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/garden/246902326.jpg',
          category: 'garden'
      },
  ])

  const review = ref([
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇩🇪",
      name: "Christian Joe",
      review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
      platform: {
        name: "Booking.com",
        url: "https://www.booking.com/hotel/lk/kandy-hills.html",
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇺🇸",
      name: "Sarah Johnson",
      review: "Absolutely stunning location with breathtaking views. The staff went above and beyond to make our stay memorable. Will definitely return for another visit soon!",
      platform: {
        name: "Agoda.com",
        url: "https://www.agoda.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇬🇧",
      name: "David Wilson",
      review: "The perfect getaway spot with excellent amenities. The rooms were spacious, clean, and had everything we needed for a comfortable stay. Highly recommended!",
      platform: {
        name: "Airbnb.com",
        url: "https://www.airbnb.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇫🇷",
      name: "Marie Dupont",
      review: "Exceptional service from start to finish. The attention to detail was impressive, and the food was delicious. We felt truly pampered during our entire stay.",
      platform: {
        name: "Booking.com",
        url: "https://www.booking.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇯🇵",
      name: "Takashi Yamamoto",
      review: "A peaceful oasis with modern comforts. The bed was incredibly comfortable, and we slept soundly every night. The sunset views were absolutely magical!",
      platform: {
        name: "Agoda.com",
        url: "https://www.agoda.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇦🇺",
      name: "Emma Thompson",
      review: "Five-star experience all around! The location was perfect for exploring the area, and returning to such comfortable accommodations each evening was a treat.",
      platform: {
        name: "Airbnb.com",
        url: "https://www.airbnb.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇨🇦",
      name: "Michael Brown",
      review: "The perfect blend of luxury and homely comfort. Every staff member we encountered was friendly and helpful. The pool area was particularly fantastic!",
      platform: {
        name: "Booking.com",
        url: "https://www.booking.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇮🇹",
      name: "Giovanni Rossi",
      review: "We couldn't have asked for a better vacation spot. The design of the property is beautiful, and the attention to cleanliness was much appreciated.",
      platform: {
        name: "Agoda.com",
        url: "https://www.agoda.com"
      }
    },
    {
      image: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
      from: "🇪🇸",
      name: "Isabella Garcia",
      review: "A truly memorable experience from check-in to check-out. The breakfast was delicious with many local options. We'll be telling all our friends about this gem!",
      platform: {
        name: "Airbnb.com",
        url: "https://www.airbnb.com"
      }
    },
  ])

  const placesToVisit = ref([
    {
        name: 'Royal Botanical Gardens, Peradeniya',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(4).webp',
        description: 'The Royal Botanical Gardens in Peradeniya is one of the finest botanical gardens in Asia, spanning 147 acres. Located just 5.5 km from Kandy, this garden was established in 1843 and features more than 4,000 species of plants. The highlight is the giant Java fig tree with its sprawling roots, which has become an iconic photo spot. The orchid house displays hundreds of colorful orchid varieties, while the palm avenue creates a majestic canopy. Visitors can see exotic plants like the cannonball tree, giant bamboo, and numerous medicinal plants. The gardens also have a spice garden showcasing Sri Lanka\'s famous spices. With its well-manicured lawns, scenic river views (it\'s bordered by the Mahaweli River), and tranquil atmosphere, this makes for a perfect half-day excursion from Kandy. The cool climate and beautiful landscapes make it ideal for nature lovers and photographers alike.'
    },
    {
        name: 'Temple of the Sacred Tooth Relic',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(3).webp',
        description: 'The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is the most sacred Buddhist site in Sri Lanka and a UNESCO World Heritage Site. Located in the heart of Kandy, it houses the relic of Buddha\'s tooth, which has played a significant role in Sri Lankan politics and culture for centuries. The temple complex features stunning Kandyan architecture with intricate carvings, golden roofs, and a moat. Daily rituals (pujas) occur at 5:30 AM, 9:30 AM, and 6:30 PM with drumming and chanting. The annual Esala Perahera festival (July/August) features a grand procession with elephants and dancers. Visitors must dress modestly (shoulders and knees covered) and can explore the museum, audience hall, and octagonal Pattirippuwa. The temple offers profound cultural insights and spiritual ambiance, making it Kandy\'s must-visit attraction.'
    },
    {
        name: 'Udawatta Kele Sanctuary',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(2).webp',
        description: 'Udawatta Kele (Royal Forest Park) is a 257-acre forest reserve located just behind the Temple of the Tooth in Kandy. This lush green sanctuary offers excellent hiking opportunities through well-marked trails amidst diverse flora and fauna. The forest contains over 400 plant species (including many endemic ones), 80 bird species (like the Layard\'s parakeet and Sri Lanka hanging parrot), and mammals such as monkeys and giant squirrels. Historical sites within include the Senkada Cave (used by Buddhist monks) and the Garrison Cemetery from British colonial times. The peaceful atmosphere with singing birds and rustling leaves provides a perfect nature escape within city limits. Early morning visits are ideal for birdwatching. The canopy walkway offers beautiful views, and the forest maintains a cool temperature even during midday. It\'s an excellent spot for those seeking tranquility and nature immersion without leaving Kandy.'
    },
    {
        name: 'Lankatilaka Vihara',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(1).webp',
        description: 'Lankatilaka Vihara is an impressive 14th-century Buddhist temple located in Hiyarapitiya, about 15 km from Kandy. Built on a natural rock outcrop, this architectural masterpiece combines Sinhalese, Dravidian, and Indo-Chinese styles. The temple features a massive 80-foot-high brick structure with intricate carvings and a golden roof. Inside houses a 12-meter tall Buddha statue under a magnificent Makara Thorana (dragon arch), with beautiful Kandyan-era frescoes adorning the walls. The temple offers panoramic views of the surrounding countryside. Nearby is the historic Gadaladeniya Temple and Embekka Devalaya, forming a cultural triangle. The peaceful atmosphere and spiritual significance make it worthwhile despite the short journey from Kandy. Visitors should climb the rock-cut staircase to appreciate the temple\'s grandeur fully. The site provides excellent examples of medieval Sri Lankan art and architecture while maintaining active religious functions.'
    }
])

  return {roomList, questions, gallery, review, placesToVisit};
});

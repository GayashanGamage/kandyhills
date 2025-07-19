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
      {
          name: 'food image 5',
          url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyHills/food/246900433.jpg',
          category: 'food'
      },
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

  return {roomList, questions, gallery};
});

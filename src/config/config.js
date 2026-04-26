const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Aarón & Valeria",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Nombre novio
    boyfriendName: "Aarón",
    // Nombre Novis
    GirlfriendName: "Valeria",
    // Groom's parents names
    parentGroom: "Bapak Groom & Ibu Groom",
    // Bride's parents names
    parentBride: "Bapak Bride & Ibu Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2027-01-17",
    // Google Maps link for location (short clickable link)
    maps_url: "https://www.google.com/maps/place/Hotel+Marriot+San+Jose/@9.9873193,-84.1783605,17z/data=!3m1!4b1!4m9!3m8!1s0x8fa0fb4789084103:0xe0ad96c99c0cf655!5m2!4m1!1i2!8m2!3d9.9873141!4d-84.1734896!16s%2Fg%2F11rtz3cpmd?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.357317486548!2d-84.1734896!3d9.987314099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb4789084103%3A0xe0ad96c99c0cf655!2sHotel%20Marriot%20San%20Jose!5e0!3m2!1ses-419!2scr!4v1775011490511!5m2!1ses-419!2scr",
  
    
      // Hora de la boda
    time: "1:30 pm a 8:00 pm",
    // Venue/building name
    location: "Hotel Marriott Hacienda Belén",
    // Full address of the wedding venue
    address: "Heredia, Costa Rica",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Nombre del evento",
        // Event date (format: YYYY-MM-DD)
        date: "2026-12-24",
        // Start time (format: HH:MM)
        startTime: "2:30",
        // End time (format: HH:MM)
        endTime: "8:00",
        // Event venue
        location: "Hotel Marriott Hacienda Belén",
        // Full address
        address: "Heredia, Costa Rica",
      },

    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
     src: "/audio/YouanMe.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "You and Me", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;
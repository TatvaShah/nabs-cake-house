import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nab's Cake House",
  tagline: "Halal luxury custom cakes, weddings, bentos and desserts.",
  category: "Luxury custom cakes",
  schemaType: "Bakery",
  area: "Mississauga and the GTA, ON",
  siteUrl: "https://nabs-cake-house-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c4a036" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Halal custom cakes",
    headline: "Cakes for weddings, birthdays and celebrations",
    subhead: "Nab's Cake House makes halal luxury custom cakes in Mississauga and the GTA, including wedding cakes, bentos, cupcakes, brownies and dessert cups. Delivery is available. Order through a form or send a message.",
    images: [
      { src: "/images/post-1.jpg", alt: "A silver metallic cake from Nab's Cake House", width: 1080, height: 1080 },
      { src: "/images/post-5.jpg", alt: "A long rectangular wedding cake with a matching glitter bouquet from Nab's Cake House", width: 1080, height: 1080 },
      { src: "/images/post-3.jpg", alt: "A colourful first birthday cake from Nab's Cake House", width: 1080, height: 1080 },
    ],
    primaryCta: { label: "Order a custom cake", href: "https://forms.gle/kUZwMrwVHiY2RMBu6" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Halal luxury custom cakes in Mississauga and the GTA",
    "Wedding cakes, bentos, cupcakes, brownies and dessert cups",
    "Delivery available",
    "Order through a form or Instagram DM",
  ],

  about: {
    title: "Welcome to Nab's Cake House",
    body: [
      "Nab's Cake House makes halal luxury custom cakes in Mississauga and the GTA, including wedding cakes, bento cakes, cupcakes, brownies, dessert cups and cake shooters. Delivery is available.",
      "A wedding package has included a long rectangular wedding cake with a matching glitter bouquet. Bento cakes are 4 inch cakes that serve 1 to 3 people, with at least 1 week notice. Brownies are available in 16 or 32 pieces, also with 1 week notice. Dessert cups and cake shooters are available for preorder. Submit an order form for custom cakes and cupcakes, then send a message, or use the bento or brownie forms.",
    ],
    image: { src: "/images/post-5.jpg", alt: "A long rectangular wedding cake with a matching glitter bouquet from Nab's Cake House", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Submit an order form or send a message for a quote on your date, flavour and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Luxury custom cakes and cupcakes" },
          { name: "Wedding cakes", description: "Including a long rectangular wedding cake with a matching glitter bouquet. Send a message to book a wedding consultation." },
          { name: "Bento cakes", description: "A 4 inch cake, serves 1 to 3 people, with at least 1 week notice." },
          { name: "First birthday cakes" },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Brownies", description: "16 or 32 pieces, with 1 week notice." },
          { name: "Dessert cups and cake shooters", description: "Available for preorder." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A silver metallic cake from Nab's Cake House", caption: "A metallic cake", href: "https://www.instagram.com/p/DfqDrdGm8OS/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "A long rectangular wedding cake with a matching glitter bouquet from Nab's Cake House", caption: "Wedding cake package", href: "https://www.instagram.com/p/DfLfm_em1KE/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A colourful first birthday cake from Nab's Cake House", caption: "First birthday cake", href: "https://www.instagram.com/p/DfVuy8dG84j/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "A homeowners bento cake from Nab's Cake House", caption: "A bento cake", href: "https://www.instagram.com/reel/DfntTw9RlTi/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1920, alt: "A heart shaped celebration cake from Nab's Cake House", caption: "A celebration cake", href: "https://www.instagram.com/reel/DfIqHIpxCDO/" },
      { src: "/images/post-7.jpg", width: 888, height: 1572, alt: "A birthday cake from Nab's Cake House", caption: "A birthday cake", href: "https://www.instagram.com/reel/DfDjXcXR9wi/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nabscakehouse",
    embeds: ["https://www.instagram.com/p/DfqDrdGm8OS/", "https://www.instagram.com/p/DfLfm_em1KE/", "https://www.instagram.com/p/DfVuy8dG84j/"],
  },

  order: {
    label: "How to order",
    title: "Order with a form or a DM",
    intro: "Use the order form for custom cakes and cupcakes, then send a message. Bento cakes and brownies have their own forms. Delivery is available in Mississauga and the GTA.",
    dmMessage: "Hi Nab's Cake House! I would like to order.\nDate needed:\nCake or dessert:\nFlavour and design:",
    headerCtaLabel: "Order a cake",
    links: [
      { label: "Custom cake and cupcake form", href: "https://forms.gle/kUZwMrwVHiY2RMBu6" },
      { label: "Bento cake order form", href: "https://forms.gle/nbGsWUcyN3gCmWy47" },
      { label: "Brownie order form", href: "https://forms.gle/nR1d8biSkiungbw79" },
      { label: "All order forms", href: "https://taplink.cc/nabscakehouse" },
      { label: "Order by Instagram DM", href: "https://ig.me/m/nabscakehouse" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Submit the custom cake and cupcake form, then send a message on Instagram. Bento cakes and brownies have their own forms." },
    { q: "Are the cakes halal?", a: "Yes. Nab's Cake House makes halal custom cakes and desserts." },
    { q: "Do you deliver?", a: "Yes. Delivery is available in Mississauga and the GTA." },
    { q: "How much notice do bento cakes and brownies need?", a: "Bento cakes and brownies need at least 1 week notice. Bento cakes are 4 inch cakes that serve 1 to 3 people. Brownies are available in 16 or 32 pieces." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga and the GTA, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/nabscakehouse/" }],
  },

  seo: {
    title: "Nab's Cake House | Halal custom cakes in Mississauga and the GTA",
    description: "Halal luxury custom cakes in Mississauga and the GTA, including wedding cakes, bentos and dessert cups. Delivery available. Order by form or Instagram DM.",
    keywords: ["halal custom cakes Mississauga", "wedding cakes GTA", "Nab's Cake House"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

export const SALON = {
  name: "Blush & Bloom Studio",
  address: "12 Example Lane, Sample Suburb, Cape Town 8001 (placeholder)",
  phone: "+27 00 000 0000 (placeholder)",
  email: "hello@example.com (placeholder)",
  whatsapp: "https://wa.me/27000000000",
  hours: [
    ["Tue – Fri", "09:00 – 18:00"],
    ["Saturday", "08:30 – 15:00"],
    ["Sun – Mon", "Closed"],
  ],
  socials: ["Instagram", "Facebook", "TikTok"],
};

export const IMG = {
  hero: "https://images.unsplash.com/photo-1695527081848-1e46c06e6458?w=1000&h=1300&fit=crop&auto=format",
  interior: "https://images.unsplash.com/photo-1746723378067-83a345ff3160?w=900&h=700&fit=crop&auto=format",
  hair: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=700&h=900&fit=crop&auto=format",
  nails: "https://images.unsplash.com/photo-1754799670410-b282791342c3?w=700&h=900&fit=crop&auto=format",
  lashes: "https://images.unsplash.com/photo-1639629509821-c54cdd984227?w=700&h=900&fit=crop&auto=format",
  skin: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=700&h=900&fit=crop&auto=format",
  team: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1000&h=800&fit=crop&auto=format",
};

export const SERVICES = [
  { id: "hair", title: "Hair", from: 250, img: IMG.hair, alt: "Stylist holding a hair curler in the salon", blurb: "Precision cuts, glossy blowouts and colour that grows out beautifully." },
  { id: "nails", title: "Nails", from: 180, img: IMG.nails, alt: "Hands with soft pink and white heart nail art", blurb: "Classic manicures, long-wear gel and hand-painted nail art." },
  { id: "brows", title: "Brows & Lashes", from: 150, img: IMG.lashes, alt: "Close-up of an eye with long, defined lashes", blurb: "Shaped brows and lifted lashes for a soft, awake look." },
  { id: "skin", title: "Skin", from: 420, img: IMG.skin, alt: "Woman relaxing during a facial massage", blurb: "Restorative facials tailored to your skin, with time to switch off." },
];

export type PriceGroup = { category: string; items: [string, string, number][] };

export const PRICES: PriceGroup[] = [
  { category: "Hair", items: [
    ["Women's cut & style", "60 min", 350],
    ["Blowout", "45 min", 250],
    ["Full colour", "2 hr 30", 950],
    ["Balayage / highlights", "3 hr+", 1450],
    ["Deep conditioning treatment", "30 min", 300],
  ] },
  { category: "Nails", items: [
    ["Classic manicure", "45 min", 180],
    ["Gel manicure", "60 min", 280],
    ["Nail art (per set)", "30 min", 120],
    ["Spa pedicure", "60 min", 320],
  ] },
  { category: "Brows & Lashes", items: [
    ["Brow shape & tint", "40 min", 190],
    ["Brow lamination", "50 min", 350],
    ["Lash lift & tint", "60 min", 420],
    ["Classic lash extensions", "2 hr", 650],
  ] },
  { category: "Skin", items: [
    ["Signature facial", "60 min", 520],
    ["Hydrating glow facial", "75 min", 680],
    ["Back cleanse treatment", "45 min", 450],
  ] },
];

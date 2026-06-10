const assetBase = import.meta.env.BASE_URL;
const outfits = [
  {
    id: "khmer-dress",
    name: "Khmer Traditional Dress",
    culture: "Cambodia",
    occasion: "Ceremonial",
    description:
      "A traditional Cambodian outfit often worn during weddings, classical performances, and cultural celebrations.",
    history:
      "Khmer traditional clothing has deep roots in Cambodian history and is closely connected to royal ceremonies, classical dance, and cultural identity.",
    symbolism:
      "The gold color often represents elegance, celebration, respect, and importance during formal events.",
    styling:
      "This outfit is usually styled with detailed jewelry, silk fabric, and carefully arranged accessories.",
    culturalNote:
      "This outfit is connected to Cambodian cultural identity and formal celebration. It should be presented with respect for its traditional meaning.",
    shoppingSearch: "Cambodian traditional dress",
    image: `${assetBase}/outfits/khmer-dress.jpg`,
    overlay: `${assetBase}/outfits/khmer-dress.png`,
    tags: ["traditional", "ceremonial", "southeast-asia"],
  },
  {
    id: "kimono",
    name: "Kimono",
    culture: "Japan",
    occasion: "Formal",
    description:
      "A traditional Japanese garment worn for formal occasions, festivals, and cultural events.",
    history:
      "The kimono is one of Japan's most recognizable traditional garments and has been worn in different forms for centuries.",
    symbolism:
      "Kimono patterns, colors, and fabrics can represent season, age, status, and the type of occasion.",
    styling:
      "A kimono is commonly styled with an obi belt and traditional sandals, creating a graceful layered look.",
    culturalNote:
      "The kimono carries cultural and historical meaning in Japan. Patterns, colors, and styling may vary depending on season, age, and occasion.",
    shoppingSearch: "Japanese traditional kimono",
    image: `${assetBase}/outfits/kimono.jpg`,
    overlay: `${assetBase}/outfits/kimono.png`,
    tags: ["traditional", "formal", "east-asia"],
  },
  {
    id: "hanbok",
    name: "Hanbok",
    culture: "Korea",
    occasion: "Celebration",
    description:
      "A traditional Korean outfit known for its elegant colors and graceful silhouette, often worn during celebrations.",
    history:
      "Hanbok has been worn in Korea for generations and is strongly associated with holidays, weddings, and cultural ceremonies.",
    symbolism:
      "The bright colors and flowing shape often represent joy, harmony, and respect for tradition.",
    styling:
      "Hanbok is usually styled with a short jacket, full skirt or pants, and soft balanced colors.",
    culturalNote:
      "Hanbok is an important part of Korean cultural heritage and is often worn during holidays, weddings, and traditional celebrations.",
    shoppingSearch: "Korean traditional hanbok",
    image: `${assetBase}/outfits/hanbok.jpg`,
    overlay: `${assetBase}/outfits/hanbok.png`,
    tags: ["traditional", "celebration", "east-asia"],
  },
  {
    id: "sari",
    name: "Sari",
    culture: "India",
    occasion: "Festive",
    description:
      "A classic Indian garment worn in many styles across regions for everyday wear, ceremonies, and festivals.",
    history:
      "The sari is one of the oldest and most iconic garments in South Asia, with many regional draping styles.",
    symbolism:
      "Colors, fabric, and embroidery can represent celebration, family tradition, religion, and regional identity.",
    styling:
      "A sari is commonly styled with a blouse, jewelry, and pleated or draped fabric across the body.",
    culturalNote:
      "The sari has many regional styles across South Asia. Its fabric, drape, and design can reflect identity, tradition, and occasion.",
    shoppingSearch: "Indian traditional sari",
    image: `${assetBase}/outfits/sari.jpg`,
    overlay: `${assetBase}/outfits/sari.png`,
    tags: ["traditional", "festive", "south-asia"],
  },
];

export default outfits;
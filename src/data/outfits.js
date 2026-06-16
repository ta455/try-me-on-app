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
  {
    id: "ao-dai",
    name: "Áo Dài",
    culture: "Vietnam",
    occasion: "Formal",
    description: "A slim-fitting silk tunic worn over wide-leg trousers, iconic in Vietnamese culture.",
    history: "Dating back to the 18th century, the Áo Dài evolved from Chinese-influenced robes into a distinctly Vietnamese silhouette. It became a national symbol during the 20th century.",
    symbolism: "Represents femininity, elegance, and Vietnamese national identity. Often worn in white by students as a symbol of purity.",
    styling: "Typically made from silk or chiffon in pastel or bold colors. Worn with matching trousers and sometimes a conical hat called a nón lá.",
    culturalNote: "The Áo Dài is deeply tied to Vietnamese identity. Wearing it is considered a sign of respect and pride, especially during Tết (Lunar New Year) and national holidays.",
    shoppingSearch: "Vietnamese ao dai traditional dress",
    image: `${assetBase}outfits/ao-dai.jpg`,
    overlay: `${assetBase}outfits/ao-dai.png`,
    tags: ["traditional", "formal", "southeast-asia", "vietnam"],
  },
  {
    id: "agbada",
    name: "Agbada",
    culture: "Nigeria",
    occasion: "Ceremonial",
    description: "A flowing wide-sleeved robe worn by men across West Africa, often richly embroidered.",
    history: "Originating among the Yoruba, Hausa, and other West African peoples, the Agbada has been worn for centuries as a garment of prestige and authority.",
    symbolism: "Represents wealth, status, and cultural pride. The elaborate embroidery at the neck and chest, called aso-oke, is a mark of craftsmanship and social standing.",
    styling: "Usually a three-piece set — the large outer robe, an inner tunic, and trousers — made from rich fabrics like damask, brocade, or aso-oke.",
    culturalNote: "The Agbada is worn at major life events including weddings, naming ceremonies, and funerals. Wearing one is a statement of cultural identity and respect for tradition.",
    shoppingSearch: "Nigerian agbada traditional robe West Africa",
    image: `${assetBase}outfits/agbada.jpg`,
    overlay: `${assetBase}outfits/agbada.png`,
    tags: ["ceremonial", "traditional", "west-africa", "nigeria"],
  },
  {
    id: "qipao",
    name: "Qipao (Cheongsam)",
    culture: "China",
    occasion: "Formal",
    description: "A form-fitting silk dress with a high collar and side slits, one of China's most recognised traditional garments.",
    history: "The modern Qipao evolved in 1920s Shanghai from the looser Manchu robe. It became a symbol of cosmopolitan Chinese fashion blending Eastern tradition with Western tailoring.",
    symbolism: "Represents elegance, femininity, and Chinese cultural heritage. The high collar and fitted shape reflect ideals of grace and refinement.",
    styling: "Made from silk, brocade, or satin, often featuring floral or dragon embroidery and traditional frog button closures called pánkòu.",
    culturalNote: "The Qipao is worn at weddings, formal banquets, and cultural celebrations. It is considered one of China's national dress symbols and is recognised worldwide.",
    shoppingSearch: "Chinese qipao cheongsam traditional dress",
    image: `${assetBase}outfits/qipao.jpg`,
    overlay: `${assetBase}outfits/qipao.png`,
    tags: ["formal", "traditional", "east-asia", "china"],
  },
];

export default outfits;
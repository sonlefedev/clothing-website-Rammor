import { v4 } from "uuid";

const FakeDataByMap = new Map<string, IDataProduct>();

import nostalgia_p_1_1 from "../static/img/FakeData/nostalgia_p_1/_1.jpg";
import nostalgia_p_1_2 from "../static/img/FakeData/nostalgia_p_1/_2.jpg";
import nostalgia_p_1_3 from "../static/img/FakeData/nostalgia_p_1/_3.jpg";
import nostalgia_p_2_1 from "../static/img/FakeData/nostalgia_p_2/_1.jpg";
import nostalgia_p_2_2 from "../static/img/FakeData/nostalgia_p_2/_2.jpg";
import nostalgia_p_3_1 from "../static/img/FakeData/nostalgia_p_3/_1.jpg";
import nostalgia_p_3_2 from "../static/img/FakeData/nostalgia_p_3/_2.jpg";
import nostalgia_p_3_3 from "../static/img/FakeData/nostalgia_p_3/_3.jpg";
import nostalgia_p_4_2 from "../static/img/FakeData/nostalgia_p_4/_2.jpg";
import nostalgia_p_4_1 from "../static/img/FakeData/nostalgia_p_4/_1.jpg";
import basic_p_1_1 from "../static/img/FakeData/basic_p_1/_1.jpg";
import basic_p_1_2 from "../static/img/FakeData/basic_p_1/_2.jpg";
import basic_p_1_3 from "../static/img/FakeData/basic_p_1/_3.jpg";
import basic_p_1_4 from "../static/img/FakeData/basic_p_1/_4.jpg";
import basic_p_1_5 from "../static/img/FakeData/basic_p_1/_5.jpg";
import basic_p_2_1 from "../static/img/FakeData/basic_p_2/_1.jpg";
import basic_p_2_2 from "../static/img/FakeData/basic_p_2/_2.jpg";
import basic_p_2_3 from "../static/img/FakeData/basic_p_2/_3.jpg";
import basic_p_2_4 from "../static/img/FakeData/basic_p_2/_4.jpg";
import basic_p_2_5 from "../static/img/FakeData/basic_p_2/_5.jpg";
import basic_p_3_1 from "../static/img/FakeData/basic_p_3/_1.jpg";
import basic_p_3_2 from "../static/img/FakeData/basic_p_3/_2.jpg";
import basic_p_3_3 from "../static/img/FakeData/basic_p_3/_3.jpg";
import basic_p_3_4 from "../static/img/FakeData/basic_p_3/_4.jpg";
import basic_p_3_5 from "../static/img/FakeData/basic_p_3/_5.jpg";
import basic_p_4_1 from "../static/img/FakeData/basic_p_4/_1.jpg";
import basic_p_4_2 from "../static/img/FakeData/basic_p_4/_2.jpg";
import basic_p_4_3 from "../static/img/FakeData/basic_p_4/_3.jpg";
import basic_p_4_4 from "../static/img/FakeData/basic_p_4/_4.jpg";
import basic_p_4_5 from "../static/img/FakeData/basic_p_4/_5.jpg";
import basic_p_4_6 from "../static/img/FakeData/basic_p_4/_6.jpg";
import vibos_p_1_1 from "../static/img/FakeData/vibos_p_1/_1.jpg";
import vibos_p_1_2 from "../static/img/FakeData/vibos_p_1/_2.jpg";
import vibos_p_1_3 from "../static/img/FakeData/vibos_p_1/_3.jpg";
import vibos_p_1_4 from "../static/img/FakeData/vibos_p_1/_4.jpg";
import vibos_p_1_5 from "../static/img/FakeData/vibos_p_1/_5.jpg";
import vibos_p_2_1 from "../static/img/FakeData/vibos_p_2/_1.jpg";
import vibos_p_2_2 from "../static/img/FakeData/vibos_p_2/_2.jpg";
import vibos_p_2_3 from "../static/img/FakeData/vibos_p_2/_3.jpg";
import vibos_p_2_4 from "../static/img/FakeData/vibos_p_2/_4.jpg";
import vibos_p_2_5 from "../static/img/FakeData/vibos_p_2/_5.jpg";
import vibos_p_3_1 from "../static/img/FakeData/vibos_p_3/_1.jpg";
import vibos_p_3_2 from "../static/img/FakeData/vibos_p_3/_2.jpg";
import vibos_p_3_3 from "../static/img/FakeData/vibos_p_3/_3.jpg";
import vibos_p_3_4 from "../static/img/FakeData/vibos_p_3/_4.jpg";
import vibos_p_3_5 from "../static/img/FakeData/vibos_p_3/_5.jpg";
import vibos_p_4_1 from "../static/img/FakeData/vibos_p_4/_1.jpg";
import vibos_p_4_2 from "../static/img/FakeData/vibos_p_4/_2.jpg";
import vibos_p_4_3 from "../static/img/FakeData/vibos_p_4/_3.jpg";
import vibos_p_4_4 from "../static/img/FakeData/vibos_p_4/_4.jpg";

// nostalgia

FakeDataByMap.set("nostalgia_p_1", {
    id: "nostalgia_p_1",
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🌄Do you ever feel nostalgic about summer? Let everybody know you're all about that sweet summervibes with this sweatshirt🌴🌞`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Sweatshirt tends to be smaller than expected, its recommended to take a size bigger!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `• 85% organic ring-spun combed cotton, 15% recycled polyester`,
        },
        {
            id: v4(),
            text: `• Fabric weight: 350 g/m² (5.3 oz/yd²)`,
        },
        {
            id: v4(),
            text: `• Relaxed fit`,
        },
        {
            id: v4(),
            text: `• Set-in sleeves`,
        },
        {
            id: v4(),
            text: `• 1×1 rib at neck collar, sleeve hem, and bottom hem`,
        },
        {
            id: v4(),
            text: `• Single-needle topstitch at neck collar`,
        },
        {
            id: v4(),
            text: `• Double-needle topstitch on the sleeves and bottom hems`,
        },
        {
            id: v4(),
            text: `• Inside herringbone back neck tape`,
        },
        {
            id: v4(),
            text: `• Self-fabric half moon at back neck`,
        },
        {
            id: v4(),
            text: `• Blank product sourced from Bangladesh`,
        },
    ],
    price: `€45,99 EUR`,
    thumb: [nostalgia_p_1_1, nostalgia_p_1_2, nostalgia_p_1_3],
    title: `Summer Nostalgia Eco Sweatshirt Black`,
    collectionName: `nostalgia`,
});
FakeDataByMap.set("nostalgia_p_2", {
    id: "nostalgia_p_2",
    title: `Summer Nostalgia Unisex Organic Cotton T-Shirt White`,
    price: `€29,95 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["T-shirt"],
    description: [
        {
            id: v4(),
            text: `🌄Do you ever feel nostalgic about summer? Let everybody know you're all about that sweet summervibes with this t-shirt🌴🌞`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex organic t-shirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Its recommended to take a look into the size guide!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `Made from 100% organic ring-spun cotton, this unisex t-shirt is a total must-have. It's high-quality, super comfy, and best of all—eco-friendly.`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `• 100% organic ring-spun cotton`,
        },
        {
            id: v4(),
            text: `• Fabric weight: 5.3 oz/yd² (180 g/m²)`,
        },
        {
            id: v4(),
            text: `• Single jersey`,
        },
        {
            id: v4(),
            text: `• Medium fit`,
        },
        {
            id: v4(),
            text: `• Set-in sleeves`,
        },
        {
            id: v4(),
            text: `• 1 × 1 rib at collar`,
        },
        {
            id: v4(),
            text: `• Wide double-needle topstitch on the sleeves and bottom hems`,
        },
        {
            id: v4(),
            text: `• Self-fabric neck tape (inside, back of the neck)`,
        },
        {
            id: v4(),
            text: `• Blank product sourced from China or Bangladesh`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `The sizes correspond to a smaller size in the US market, so US customers should order a size up.`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `This product is made especially for you as soon as you place an order, which is why it takes us a bit longer to deliver it to you. Making products on demand instead of in bulk helps reduce overproduction, so thank you for making thoughtful purchasing decisions!`,
        },
    ],
    thumb: [nostalgia_p_2_1, nostalgia_p_2_2],
    collectionName: `nostalgia`,
});
FakeDataByMap.set("nostalgia_p_3", {
    id: "nostalgia_p_3",
    title: `Summer Nostalgia Eco Sweatshirt Pink`,
    price: `€45,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🌄Do you ever feel nostalgic about summer? Let everybody know you're all about that sweet summervibes with this sweatshirt🌴🌞`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Sweatshirt tends to be smaller than expected, its recommended to take a size bigger!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `• 85% organic ring-spun combed cotton, 15% recycled polyester`,
        },
        {
            id: v4(),
            text: `• Fabric weight: 350 g/m² (5.3 oz/yd²)`,
        },
        {
            id: v4(),
            text: `• Relaxed fit`,
        },
        {
            id: v4(),
            text: `• Set-in sleeves`,
        },
        {
            id: v4(),
            text: `• 1×1 rib at neck collar, sleeve hem, and bottom hem`,
        },
        {
            id: v4(),
            text: `• Single-needle topstitch at neck collar`,
        },
        {
            id: v4(),
            text: `• Double-needle topstitch on the sleeves and bottom hems`,
        },
        {
            id: v4(),
            text: `• Inside herringbone back neck tape`,
        },
        {
            id: v4(),
            text: `• Self-fabric half moon at back neck`,
        },
        {
            id: v4(),
            text: `• Blank product sourced from Bangladesh`,
        },
    ],
    thumb: [nostalgia_p_3_1, nostalgia_p_3_2, nostalgia_p_3_3],
    collectionName: `nostalgia`,
});
FakeDataByMap.set("nostalgia_p_4", {
    id: "nostalgia_p_4",
    title: `Summer Nostalgia Unisex Organic Cotton T-Shirt Blue`,
    price: `€29,95 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🌄Do you ever feel nostalgic about summer? Let everybody know you're all about that sweet summervibes with this t-shirt🌴🌞`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex organic t-shirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Its recommended to take a look into the size guide!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `Made from 100% organic ring-spun cotton, this unisex t-shirt is a total must-have. It's high-quality, super comfy, and best of all—eco-friendly.`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `• 100% organic ring-spun cotton`,
        },
        {
            id: v4(),
            text: `• Fabric weight: 5.3 oz/yd² (180 g/m²)`,
        },
        {
            id: v4(),
            text: `• Single jersey`,
        },
        {
            id: v4(),
            text: `• Medium fit`,
        },
        {
            id: v4(),
            text: `• Set-in sleeves`,
        },
        {
            id: v4(),
            text: `• 1 × 1 rib at collar`,
        },
        {
            id: v4(),
            text: `• Wide double-needle topstitch on the sleeves and bottom hems`,
        },
        {
            id: v4(),
            text: `• Self-fabric neck tape (inside, back of the neck)`,
        },
        {
            id: v4(),
            text: `• Blank product sourced from China or Bangladesh`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `The sizes correspond to a smaller size in the US market, so US customers should order a size up.`,
            pb: "10px",
        },
        {
            id: v4(),
            text: `This product is made especially for you as soon as you place an order, which is why it takes us a bit longer to deliver it to you. Making products on demand instead of in bulk helps reduce overproduction, so thank you for making thoughtful purchasing decisions!`,
        },
    ],
    thumb: [nostalgia_p_4_2, nostalgia_p_4_1],
    collectionName: `nostalgia`,
});

// basic

FakeDataByMap.set("basic_p_1", {
    id: "basic_p_1",
    title: `Rammor Logo Embroidery Eco Sweatshirt`,
    price: `€45,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `Rammor loves the Idea and the feeling of Summer, enjoy his Music - feel the Vibe.`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Sweatshirt tends to be smaller than expected, its recommended to take a size bigger!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `• 85% organic ring-spun combed cotton, 15% recycled polyester`,
        },
        {
            id: v4(),
            text: `• Fabric weight: 350 g/m² (5.3 oz/yd²)`,
        },
        {
            id: v4(),
            text: `• Relaxed fit`,
        },
        {
            id: v4(),
            text: `• Set-in sleeves`,
        },
        {
            id: v4(),
            text: `• 1×1 rib at neck collar, sleeve hem, and bottom hem`,
        },
        {
            id: v4(),
            text: `• Single-needle topstitch at neck collar`,
        },
        {
            id: v4(),
            text: `• Double-needle topstitch on the sleeves and bottom hems`,
        },
        {
            id: v4(),
            text: `• Inside herringbone back neck tape`,
        },
        {
            id: v4(),
            text: `• Self-fabric half moon at back neck`,
        },
        {
            id: v4(),
            text: `• Blank product sourced from Bangladesh`,
        },
    ],
    thumb: [basic_p_1_1, basic_p_1_2, basic_p_1_3, basic_p_1_4, basic_p_1_5],
    collectionName: `basic`,
});
FakeDataByMap.set("basic_p_2", {
    id: "basic_p_2",
    title: `Find Me Fleece Hoodie`,
    price: `€34,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    soldOld: true,
    description: [
        {
            id: v4(),
            text: `🌊Lost between Music and Vacation, find Me where the Music meets the Ocean. Happy Summer.🌊`,
        },
        {
            id: v4(),
            text: `Choose this unisex fleece hoodie and enjoy all it has to offer. It's soft, comfy, and can be easily styled with a pair of jeans and sneakers for a cozy, yet stylish look.`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `50% cotton, 50% polyester (up to 5% recycled polyester, made from plastic bottles)
            Fabric weight: 7.8 oz/y² (264.5 g/m²)
            Patented low-pill, high-stitch density PrintPro® XP fleece
            Cover-stitched armholes and waistband
            Ribbed cuffs and waistband
            Matching drawcord
            Front pouch pocket
            Blank product sourced from El Salvador, Guatemala, Honduras, or Nicaragua`,
        },
    ],
    thumb: [basic_p_2_1, basic_p_2_2, basic_p_2_3, basic_p_2_4, basic_p_2_5],
    collectionName: `basic`,
});
FakeDataByMap.set("basic_p_3", {
    id: "basic_p_3",
    title: `Palmtree Embroidery Dad Hat`,
    price: `€29,99 EUR`,
    productType: ["hat"],
    description: [
        {
            id: v4(),
            text: `🌴 Deep House feels the best, sitting under a palmtree. Get yours to yourself at home. 🌴`,
        },
        {
            id: v4(),
            text: `Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `100% chino cotton twill
Green Camo color is 35% chino cotton twill, 65% polyester
Unstructured, 6-panel, low-profile
6 embroidered eyelets
3 ⅛” (7.6 cm) crown
Adjustable strap with antique buckle
Blank product sourced from Vietnam or Bangladesh`,
        },
    ],
    thumb: [basic_p_3_1, basic_p_3_2, basic_p_3_3, basic_p_3_4, basic_p_3_5],
    collectionName: `basic`,
});
FakeDataByMap.set("basic_p_4", {
    id: "basic_p_4",
    title: `Rammor Logo T-Shirt`,
    price: `€24,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["T-shirt"],
    description: [
        {
            id: v4(),
            text: `Rammor loves the Idea and the feeling of Summer, enjoy his Music - feel the Vibe.`,
        },
        {
            id: v4(),
            text: `Elevate your outfit with the men’s premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `100% combed ring-spun cotton
            Charcoal Heather and Carbon Grey is 60% cotton and 40% polyester
            Fabric weight: 6.5 oz/yd² (220 g/m²)
            20 singles
            Regular fit
            Side-seamed construction
            1 × 1 rib at collar
            Single-needle edge stitch 7/8″
            Blank product sourced from Pakistan`,
        },
    ],
    thumb: [
        basic_p_4_1,
        basic_p_4_2,
        basic_p_4_3,
        basic_p_4_4,
        basic_p_4_5,
        basic_p_4_6,
    ],
    collectionName: `basic`,
});

// vibes

FakeDataByMap.set("vibes_p_1", {
    id: "vibes_p_1",
    title: `Summer Vibing Eco Sweatshirt`,
    price: `€45,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🌞No better vibe, than the Summer Vibe! Best outfit to listen to Rammor Music!🌴🌞`,
        },
        {
            id: v4(),
            text: `Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic and recycled materials, this sweatshirt is durable, comfy, and extra soft.`,
        },
    ],
    description_notes: [
        {
            id: v4(),
            text: `Sweatshirt tends to be smaller than expected, its recommended to take a size bigger!`,
        },
    ],
    more_about_this_product: [
        {
            id: v4(),
            text: `• 85% organic ring-spun combed cotton, 15% recycled polyester
            • Fabric weight: 350 g/m² (5.3 oz/yd²)
            • Relaxed fit
            • Set-in sleeves
            • 1×1 rib at neck collar, sleeve hem, and bottom hem
            • Single-needle topstitch at neck collar
            • Double-needle topstitch on the sleeves and bottom hems
            • Inside herringbone back neck tape
            • Self-fabric half moon at back neck
            • Blank product sourced from Bangladesh`,
        },
    ],
    thumb: [vibos_p_1_1, vibos_p_1_2, vibos_p_1_3, vibos_p_1_4, vibos_p_1_5],
    collectionName: `vibes`,
});
FakeDataByMap.set("vibes_p_2", {
    id: "vibes_p_2",
    title: `Summer Vibes Only Fleece Hoodie`,
    price: `€34,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🌞Feel the Summer Vibes Only - all year long! 🌞`,
        },
        {
            id: v4(),
            text: `Choose this unisex fleece hoodie and enjoy all it has to offer. It's soft, comfy, and can be easily styled with a pair of jeans and sneakers for a cozy, yet stylish look.`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `50% cotton, 50% polyester (up to 5% recycled polyester, made from plastic bottles)
            Fabric weight: 7.8 oz/y² (264.5 g/m²)
            Patented low-pill, high-stitch density PrintPro® XP fleece
            Cover-stitched armholes and waistband
            Ribbed cuffs and waistband
            Matching drawcord
            Front pouch pocket
            Blank product sourced from El Salvador, Guatemala, Honduras, or Nicaragua`,
        },
    ],
    thumb: [vibos_p_2_1, vibos_p_2_2, vibos_p_2_3, vibos_p_2_4, vibos_p_2_5],
    collectionName: `vibes`,
});
FakeDataByMap.set("vibes_p_3", {
    id: "vibes_p_3",
    title: `Summer Vibes Only Fleece Hoodie`,
    price: `€34,99 EUR`,
    size: ["s", "m", "l", "xl", "2xl"],
    productType: ["sweatshirt"],
    description: [
        {
            id: v4(),
            text: `🏖️One place where there are no worries: the beach.🏖️`,
        },
        {
            id: v4(),
            text: `Choose this unisex fleece hoodie and enjoy all it has to offer. It's soft, comfy, and can be easily styled with a pair of jeans and sneakers for a cozy, yet stylish look.`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `50% cotton, 50% polyester (up to 5% recycled polyester, made from plastic bottles)
            Fabric weight: 7.8 oz/y² (264.5 g/m²)
            Patented low-pill, high-stitch density PrintPro® XP fleece
            Cover-stitched armholes and waistband
            Ribbed cuffs and waistband
            Matching drawcord
            Front pouch pocket
            Blank product sourced from El Salvador, Guatemala, Honduras, or Nicaragua`,
        },
    ],
    thumb: [vibos_p_3_1, vibos_p_3_2, vibos_p_3_3, vibos_p_3_4, vibos_p_3_5],
    collectionName: `vibes`,
});
FakeDataByMap.set("vibes_p_4", {
    id: "vibes_p_4",
    title: `Sun Embroidery Dad Hat`,
    price: `€29,99 EUR`,
    productType: ["hat"],
    description: [
        {
            id: v4(),
            text: `☀️What feels better than the sun tickling the skin. No better sign for a good mood.☀️`,
        },
        {
            id: v4(),
            text: `Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.`,
        },
    ],
    description_notes: [],
    more_about_this_product: [
        {
            id: v4(),
            text: `100% chino cotton twill
            Green Camo color is 35% chino cotton twill, 65% polyester
            Unstructured, 6-panel, low-profile
            6 embroidered eyelets
            3 ⅛” (7.6 cm) crown
            Adjustable strap with antique buckle
            Blank product sourced from Vietnam or Bangladesh`,
        },
    ],
    thumb: [vibos_p_4_1, vibos_p_4_2, vibos_p_4_3, vibos_p_4_4],
    collectionName: `vibes`,
});

export { FakeDataByMap };

export default undefined;

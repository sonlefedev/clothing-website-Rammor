interface IDataProduct {
    id: string;
    size?: string[];
    productType: string[];
    description: {id: string, text: string}[];
    description_notes: {id: string, text: string}[];
    more_about_this_product: {id: string, text: string, pb?: string}[];
    price: string;
    title: string;
    thumb: string[];
    collectionName: string;
    soldOld?: boolean;
} 
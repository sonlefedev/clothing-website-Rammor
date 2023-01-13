import { v4 } from "uuid";

interface IMenus {
    id: string;
    link: string;
    text: string;
}
const menus: IMenus[] = [
    { id: v4(), link: "/collections/all", text: "all collection" },
    {
        id: v4(),
        link: "/collections/basic-collection",
        text: "basic collection",
    },
    {
        id: v4(),
        link: "/collections/summer-vibes",
        text: "summer vibes collection",
    },
    {
        id: v4(),
        link: "/collections/summer-nostalgia-collection",
        text: "summer nostalgia collection",
    },
];

export default menus;

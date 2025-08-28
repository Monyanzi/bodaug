import tribesData from "@/data/tribes.json";
import storiesData from "@/data/stories.json";
import foodData from "@/data/food.json";
import attireData from "@/data/attire.json";
import materialsData from "@/data/materials.json";
import namesData from "@/data/names.json";

export interface SearchableItem {
  title: string;
  description: string;
  href: string;
  category: string;
}

const allContent: SearchableItem[] = [
  ...tribesData.map(item => ({
    title: item.name,
    description: item.summary,
    href: item.href,
    category: "Tribes",
  })),
  ...storiesData.map(item => ({
    title: item.title,
    description: item.description,
    href: item.href,
    category: "Stories",
  })),
  ...foodData.map(item => ({
    title: item.title,
    description: item.teaser,
    href: item.link,
    category: "Food",
  })),
  ...attireData.map(item => ({
    title: item.title,
    description: item.teaser,
    href: item.link,
    category: "Attire",
  })),
  ...materialsData.map(item => ({
    title: item.title,
    description: item.teaser,
    href: item.link,
    category: "Materials",
  })),
  ...namesData.map(item => ({
    title: item.title,
    description: item.teaser,
    href: item.link,
    category: "Names",
  })),
];

export const searchableData = allContent;

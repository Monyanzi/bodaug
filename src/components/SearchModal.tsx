import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchableData, SearchableItem } from "@/lib/search";
import { FileText, Users, Utensils, Shirt, Home, Book } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons: { [key: string]: React.ElementType } = {
  Tribes: Users,
  Stories: FileText,
  Food: Utensils,
  Attire: Shirt,
  Materials: Home,
  Names: Book,
};

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const navigate = useNavigate();

  const handleSelect = (item: SearchableItem) => {
    navigate(item.href);
    onClose();
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder="Search for a tribe, story, food..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(
          searchableData.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {} as { [key: string]: SearchableItem[] })
        ).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => {
              const Icon = categoryIcons[category] || FileText;
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item)}
                  value={`${item.title} ${item.description}`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

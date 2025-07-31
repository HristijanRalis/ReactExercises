import { useState, type FormEvent } from "react";

interface SearchProps {
  onSearchClick: (searchItem: string) => void;
}

export const Search = ({ onSearchClick }: SearchProps) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchClick = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearchClick(searchItem.trim().toLowerCase());
  };
  return (
    <>
      <form onSubmit={handleSearchClick}>
        <label>Search</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button>Search</button>
      </form>
    </>
  );
};

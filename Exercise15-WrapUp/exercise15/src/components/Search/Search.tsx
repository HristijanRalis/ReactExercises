import { useState } from "react";

interface SearchProps {
  handleSearch: (searchTerm: string) => void;
}

export const Search = ({ handleSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSearchClick}>
      <input
        value={searchTerm}
        type="text"
        id="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

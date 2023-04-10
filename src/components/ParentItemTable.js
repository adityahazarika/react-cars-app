import { SearchBar } from "./SearchBar";
import { ItemTable } from "./ItemTable";
import { useState } from 'react';

export function ParentItemTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [filter, setfilter] = useState("model");

  return (
    <div>
      <SearchBar   filterText={filterText} filter={filter} onFilterTextChange={setFilterText} onFilterChange={setfilter}/>
      <ItemTable products={products} filter={filter}  filterText={filterText} />
    </div>
  );
}
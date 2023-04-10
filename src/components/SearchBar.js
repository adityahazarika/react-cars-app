export function SearchBar({
    filterText,
    onFilterTextChange,
    onFilterChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            &emsp;<label>Filter Options : &emsp;</label>
            <label><input type="radio" id="model" name="filterby" value="model"
                onChange={(e) => onFilterChange(e.target.value)} />Model
            </label>
            <label>
                <input type="radio" id="year" name="filterby" value="year"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Year</label>
            <label>
                <input type="radio" id="company" name="filterby" value="company"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Company</label>
            <label>
                <input type="radio" id="price" name="filterby" value="sellingPrice"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Price</label>

        </form>
    );
}
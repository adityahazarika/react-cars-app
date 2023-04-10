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
            <label><input type="radio" id="html" name="fav_language" value="model" checked
                onChange={(e) => onFilterChange(e.target.value)} />Model
            </label>
            <label>
                <input type="radio" id="css" name="fav_language" value="year"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Year</label>
            <label>
                <input type="radio" id="javascript" name="fav_language" value="company"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Company</label>
            <label>
                <input type="radio" id="javascript" name="fav_language" value="sellingPrice"
                    onChange={(e) => onFilterChange(e.target.value)} />
                Price</label>

        </form>
    );
}
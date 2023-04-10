export function ItemRow({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td><th><img src={require(`../assets/images/${product.id}.jpg`)} alt="Girl in a jacket" width="75px" height="75px" /></th>
            </td>
            <td>{product.year}</td>
            <td>{product.company}</td>
            <td>{product.model}</td>
            <td>{product.sellingPrice}</td>
        </tr>
    );
}
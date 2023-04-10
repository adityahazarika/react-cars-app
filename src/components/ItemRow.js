export function ItemRow({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td><img src={require(`../assets/images/${product.id}.jpg`)} alt="Girl in a jacket" width="75px" height="75px" />
            </td>
            <td>{product.year}</td>
            <td>{product.company}</td>
            <td>{product.model}</td>
            <td>{product.sellingPrice}</td>
        </tr>
    );
}
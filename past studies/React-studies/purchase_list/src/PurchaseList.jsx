import { PurchaseItem } from "./PurchaseItem"

export const PurchaseList = ({list, onDelete}) => {
    console.log(Object.keys( list))
    return (
        <ul className="term-list">
            {list.map((value) =>(
            <li className="term-list__item" key={value.id}>
                <PurchaseItem
                    title = {value.title}
                    status = {value.status}
                    onDelete={onDelete}
                />
            </li>
        ))}

        </ul>
    )

}
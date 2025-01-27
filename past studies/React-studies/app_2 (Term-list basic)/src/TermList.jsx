import { TermCard } from "./TermCard"
import "./TermList.css"
export const TermList = ({terms, onDelete}) => {

    return (
        <ul className="term-list">
            {terms.map((value) =>(
            <li className="term-list__item" key={value.id}>
                <TermCard
                    title = {value.title}
                    description = {value.description}
                    id = {value.id}
                    onDelete = {onDelete}
                />
            </li>
        ))}

        </ul>
    )
}
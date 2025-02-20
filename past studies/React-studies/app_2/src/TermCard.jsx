import "./TermCard.css" ;
export const TermCard = ({title, description, id, onDelete}) => {

    const handleDeleteClick = () =>{
        onDelete(id);
    };

    return (
        <div className="term-card">
            <h2 className="term-card__title">{title}</h2>
            {description && (<p className="term-card__description">{description}</p>)}
            <button type="button" className="term-card__delete" onClick={handleDeleteClick}>delete</button>
        </div>
    )
}
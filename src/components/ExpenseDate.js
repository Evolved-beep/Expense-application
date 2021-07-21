import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const day = props.date.toLocaleString('fr-FR',{ day: '2-digit'});
    const month = props.date.toLocaleString('fr-FR', {month: 'long'});
    const year = props.date.toLocaleString('fr-FR',{year: 'numeric'});

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

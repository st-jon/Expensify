import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const ExpenseListItem = ({ id, description, amount, createdAt}) => ( 
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).locale('fr').format('LL')}
                </span>
            </div>
            <h3 className="list-item__data">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount / 100)} </h3>
        </Link>
)

export default ExpenseListItem
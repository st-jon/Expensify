import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const ExpenseListItem = ({ id, description, amount, createdAt}) => ( 
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
            <p>
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount / 100)}
            // 
            {moment(createdAt).locale('fr').format('LL')}
            </p>
    </div>
)

export default ExpenseListItem
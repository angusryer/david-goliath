import React from 'react'
import User from '../User';
import Comparison from '../Comparison'
import './Visualization.scss';

export const Visualization = ({user, comparison}) => {
    return (
        <div className="visual">
            <User user={user} />
            <Comparison comparison={comparison} />
        </div>
    )
}

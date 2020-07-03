import React from 'react'
import User from '../User';
import Comparison from '../Comparison'
import './Visualization.scss';

export const Visualization = () => {
    return (
        <div className="visual">
            <User />
            <Comparison />
        </div>
    )
}

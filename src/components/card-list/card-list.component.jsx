import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className = 'card-list'>
        {props.monsters.map(monster => (
            // pass every single monster as an 'props' to the Card
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
)
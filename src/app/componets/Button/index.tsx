import { ReactNode } from 'react';

import style from './style.module.css';

interface IButton {
    children: ReactNode
}

export default function Button({ children }:IButton) {

    return(
        <button className={style.container} >
            {children}
        </button>
    )
}
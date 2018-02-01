import * as React from 'react';
import * as style from './Header.css';
/**
 * @author kozakluke@gmail.com
 */
export default function Header() {
    return (
        <div className={style.header}>
            <p className={style.name}>Tomasz Swirzewski</p>
            <p className={style.phone}>phone: +48 503 995 015</p>
            <p className={style.email}>email: t.swizewski@gmail.com</p>
        </div>
    );
}

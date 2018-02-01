import * as React from 'react';
import * as style from './Header.css';
/**
 * @author kozakluke@gmail.com
 */
export default function Header()
{
    return (
        <div className={style.header}>
            <h1 className={style.name}>TOMASZ ŚWIŻEWSKI</h1>
            <div className={style.phone}>
                <span>&#xe901;</span>
                <a href="tel:+48 503 995 015">
                    +48 503 995 015
                </a>
            </div>
            <div className={style.email}>
                <span>&#xe900;</span>
                <a href="mailto:t.swizewski@gmail.com">
                    t.swizewski@gmail.com
                </a>
            </div>
        </div>
    );
}

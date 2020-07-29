import React from 'react';
import '../../../Menu/Menu.css'

export default function ButtonLink (props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'


const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img src={props.img} alt='avatar' />
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogsItem;
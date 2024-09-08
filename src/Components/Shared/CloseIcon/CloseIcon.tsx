import {ReactComponent as Close} from './close-circle-svgrepo-com.svg';
import style from './CloseIcon.module.scss';

export function CloseIcon(){
    return(
        <div className={style.close}>
            <Close />
        </div>
    );
}
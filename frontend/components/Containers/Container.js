import classes from '../../styles/Containers.module.css';

export default function Container(props) {
    return (
        <div className={`${classes.container} ${props.className}`}>
            {props.children}
        </div>
    );
}

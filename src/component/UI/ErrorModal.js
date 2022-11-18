import classes from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'

const ErrorModal=(props)=>{

return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
            <p><b>{props.msg}</b></p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
)
}


export default ErrorModal
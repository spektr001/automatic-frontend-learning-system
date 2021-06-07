import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import LogIn from '../../../assets/images/enter.png'
import clsObj from './header.module.scss'
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Button, DialogContentText, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    modalBlock: {
        backgroundColor: "transparent",
        color: "#308446",
    }
})

export function LogInBtn() {

    const cls = useStyles()

    const [modalOpen, setModal] = useState(false);
    const [isRedirect, setRedirect] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        if (name === "") {
            alert("Введи, будь-ласка, своє ім'я")
        } else {
            setRedirect(true)
        }
    }

    const handleClose = () => {
        setModal(false)
    }

    const redirect = () => {
        if (isRedirect) {
            return (
                <Redirect to="/dashboard" />
            )
        }
    }

    return (
        <>
            <a className="user-block_add-btn" onClick={() => setModal(true)}>
                <img src={LogIn} alt="Login" className={clsObj.logIn__img} />
            </a>
            {redirect()}
            <Dialog open={modalOpen} onClose={handleClose} aria-labeledby="form-dialog-title">
                <DialogTitle className={cls.modalBlock} id="form-dialog-title">Введи своє ім&apos;я</DialogTitle>
                <DialogContent className={cls.modalBlock}>
                    <DialogContentText className={cls.modalBlock}>Як я можу до тебе звертатись?</DialogContentText>
                    <TextField
                        className={cls.modalBlock}
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Імя"
                        type="text"
                        value={name}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions className={cls.modalBlock}>
                    <Button onClick={handleSubmit} color="primary">Підтвердити</Button>
                    <Button onClick={handleClose} color="secondary">Відмінити</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
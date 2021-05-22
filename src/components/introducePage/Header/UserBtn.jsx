import React, { useState } from 'react';
import clsObj from './header.module.scss'
import User from '../../../assets/images/user.png'
import langSwitcher from '../../languageSwitcher'
import { Button, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  modalBlock: {
    backgroundColor: "transparent",
    color: "#308446",
  }
})

export function UserBtn() {

  const cls = useStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState(localStorage.name);
  const [modalOpen, setModal] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  const handleSubmit = () => {
    localStorage.setItem("name", name)
    setModal(false)
}

  const handleChangeLang = () => {
    if (localStorage.lang === 'eng') {
      localStorage.setItem("lang", 'ua')
    } else {
      localStorage.setItem("lang", 'eng')
    }
    window.location.reload();
  }

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu}>
          <img src={User} alt="user-image" className={clsObj.logIn__img} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <span className={clsObj.menuHi__txt}>{langSwitcher("Hi, " + localStorage.name + ")", "Привіт, " + localStorage.name + ")") }</span>
        <MenuItem onClick={handleCloseMenu}>{langSwitcher("Switch theme", "Змінити тему")}</MenuItem>
        <MenuItem onClick={handleChangeLang}>{langSwitcher("Change language", "Змінити мову")}</MenuItem>
        <MenuItem onClick={() => setModal(true)}>{langSwitcher("Change name", "Змінити ім'я")}</MenuItem>
        <MenuItem onClick={handleCloseMenu}>{langSwitcher("Change avatar", "Змінити аватар")}</MenuItem>
      </Menu>

      <Dialog open={modalOpen} onClose={handleCloseModal} aria-labeledby="form-dialog-title">
        <DialogTitle className={cls.modalBlock} id="form-dialog-title">{langSwitcher("Enter your new name ", "Введи своє нове імя")}</DialogTitle>
        <DialogContent className={cls.modalBlock}>
          <TextField
            className={cls.modalBlock}
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label={langSwitcher("New name", "Нове імя")}
            type="text"
            value={name}
            fullWidth
          />
        </DialogContent>
        <DialogActions className={cls.modalBlock}>
          <Button onClick={handleSubmit} color="primary">{langSwitcher("Accept", "Підтвердити")}</Button>
          <Button onClick={handleCloseModal} color="secondary">{langSwitcher("Cancel", "Відмінити")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
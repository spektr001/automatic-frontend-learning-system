import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import clsObj from './header.module.scss'
import User1 from '../../../assets/images/user.png'
import User2 from '../../../assets/images/user2.png'
import User3 from '../../../assets/images/user3.png'
import User4 from '../../../assets/images/user4.png'
import User5 from '../../../assets/images/user5.png'
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
  const [isRedirect, setRedirect] = useState(false);

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

  const handleChangeTheme = () => {
    if (localStorage.theme === 'light') {
      localStorage.setItem("theme", 'dark')
    } else {
      clsObj
      localStorage.setItem("theme", 'light')
    }
    window.location.reload();
  }

  const handleChangeAvatar = () => {
    switch (localStorage.avatar) {
      case User1:
        localStorage.setItem('avatar', User2)
        break;
      case User2:
        localStorage.setItem('avatar', User3)
        break;
      case User3:
        localStorage.setItem('avatar', User4)
        break;
      case User4:
        localStorage.setItem('avatar', User5)
        break;
      case User5:
        localStorage.setItem('avatar', User1)
        break;
      default:
        localStorage.setItem('avatar', User1)
        break;
    }
  }

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEscape = () => {
    let esc = window.confirm("Увага! Після виходу усі дані буде втрачено.\nБажаєш вийти?")
    if (esc) {
      localStorage.clear()
      setRedirect(true)
    }
  }

  const redirect = () => {
    if (isRedirect) {
        return (
            <Redirect to="/" />
        )
    }
}

  return (
    <div>
      {redirect()}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu}>
        <img src={localStorage.avatar} alt="user-image" className={clsObj.logIn__img} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <span className={clsObj.menuHi__txt}>{langSwitcher("Hello, " + localStorage.name + ")", "Привіт, " + localStorage.name + ")")}</span>
        <MenuItem onClick={handleChangeTheme}>{langSwitcher("Switch theme", "Змінити тему")}</MenuItem>
        <MenuItem onClick={handleChangeLang}>{langSwitcher("Change language", "Змінити мову")}</MenuItem>
        <MenuItem onClick={() => setModal(true)}>{langSwitcher("Change name", "Змінити ім'я")}</MenuItem>
        <MenuItem onClick={handleChangeAvatar}>{langSwitcher("Change avatar", "Змінити аватар")}</MenuItem>
        <MenuItem onClick={handleEscape}>{langSwitcher("Log out", "Вийти")}</MenuItem>
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
const langSwitcher = (eng, ua) => {
    return (
      localStorage.lang === 'eng' ? eng : ua
    )
  }

export default langSwitcher
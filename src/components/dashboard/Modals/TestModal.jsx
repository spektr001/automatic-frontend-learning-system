import React, { useContext, useState } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { CircularProgress } from '@material-ui/core';
import { Context } from '../../../index'
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import langSwitcher from '../../languageSwitcher'

const useStyles = makeStyles({
    modalBlock: {
        backgroundColor: "transparent",
        color: "#308446",
    }
})

export function TestModal(props) {

    const cls = useStyles()

    let result = 0
    const [count, setCount] = useState(1)
    const [qCount, setQCount] = useState(1)
    const [answerArray, setAnswerArray] = useState([])
    const [answer, setAnswer] = useState("");
    const { firestore } = useContext(Context)
    const [test, loading] = useDocumentData(
        firestore.doc(langSwitcher('testEng/test', 'testUa/test'))
    )

    if (loading) {
        return (
            <CircularProgress />
        )
    }

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleClick = () => {
        if (answer === "") {
            alert("!")
        } else if (count === test.ra.length) {
            setAnswerArray([...answerArray, answer])
            setCount(count + 1)
        } else if (count < test.ra.length) {
            setAnswerArray([...answerArray, answer])
            setAnswer("")
            setQCount(qCount + 1)
            setCount(count + 1)
        } else {
            for (let i = 0; i < answerArray.length; i++) {
                if (answerArray[i] === test.ra[i]) {
                    ++result
                }
            }
            alert(langSwitcher("Your result: ", "Ваш результат ") + result + "/" + test.ra.length + 
            langSwitcher(result >= 0 && result <= 4 ? " You are Junior!" : result >= 4 && result <= 8 ? " You are Middle!" : " You are Master!", "Ваш результат "))
            result = 0
            setCount(1)
            setQCount(1)
            setAnswerArray([])
            setAnswer("")
            props.updateTestState(false)
        }
    }

    const handleClose = () => {
        result = 0
        setCount(1)
        setQCount(1)
        setAnswerArray([])
        setAnswer("")
        props.updateTestState(false)
    }

    return (
        <Dialog open={props.testState} onClose={() => props.updateTestState(false)} aria-labeledby="form-dialog-title">
            <DialogTitle className={cls.modalBlock} id="form-dialog-title">{langSwitcher("Test", "Тест")}</DialogTitle>
            <DialogContent className={cls.modalBlock}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{test['q' + qCount]}</FormLabel>
                    <RadioGroup aria-label="test" name="test" value={answer} onChange={handleChange}>
                        <FormControlLabel value={test['a' + qCount][0]} control={<Radio />} label={test['a' + qCount][0]} />
                        <FormControlLabel value={test['a' + qCount][1]} control={<Radio />} label={test['a' + qCount][1]} />
                        <FormControlLabel value={test['a' + qCount][2]} control={<Radio />} label={test['a' + qCount][2]} />
                        <FormControlLabel value={test['a' + qCount][3]} control={<Radio />} label={test['a' + qCount][3]} />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions className={cls.modalBlock}>
                <Button type="submit" onClick={handleClick} color="primary">{count > test.ra.length ? langSwitcher("Result", "Результат") : langSwitcher("Confirm", "Підтвердити")}</Button>
                <Button onClick={handleClose} color="secondary">{langSwitcher("Cancel", "Скасувати")}</Button>
            </DialogActions>
        </Dialog>
    )
}
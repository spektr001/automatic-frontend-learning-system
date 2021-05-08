import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../index'
import langSwitcher from '../../../languageSwitcher';
import { clsObj } from './lessons.module.scss'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { CircularProgress } from '@material-ui/core';


export function LessonOne(props) {

    const { firestore } = useContext(Context)
    const [articles, loading] = useCollectionData(
        firestore.collection('articleBeginEng')
    )

    if (loading) {
        return <CircularProgress />
    }

    return (
            articles.map(article =>
                <p>
                    {article.p1}
                </p>
            )
    );
    }
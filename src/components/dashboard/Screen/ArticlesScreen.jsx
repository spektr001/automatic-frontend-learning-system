import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../index'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { CircularProgress } from '@material-ui/core';

export function ArticlesScreen(props) {

    const { firestore } = useContext(Context)
    const [ articles, loading ] = useCollectionData(
        firestore.collection(props.article)
    )

    if (loading) {
        return <CircularProgress />
    }

    return (
        <div>
            {articles.map(article => 
                <div>
                    {article.item}
                </div>
                )}
        </div>
    );
}
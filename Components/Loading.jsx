import React from 'react'
import LoadingStyles from './Loading.module.css'

function Loading() {
  return (
    <div className={LoadingStyles.loadingContainer}>
        <div className={LoadingStyles.loader}>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Loading
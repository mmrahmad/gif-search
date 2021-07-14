import React from 'react';
import './Loading.module.css'

export default function Loading() {
    return (
            <div className="circular">
                <div className="inner"></div>
                <div className="number">Loading</div>
                <div className="circle">
                    <div className="bars left">
                        <div className="progress"></div>
                    </div>
                    <div className="bars right">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
    )
}

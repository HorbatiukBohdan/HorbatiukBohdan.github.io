import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.worldatlas.com/upload/9e/9d/8a/chamonix-mont-blanc-resort-alps-france-iren-key.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
            
        </div>
    )
}
export default ProfileInfo;
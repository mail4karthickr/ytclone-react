import React, { Component } from 'react';
import MenuItem1 from '../MenuItem/MenuItem1';
import MenuTitle from '../MenuTitle/MenuTitle';
import classes from './LanguageList.module.css';
import commonClasses from '../../../../../shared/styles/styles.module.css';
import { updateObject } from 'shared/utility';

const LanguageList = (props) => {
    console.log('LanguageList', props.currentLanguage);
    let languages = props.languages.map((language) => {
        const isSelected = language.hl === props.currentLanguage
        console.log('LanguageList language', language);
        return <MenuItem1 
                    title={language.name} 
                    key={language.hl}
                    id={language.hl}
                    itemClicked={ () => props.languageChanged(language)}
                    isSelected={isSelected}
                />
    });
    return (
        <div className={classes.menu}>
             <MenuTitle onBackClicked={props.languageListBackClicked} title="Choose your language"/>
             <div className={commonClasses.divider}></div>
             {languages}
        </div>
    );
};

export default LanguageList;
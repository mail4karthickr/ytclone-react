import React, { Component } from 'react';
import MenuItem1 from '../MenuItem/MenuItem1';
import MenuTitle from '../MenuTitle/MenuTitle';
import classes from './List.module.css';
import commonClasses from '../../../../../shared/styles/styles.module.css';
import { updateObject } from 'shared/utility';
import ListItem from '../MenuItem/ListItem';
import tickIcon from '../assets/images/tickIcon.svg';

const LanguageList = (props) => {
    let languages = props.languages.map((language) => {
        const isSelected = language.hl === props.currentLanguage.hl
        return <ListItem 
                    id={language}
                    key={language.hl}
                    leadingIcon={isSelected ? tickIcon : null}
                    title={<div>{`${language.name}`}</div>}
                    onClick={ (language) => props.languageChanged(language)}
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
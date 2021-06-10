import React from 'react';
import MenuTitle from '../MenuTitle/MenuTitle';
import classes from './List.module.css';
import styles from '../../../Shared/Styles/styles.module.css';
import ListItem from '../../../Shared/Components/UI/ListItem/ListItem';
import tickIcon from '../assets/tickIcon.svg';

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
             <div className={styles.divider}></div>
             {languages}
        </div>
    );
};

export default LanguageList;
import React, { Component } from 'react';
import MenuTitle from '../MenuTitle/MenuTitle';
import classes from './List.module.css';
import commonClasses from '../../../../../shared/styles/styles.module.css';
import ListItem from '../MenuItem/ListItem';
import tickIcon from '../assets/images/tickIcon.svg';

const LocationList = (props) => {
    let locations = props.locations.map((location) => {
        const isSelected = location.gl === props.currentLocation.gl
        return <ListItem 
                    id={location}
                    key={location.gl}
                    leadingIcon={isSelected ? tickIcon : null}
                    title={<div>{`${location.name}`}</div>}
                    onClick={ (location) => props.locationChanged(location)}
                />
    });
    return (
        <div className={classes.menu}>
             <MenuTitle onBackClicked={props.locationListBackClicked} title="Choose your location"/>
             <div className={commonClasses.divider}></div>
             {locations}
        </div>
    );
};

export default LocationList;
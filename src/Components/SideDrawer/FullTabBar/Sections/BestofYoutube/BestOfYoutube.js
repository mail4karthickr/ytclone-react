import TabItem from '../TabItem/TabItem';
import React from 'react'
import sportsIcon from '../../../assets/sportsIcon.svg';
import gamingIcon from '../../../assets/gamingIcon.svg';
import moviesIcon from '../../../assets/moviesIcon.svg';
import fashionAndBeautyIcon from '../../../assets/fashionAndBeautyIcon.svg';
import learningIcon from '../../../assets/moviesIcon.svg';

const bestOfYoutubeSectionItems = [
    { name: 'Sports', icon: sportsIcon, url: null },
    { name: 'Gaming', icon: gamingIcon, url: null },
    { name: 'Movies', icon: moviesIcon, url: null },
    { name: 'Fashion & Beauty', icon: fashionAndBeautyIcon, url: null },
    { name: 'Learning', icon: learningIcon, url: null },
    { name: 'Spotlight', icon: null,
                    url: 'https://yt3.ggpht.com/ytc/AAUvwngayhYdrOF4gk2XfEyfAbw4NMivtPigQTazRzyqCOg=s88-c-k-c0x00ffffff-no-rj' },
    { name: 'News', icon: null, 
                    url: 'https://yt3.ggpht.com/4ovR_e2egw4IHGLMmAUBXentt5aTEvz_mx3DNx4GDfrpQtKWDH44gCA-teADNOSaRyu6wV2tdnE=s88-c-k-c0x00ffffff-no-rj' },
    { name: 'Live', icon: null, 
                    url: 'https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj' },
    { name: 'Video', icon: null, 
                    url: 'https://yt3.ggpht.com/b1rBnRap3wdCcKbPulZLZwevxQ_kWaTuubACsCmIOSyIfaAfRPFdd4nmxegF8rRymmj5qsBZv-g=s88-c-k-c0x00ffffff-no-rj' },
    { name: 'Music', icon: null, 
                    url: 'https://yt3.ggpht.com/Xm4fXS4y_ygX2v6EjEmYjkvTHxOuPn9dM0VUzm9O9Y-7Z6ETIuNp1JOPoMtfTGUGC6J_P_0h=s88-c-k-c0x00ffffff-no-rj' },
];

const BestOfYoutube = () => {
    const items = bestOfYoutubeSectionItems.map((item) => {
        return <TabItem
            id={item.name}
            key={item.name}
            title={item.name}
            icon={item.icon}
            url={item.url}
        />
    })
    
    return (
        <div>{items}</div>
    )
}

export default BestOfYoutube
import React from 'react';
import WelcomeTitle from './components/WelcomeTitle';
import WelcomeDescription from './components/WelcomeDescription';
import Button from '@/components/Button';

const WelcomePage = () => {
    return (
        <div>
            <WelcomeTitle />
            <WelcomeDescription />
            <Button />
        </div>
    )
}

export default WelcomePage;

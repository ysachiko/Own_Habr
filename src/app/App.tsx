import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
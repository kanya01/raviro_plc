// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'

import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'


console.log('Application.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');

    const reactElements = document.querySelectorAll('[data-react-component]')

    reactElements.forEach(element => {
        const componentName = element.dataset.reactComponent
        // const props = JSON.parse(element.dataset.reactProps || '{}')

        let component;
        switch (componentName) {
            case 'HomePage':
                const props = JSON.parse(element.dataset.reactProps || '{}');
                component = <HomePage {...props} />;
                break;
            case 'Header':
                component = <Header/>;
                break;
            case 'Footer':
                component = <Footer/>;
                break;
            default:
                console.warn(`Component ${componentName} not found`);
                return;
        }

        try {
            const root = createRoot(element);
            root.render(
                <React.StrictMode>
                    {component}
                </React.StrictMode>
            );
            console.log(`Rendered ${componentName} mounted successfully`);
        } catch (error) {
            console.error(`Error mounting ${componentName}`, error);
        }
    });
});

window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});

document.addEventListener('turbo:load', () => {
    console.log('Turbo loaded');
});


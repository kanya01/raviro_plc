// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css';

import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ExploreButton from './components/ExploreButton'
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./components/BlogPostPage";


console.log('Application.js loaded');

function initializeReactComponents() {
    console.log('DOM Content Loaded');

    const reactElements = document.querySelectorAll('[data-react-component]')

    reactElements.forEach(element => {
        if (element.dataset.reactMounted) return;
        const componentName = element.dataset.reactComponent
        let props = {};

        try {

            if (element.dataset.reactProps) {
                props = JSON.parse(element.dataset.reactProps);
                console.log(`Props for ${componentName}:`, props);
            }
        } catch (e) {
            console.error("Error parsing props:". e );
        }
        // const props = JSON.parse(element.dataset.reactProps || '{}')

        let component;
        switch (componentName) {
            case 'HomePage':
                component = <HomePage {...props} />;
                break;
            case 'AboutPage':
                component = <AboutPage/>;
                break;
                case 'ContactPage':
                    component = <ContactPage/>;
                    break;
            case 'ExploreButton':
                    component = <ExploreButton/>;
                    break;
            case 'BlogPage':
                component = <BlogPage/>;
                break;
            case 'BlogPostPage':
                component = <BlogPostPage {...props}/>;
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
            element.dataset.reactMounted = 'true';
            console.log(`Rendered ${componentName} mounted successfully`);
        } catch (error) {
            console.error(`Error mounting ${componentName}`, error);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initializeReactComponents();
});
document.addEventListener('turbo:load', () => {
    console.log('Turbo loaded');
    initializeReactComponents();
});
document.addEventListener('turbo:render', () => {
    console.log('Turbo render');
    initializeReactComponents();
});

window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});
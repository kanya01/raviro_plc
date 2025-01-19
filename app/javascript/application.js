// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'

import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage'


console.log('Application.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');

    const reactElements = document.querySelectorAll('[data-react-component]')

    reactElements.forEach(element => {
        const componentName = element.dataset.reactComponent
        const props = JSON.parse(element.dataset.reactProps || '{}')

        if (componentName === 'HomePage') {
            const root = createRoot(element)
            root.render(<HomePage {...props} />)
        }
    })
})
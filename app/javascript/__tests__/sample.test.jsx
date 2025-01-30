import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const SampleComponent = () => <div>Hello World</div>;

describe('Sample Test', () => {
    it('renders without crashing', () => {
        render(<SampleComponent />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});
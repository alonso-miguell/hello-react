import { render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";


describe('My componenet test suite',() =>{
    
    const initial=100;

    test('should have value 100', () =>{
        const {getByText, getByTestId }= render(<CounterApp value={initial}/>);
        expect( getByText(`Current value: ${initial}`) ).toBeTruthy();
        const counter= getByTestId('counter');
        expect(counter.innerHTML).toContain(`Current value: ${initial}`);
    });
    
});
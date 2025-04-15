import { render } from "@testing-library/react";
import { MyComponent } from "../MyComponent";

describe('My componenet test suite',() =>{
    
    test('Should render', () =>{
        const title='HELLO REACT';
        render(<MyComponent title={title} 
        />);

    });
    
});
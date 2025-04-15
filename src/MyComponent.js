import PropTypes from 'prop-types';

export const MyComponent= ({title, subtitle, age=30}) =>{ 
   return ( 
   <>
   <h1>myComponent</h1> 
    <h2>{title}</h2>
    <h3>{subtitle} my age is {age}</h3>
   </>
   );

};

MyComponent.propTypes = {
   title: PropTypes.string.isRequired
}

MyComponent.defaultProps= {
   subtitle: ' I am Miguel',
   age: 34
}
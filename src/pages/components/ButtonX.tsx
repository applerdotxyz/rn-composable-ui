import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {Button} from 'react-native';

// TODO : 
// Get a btn component --> Get a JSON config listed of even to be handled by btn --> onCLick should not be written as code It shall be picked up with config.
//  Try to

function ButtonX(props, ref) {
  const buttonRef = useRef();
    
  useImperativeHandle(ref, () => ({
    someExposedProperty: () => {
      console.log(`we're inside the exposed property function!`)
      
    }
  }));
  return (
    <Button ref={ref} {...props} title="Submit" onPress={props.onClick}>
    </Button>
  );
}

export default forwardRef(ButtonX);

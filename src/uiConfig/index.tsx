import {Index} from '../pages/Index';
import {First} from '../pages/First';
import {Alternate} from '../pages/Alternate';
import { Test } from '../pages/Test';


// All component which will be rendered
export const componentsSet : any = {
    Index,
    First,
    Alternate,
    Test
}

export const IndexConfig: any = {
    "0": {
        "0": {
            name: "Index", size: "4"
        }
    },
};

export const FirstConfig: any = {
    "0": {
        "0": {
            name: "First", size: "4"
        }
    },
};

export const AlternateConfig: any = {
    "0": {
        "0": {
            name: "Alternate", size: "4"
        }
    },
};


// inner col 
// outer row
// Remove If possible with Component part

export const TestConfig: any = {
    "0": {
        "0": {
            name: "Test", size: "2"
        }
    },
    "1": {
        "0": {
            name: "Test", size: "1"
        },
        "1": {
            name: "Alternate", size: "1"
        },
    },
};

const exported: any = {
    IndexConfig,
    FirstConfig,
    AlternateConfig,
    TestConfig
};

export default exported;
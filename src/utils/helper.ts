export const getValueFromObject = (key: any, JsonObject: any) => {

    // First level ObjectKey
    const jsonKeyArray = Object.keys(JsonObject);
    console.log("JsonKeyArray : : ",jsonKeyArray );
    
    // TODO : Will convert in map fucntion once able to get the route
    for (let ele in jsonKeyArray) {
        let secondLevelJson = Object.values(JsonObject[ele])
        console.log("secondLevelJson :: : : ---> ", JSON.stringify(secondLevelJson));
        
    }
    return null;
}
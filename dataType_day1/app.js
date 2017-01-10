/**
 * Created by arushi on 10/1/17.
 */

var functionType = function(datatype){

    if(Array.isArray(datatype) === true)
    {
        console.log("dataType is array");
    }

    else if(datatype===null)
    {
        console.log('dataType is null')
    }

    else
    {
       var dataType = typeof(datatype);
        console.log("dataType is"+dataType);
    }

}

functionType();
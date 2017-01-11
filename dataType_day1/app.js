/**
 * Created by arushi on 10/1/17.
 */

// returning true array type

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

// returning hex code into rgb

var hexRgb = function(hexcolor){


    var hexCode = hexcolor.split('#')[1];
    console.log(hexCode.length)

    var invalid = "invalid Color Code";

    if(hexCode.length>6)
    {
        return invalid;
    }

    else
    {console.log(hexCode)
        var codeArr =[]
        for(var i=0;i<3;i++)
        {
            var y = i+2;
            var slicedCode = hexCode.slice(i,y);
            codeArr.push(parseInt(slicedCode,16))

        }
        console.log(codeArr)

    }


}
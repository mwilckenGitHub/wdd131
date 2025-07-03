//#region Funcs
/**
 * @function outputDate
 * @description Gets the current date and returns the desired output mode per user-input
 * @param {number} date_type the type of date desired (0 = FullYear; 1 = Month; 2 = day; 3 = hours; 4 = second)
 * @returns {string}
 * @author Matthew Wilcken WDD131
 * @license GNU
 */
function outputDate(date_type = 0) {
    date_type = date_type ?? 0;
    //Ensure date type is within bounds
    if (date_type < 0 || date_type > 4) {
        console.log("Error! " + Object.keys({ date_type })[0] + " must be within scope!\r\nChanging to 0!");
        date_type = 0;
    }

    var output;
    switch (date_type) {
        case 0:
        default:
            { output = new Date().getFullYear(); }
            break;
        case 1:
            { output = new Date().getMonth(); }
            break;
        case 2:
            { output = new Date().getDay(); }
            break;
        case 3:
            { output = new Date().getHours(); }
            break;
        case 4:
            { output = new Date().getSeconds(); }
            break;
    }
    delete date_type;
    return String(output);
}

//Add more functions as needed

//#endregion

//Get HTML ids
//Footer
//Date
const getcurrentyear = document.getElementById("currentyear");
const getlastmodified = document.getElementById("lastmodified");

//Set
//Copyright date
getcurrentyear.innerHTML = outputDate(0);
//Last modified
getlastmodified.innerHTML = document.lastModified;

//End per JavaScript portion of this assignment
//Note: the above function was me making sure I still remembered how to program in JavaScript
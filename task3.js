

/**
 * Task 3
 * 
 * Write a SEARCH procedure (C, STR, FIND,  POS)
 * which searches for a
 * character C in an string STR,  and returns its position
 * if it exists.
 * FIND will be true if the element exist.

 * Write a DELETE procedure (C, STR, VAR  FIND) which
 * deletes the first occurrence
 * of a character  C in a string STR, if it exists.
 * 
 * Write a DELETE_ALL procedure (C, STR) which deletes all
 * occurrences of an element C in a string STR, if it exists.

 */
function inString(searchStr, searchC) {

    
}
/* Procedure 1 */
function searchProcedure(c, str, find, pos) {
    // Step 1: Search for c in str and return position if exists
    // pos = inString(str, c)
    let index = str.indexOf(c);

    if(index !== -1) return [true, index];
    return  [false, index];
    // Step 2: Update find if element exists
    find = Boolean(pos);

    return [find, pos];
}
console.log(searchProcedure("b", "bolajiola"));

/* Procedure 2 */
function deleteProcedure(c, str, find, pos) {
    // Instruction: Deletes the first occurrence of a character 
    // C in a string STR, if it exists.

    // Step 1: Get find from searchProcedure,
    let searchArray = searchProcedure(c, str);
    find = searchArray[0];

    // Step 2: if find is true, delete first occurrence
    let remnants = str;    
    if(find){
        pos = searchArray[1];
        let remnant1 = str.substring(0, pos);
        
        let remnant2 = str.substring(pos + 1 , str.length);
        remnants = remnant1 + remnant2;
    }

    return remnants;
}

/* Procedure 3 */
function deleteAllProcedure(c, str, find, pos) {
//  * Write a DELETE_ALL procedure (C, STR) which deletes all
//     * occurrences of an element C in a string STR, if it exists.
    do {
        find = searchProcedure(c, str)[0];
        if(find) str = deleteProcedure(c, str);
    } while (find);

    return str;
}
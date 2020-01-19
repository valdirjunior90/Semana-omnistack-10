module.exports = function parseStingAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}
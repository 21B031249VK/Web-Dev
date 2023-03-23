function ucFirst(str){
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

ucFirst("john");// == "John";
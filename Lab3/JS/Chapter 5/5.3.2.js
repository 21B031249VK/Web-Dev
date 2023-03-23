function checkSpam(str){
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
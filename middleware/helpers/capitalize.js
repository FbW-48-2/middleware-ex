export let capitalizeFunc = (string) => {
    let tmpArr = string.split('')
    tmpArr[0] = tmpArr[0].toUpperCase()
   return tmpArr.join('')
}
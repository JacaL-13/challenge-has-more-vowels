function hasMoreVowels(word) {
    let countVowels = 0
    let countConsonants = 0
    word.toLowerCase().split('').forEach((letter) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
            countVowels++
        } else {
            countConsonants++
        }
    })
    return countVowels > countConsonants
}

console.log(hasMoreVowels('boelEan'))
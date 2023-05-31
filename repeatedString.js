function repeatedString(s, n) {
    if(!s.includes('a')) return 0
    if(s == 'a') return n
    let value = Math.floor(n / s.length) * s.match(/a/g).length
    const rest = n % s.length
    for(let i = 0; i < rest; i++) {
        if(s[i] === 'a') value++
    }
    return value
}
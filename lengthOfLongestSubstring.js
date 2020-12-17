/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === ' ') return 1;
    const sArr = s.split('');
    let acc = [];
    let answer = 0;
    let index = 0;
    for (let i = 0; i < sArr.length; ++i) {
        const c = sArr[i];
        if (!acc.includes(c)) {
            if (acc.length === 0) index = i;
            acc.push(c);
        } else {
            i = index;
            acc = [];
        }
        if (answer < acc.length) {
            answer = acc.length;
        }
    }
    return answer;
};

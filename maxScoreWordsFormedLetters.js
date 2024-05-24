var maxScoreWords = function(words, letters, score) {
    let n = words.length;
    let res = 0;

    let letters_count = new Array(26).fill(0);
    for (let letter of letters) {
        letters_count[letter.charCodeAt(0) - 97]++;
    }

    let words_scores = {};
    for (let word of words) {
        let s = 0;
        for (let ch of word) {
            s += score[ch.charCodeAt(0) - 97];
        }
        words_scores[word] = s;
    }

    function recursion(cur_ind, cur_score) {
        if (cur_ind === n) {
            res = Math.max(res, cur_score);
            return;
        }

        let can_add_this_word = true;
        let word = words[cur_ind];
        let word_count = new Array(26).fill(0);

        for (let ch of word) {
            word_count[ch.charCodeAt(0) - 97]++;
            if (word_count[ch.charCodeAt(0) - 97] > letters_count[ch.charCodeAt(0) - 97]) {
                can_add_this_word = false;
                break;
            }
        }

        if (can_add_this_word) {
            for (let i = 0; i < 26; i++) {
                letters_count[i] -= word_count[i];
            }
            recursion(cur_ind + 1, cur_score + words_scores[word]);
            for (let i = 0; i < 26; i++) {
                letters_count[i] += word_count[i];
            }
        }
        recursion(cur_ind + 1, cur_score);
    }

    recursion(0, 0);
    return res;
};
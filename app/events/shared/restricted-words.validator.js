"use strict";
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidWords = words
            .map(function (word) { return control.value.includes(word) ? word : null; })
            .filter(function (word) { return word != null; });
        return invalidWords && invalidWords.length > 0
            ? { restrictedWords: invalidWords.join(', ') }
            : null;
    };
}
exports.restrictedWords = restrictedWords;
//# sourceMappingURL=restricted-words.validator.js.map
const gulp = require('gulp');

function showGulp(done) {
    console.log(gulp)
    done()
}

exports.test = showGulp;
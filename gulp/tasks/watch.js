'use strict';

module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('./source/styles/**/*.sass', $.gulp.series('sass'));
		$.gulp.watch('./source/pages/*.html', $.gulp.series('copy-html'));
	});
};

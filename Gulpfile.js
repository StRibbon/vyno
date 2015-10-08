var gulp = require('gulp');
var arceus = require('arceus');

var jsConfig = {
  entry: 'src/client/index.js',
  outfile: 'public/app.js'
};

gulp.task('make:js', function() {
  return arceus.js.bundle(jsConfig);
});

gulp.task('watch', function() {
  return arceus.js.watchBundleAsync(jsConfig, function() {
    console.log('build succeeded');
  }).then(function() {
    arceus.util.gulpWatch(gulp, 'src/css/**', 'make:css');
    arceus.util.gulpWatch(gulp, 'src/assets/**/*', 'make:assets');
    arceus.util.gulpWatch(gulp, 'src/client/**/*.html', 'make:html');
  });
});

gulp.task('make:css', function() {
  var stylus = require('gulp-stylus');
  return arceus.css.bundle({
    entry: 'src/css/index.styl',
    outfile: 'public/app.css',
    transform: stylus()
  });
});

gulp.task('make:assets', function() {
  return arceus.util.copy({
    'src/assets/**/*': 'public/assets'
  });
});

gulp.task('make:html', function() {
  return arceus.util.copy({
    'src/client/**/*.html': 'public'
  });
});

gulp.task('make:vendor', function() {
  return arceus.util.copy({
    'bower_components/**/*': 'public/vendor'
  });
});

gulp.task('make', function() {
  return arceus.util.gulpAsync(gulp, 'clean', [
    'make:js',
    'make:css',
    'make:assets',
    'make:vendor',
    'make:html'
  ]);
});

gulp.task('clean', function() {
  return arceus.util.deleteAsync('public');
});

gulp.task('db:reset', function() {
  var exec = arceus.util.execAsync;
  return exec('dropdb vyno').then(() => {
    return exec('createdb vyno').then(() => {
      return arceus.util.gulpAsync(gulp, 'db:migrate');
    });
  });
});

gulp.task('db:seed', function(done) {
  require('dotenv').load();
  var seed = require('./src/server/seed');
  seed(done);
});

gulp.task('db:migrate', function() {
  return arceus.util.execAsync('node_modules/.bin/pg-migrate up');
});

gulp.task('create:migration', function() {
  var yargs = require('yargs');
  var argv = yargs.demand('name').alias('n', 'name').argv;
  return arceus.util.execAsync('node_modules/.bin/pg-migrate create ' + argv.name );
});

gulp.task('post-install', function() {
  if (process.env.NODE_ENV !== 'development') {
    return arceus.util.gulpAsync(gulp, 'make');
  }
});

gulp.task('default', function() {
  return arceus.util.gulpAsync(gulp, 'make', 'watch');
});

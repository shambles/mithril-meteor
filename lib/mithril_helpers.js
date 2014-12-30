//taken from http://lhorie.github.io/mithril-blog/mithril-and-meteor.html
mReactive = function(controller) {
  return function() {
    var instance = {};

    var computation = Deps.autorun(function() {
      m.startComputation();
      controller.call(instance);
      m.endComputation();
    });

    instance.onunload = function() {
      computation.stop();
    }

    return instance;
  }
}
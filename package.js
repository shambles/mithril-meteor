Package.describe({summary: "Mithril.js for Meteor"});

Package.onUse(function (api) {

  api.add_files(['lib/mithril.js', 'lib/mithril_helpers.js'], ['client']);

  api.export(['m', 'mReactive']);
});
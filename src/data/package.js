import Backbone from 'backbone'

export var PackageModel = Backbone.Model.extend({});

export var PackageCollection = Backbone.Collection.extend({
	model: PackageModel,
	url: 'http://hel-roottree.rhcloud.com/packages'
});
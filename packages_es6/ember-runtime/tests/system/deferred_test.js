import Ember from 'ember-metal/core';
import run from 'ember-metal/run_loop';
import Deferred from "ember-runtime/system/deferred";

module("Ember.Deferred all-in-one");

asyncTest("Can resolve a promise", function() {
  var value = { value: true };

  var promise = Deferred.promise(function(deferred) {
    setTimeout(function() {
      run(function() { deferred.resolve(value); });
    });
  });

  promise.then(function(resolveValue) {
    start();
    equal(resolveValue, value, "The resolved value should be correct");
  });
});

asyncTest("Can reject a promise", function() {
  var rejected = { rejected: true };

  var promise = Deferred.promise(function(deferred) {
    setTimeout(function() {
      run(function() { deferred.reject(rejected); });
    });
  });

  promise.then(null, function(rejectedValue) {
    start();
    equal(rejectedValue, rejected, "The resolved value should be correct");
  });
});



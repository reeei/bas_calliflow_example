/*global QUnit*/

sap.ui.define([
	"journalentryiflauncher/controller/JournalEntryView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JournalEntryView Controller");

	QUnit.test("I should test the JournalEntryView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

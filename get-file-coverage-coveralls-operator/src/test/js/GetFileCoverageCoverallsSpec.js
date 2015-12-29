/*global $, MashupPlatform, MockMP, GetFileCoverageCoveralls, beforeAll, afterAll, beforeEach*/
(function () {
    "use strict";

    jasmine.getFixtures().fixturesPath = 'src/test/fixtures/';

    var dependencyList = [
        'script',
        'div',
    ];

    var clearDocument = function clearDocument() {
        $('body > *:not(' + dependencyList.join(', ') + ')').remove();
    };

    describe("Test GetFileCoverageCoveralls", function () {
        var widget;
        beforeAll(function () {
            window.MashupPlatform = new MockMP.MockMP();
        });

        beforeEach(function () {
            MashupPlatform.reset();
            widget = new GetFileCoverageCoveralls();
        });

        it("Dummy test", function () {
            expect(true).toBeTruthy();
        });

    });
})();

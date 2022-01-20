const { test } = QUnit;

/*QUnit.module('add', function() {
    test('two numbers', function(assert) {
      assert.equal(add(1, 2), 3);
    });
  });*/
const tomb = [
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
  { ertek: "-" },
];
let ttt = new TTTModel(tomb);
////////Léteznek-e/fügvény-e?/////////
QUnit.module("Ellenőrzések ", function () {
  test("létezik e?", function (assert) {
    assert.ok(ttt.getVEllenorzes, "vizszintesEllenorzes");
  });
  QUnit.module("VEllenőrzés", function () {
    test("fügvény-e?", (assert) => {
      assert.ok(ttt.getVEllenorzes, "fügvény");
    });
  });
  QUnit.module("FEllenőrzés", function () {
    test("létezik e?", function (assert) {
      assert.ok(ttt.getFEllenorzes, "fuggolegesEllenorzes");
    });
  });
  QUnit.module("FEllenőrzés", function () {
    test("fügvény-e?", (assert) => {
      assert.ok(ttt.getFEllenorzes, "fügvény");
    });
  });

  QUnit.module("AtloEll", function () {
    test("létezik e?", function (assert) {
      assert.ok(ttt.atloEll, "atloEllenorzes");
    });
  });
  QUnit.module("AtloEll", function () {
    test("fügvény-e?", (assert) => {
      assert.ok(ttt.atloEll, "fügvény");
    });
  });
  ////////////Teszt Esetek//////////////

  ////////////Üres//////////////
  QUnit.module("Üres", function () {
    test("Üres ttt", function (assert) {
      const tomb = [
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "---|---|---|");
    });
  });
  ////////////első sor X//////////////
  QUnit.module("első sor X", function () {
    test("első sor X", function (assert) {
      const tomb = [
        { ertek: "X" },
        { ertek: "X" },
        { ertek: "X" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "XXX|---|---|");
    });
  });
  ////////////második sor X//////////////
  QUnit.module("második sor X", function () {
    test("második sor X", function (assert) {
      const tomb = [
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "X" },
        { ertek: "X" },
        { ertek: "X" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "---|XXX|---|");
    });
  });
  ////////////harmadik sor X//////////////
  QUnit.module("harmadik sor X", function () {
    test("harmadik sor X", function (assert) {
      const tomb = [
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "X" },
        { ertek: "X" },
        { ertek: "X" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "---|---|XXX|");
    });
  });
  ///////////////////első sor O/////////////////
  QUnit.module("első sor O", function () {
    test("első sor O", function (assert) {
      const tomb = [
        { ertek: "O" },
        { ertek: "O" },
        { ertek: "O" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "OOO|---|---|");
    });
  }); //////////////második sor O/////////////////
  QUnit.module("második sor O", function () {
    test("második sor O", function (assert) {
      const tomb = [
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "O" },
        { ertek: "O" },
        { ertek: "O" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "---|OOO|---|");
    });
  });
  ////////////harmadik sor O/////////////////
  QUnit.module("harmadik sor O", function () {
    test("harmadik sor O", function (assert) {
      const tomb = [
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "O" },
        { ertek: "O" },
        { ertek: "O" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getVEllenorzes(), "---|---|OOO|");
    });
  });
  /////////////első függöleges oszlop X//////////////////
  QUnit.module("első függöleges oszlop X", function () {
    test("első függöleges oszlop X", function (assert) {
      const tomb = [
        { ertek: "X" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "X" },
        { ertek: "-" },
        { ertek: "-" },
        { ertek: "X" },
        { ertek: "-" },
        { ertek: "-" },
      ];
      let ttt = new TTTModel(tomb);
      assert.equal(ttt.getFEllenorzes(), "XXX|---|---|");
    });
  });
});

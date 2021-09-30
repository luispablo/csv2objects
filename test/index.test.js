
const csv2objects = require("../index");
const test = require("ava");

test("Turn sample CSV into JS objects", function (t) {
  const expected = [
    { social_id: "UCmdrrEl_ms-aZrf8E5DtljQ", username: "mullerquaker",      brand_name: "Muller",             country_name: "Global",             ignore_category: "Yoghurt",       language: "English" },
    { social_id: "UC0Szb7wRfe8IxgBBRqDwNmQ", username: "TotalGreekYoghurt", brand_name: "Fage",               country_name: "United Kingdom",     ignore_category: "Yoghurt",       language: "English" },
    { social_id: "UCNBNXG10CyUe1AGA8Q3oMyA", username: "LactacydRussia",    brand_name: "Lactacyd (Sanofi)",  country_name: "Russian Federation", ignore_category: "Womens Health", language: "Russian" },
    { social_id: "UCBaiMPvDaVnKEhypdCY_BQg", username: "sonomacutrer",      brand_name: "Sonoma-Cutrer",      country_name: "Global",             ignore_category: "Wine",          language: "English" },
    { social_id: "UCWcrVQYkUvWigEKpWxA4jFg", username: "Tabernero",         brand_name: "Tabernero",          country_name: "Peru",               ignore_category: "Wine",          language: "Spanish" },
    { social_id: "UCYM1uhyWSMQKvcN6z5FT5-Q", username: "sutterhome",        brand_name: "Sutter Home Wines",  country_name: "United States",      ignore_category: "Wine",          language: "English" },
    { social_id: "UC1evfzEeqnF3XLbsUdAykYw", username: "LaCremaWinery",     brand_name: "La Crema",           country_name: "United States",      ignore_category: "Wine",          language: "English" },
    { social_id: "UCWDY-xbBRI1LlPEBrdO2NKw", username: "JacobsCreekWine",   brand_name: "Jacob's Creek",      country_name: "Global",             ignore_category: "Wine",          language: "English" },
    { social_id: "UCvYwugzuWwngaQ1PbcRZMMg", username: "Bouvetladubay",     brand_name: "Bouvet-Ladubay",     country_name: "France",             ignore_category: "Wine",          language: "French" },
    { social_id: "UCQcEiNroqkV3maOYtgx7aUw", username: "SimplyNakedWines",  brand_name: "Naked Grape",        country_name: "Canada",             ignore_category: "Wine",          language: "English" },
  ];
  const objects = csv2objects("./test/sample.csv");
  t.deepEqual(objects, expected);
});

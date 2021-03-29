const { CountryLanguageCounter } = require('../src/country-language-counter');
const { assert } = require('chai');

describe('country-language-counter.js', function() {
  it ('countCountries', function () {
    //Arrange
    const input = [
      {
        country: 'US',
        languages: ['en'],
      },
      {
        country: 'BE',
        languages: ['nl', 'fr', 'de'],
      },
      {
        country: 'NL',
        languages: ['nl', 'fy'],
      },
      {
        country: 'DE',
        languages: ['de'],
      },
      {
        country: 'ES',
        languages: ['es'],
      },
      {
        country: 'ES',
        languages: ['es'],
      }
    ];
    const sut = new CountryLanguageCounter(input);

    //Act
    const countriesCount = sut.countCountries();

    //Assert
    assert.equal(countriesCount, 5 , "[Expected 5 Different countries on request object]");
  });

  it('count country with most official languages where official language is DE', function() {
    //Arrange
    const input = [
      {
        country: 'US',
        languages: ['en'],
      },
      {
        country: 'BE',
        languages: ['nl', 'fr', 'de'],
      },
      {
        country: 'NL',
        languages: ['nl', 'fy'],
      },
      {
        country: 'DE',
        languages: ['de'],
      },
      {
        country: 'ES',
        languages: ['es'],
      }
    ];
    const sut = new CountryLanguageCounter(input);
    
    //Act
    const countries = sut.findCountriesWithOfficialLanguage('DE');
    
    //Assert
    assert.equal(countries.length, 2 , "[Expected 2 DE official speaking countries]");
    assert.equal(countries[0].country, 'BE', "[BE should be the country with most speaking languages]");
  })
});
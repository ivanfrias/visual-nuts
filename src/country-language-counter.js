class CountryLanguageCounter {
  constructor(data) {
    this.data = data;
  }

  countCountries() {
    const distinctCountries = [];

    this.data.map(x => x.country).forEach(y =>  {
        if (distinctCountries.filter(z => y === z).length === 0) distinctCountries.push(y);
    });

    return distinctCountries.length;
  }
  
  findCountriesWithOfficialLanguage(language) {
    if (!language || (typeof language !== 'string')) throw new Error('Invalid input language');

    const officialSpeakingCountries = this.data.filter(x => x.languages.find(y => y.toLowerCase() === language.toLowerCase()));
    return this._rankCountriesBySpokeLanguages(officialSpeakingCountries);
  }

  _rankCountriesBySpokeLanguages(countries) {
    const languageCount = this._countOfficialLanguagesPerCountry(countries);
    const sortedByMaxLanguageCount = languageCount.sort((first, second) => {
      if (first.languagesCount < second.languagesCount) return 1;
    });

    return sortedByMaxLanguageCount;
  }

  _countOfficialLanguagesPerCountry(countries) {
    return countries.map(x => { return { country: x.country, languages: x.languages, languageCount: x.languages.length } });
  }

} 

module.exports = { CountryLanguageCounter };
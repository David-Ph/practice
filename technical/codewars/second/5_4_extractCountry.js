const country = `<option value="da">Danish</option><option value="nl">Dutch</option><option value="en">English</option><option value="et">Estonian</option><option value="fo">Faroese</option><option value="fa">Farsi</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="kl">Greenlandic</option><option value="gn">Guarani</option><option value="gu">Gujarati</option><option value="ha">Hausa</option><option value="he">Hebrew</option><option value="hi">Hindi</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jv">Javanese</option><option value="kn">Kannada</option><option value="km">Khmer</option><option value="ko">Korean</option><option value="lo">Lao</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="cm">Mandarin</option><option value="mr">Marathi</option><option value="mo">Moldovan</option><option value="mn">Mongolian</option><option value="cn">Montenegrin</option><option value="no">Norwegian</option><option value="or">Odia</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sr">Serbian</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="es">Spanish</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="ta">Tamil</option><option value="te">Telugu</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="xh">Xhosa</option><option value="yo">Yoruba</option><option value="zu">Zulu</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="br">Berber</option><option value="bs">Bosnian</option><option value="bg">Bulgarian</option><option value="my">Burmese</option><option value="yu">Cantonese</option><option value="ca">Catalan</option><option value="zh">Chinese</option><option value="hr">Croatian</option><option value="cs">Czech</option>`;

function extractCountry(string) {
  const firstArr = string
    .split("</option>")
    .join("")
    .split("<option ")
    .join("")
    .split("value=");

  const secondArr = firstArr.map((lang) => {
    let [langCode, langName] = lang.split(`">`);
    langCode = langCode.replace(`"`, "");
    return {
      value: langCode,
      label: langName,
    };
  });

  console.log(secondArr);
}

extractCountry(country);

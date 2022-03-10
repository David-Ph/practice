const source = [
  { value: "af", label: "Afrikaans" },
  { value: "sq", label: "Albanian" },
  { value: "ar", label: "Arabic" },
  { value: "hy", label: "Armenian" },
  { value: "az", label: "Azerbaijani" },
  { value: "eu", label: "Basque" },
  { value: "be", label: "Belarusian" },
  { value: "bn", label: "Bengali" },
  { value: "br", label: "Berber" },
  { value: "bs", label: "Bosnian" },
  { value: "bg", label: "Bulgarian" },
  { value: "my", label: "Burmese" },
  { value: "yu", label: "Cantonese" },
  { value: "ca", label: "Catalan" },
  { value: "zh", label: "Chinese" },
  { value: "hr", label: "Croatian" },
  { value: "cs", label: "Czech" },
];

const target = [
  { value: "eu", label: "Basque" },
  { value: "be", label: "Belarusian" },
];

function findIndex(source, target) {
  const findReference = [];

  target.forEach((lang) => {
    const findLang = source.find((srcLang) => {
      return lang.value === srcLang.value;
    });

    findReference.push(findLang);
  });

  console.log("SOURCE");
  console.log(source);
  console.log("FINDREFERENCE");
  console.log(findReference);
  console.log("=================");
  findReference[0].value = "CHANGING VALUES";
  console.log("SOURCE");
  console.log(source);
  console.log("FINDREFERENCE");
  console.log(findReference);
}

findIndex(source, target);

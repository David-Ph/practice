function domainName(url) {
  let hostName = "";

  //   remove http:// if exist
  if (url.indexOf("//") > -1) {
    hostName = url.split("//")[1];
  } else {
    hostName = url.split("/")[0];
  }

  //   remove www
  if (url.indexOf("www") > -1) {
    hostName = hostName.split(".")[1];
  } else {
    hostName = hostName.split(".")[0];
  }

  return hostName;
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));

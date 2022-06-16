async function blobToBase64(d) {
  var reader = new FileReader();
  reader.readAsDataURL(d);
  return new Promise((res, rej) => {
    reader.onload = e => {
      res(e.target.result);
    };
  });
}

async function urlToBase64(url) {
  const res = await fetch(url);
  const blob = await res.blob();
  const base64 = await blobToBase64(blob);
  return base64;
}

export { urlToBase64, blobToBase64 };

window.onkeydown = function (event) {
  if (event.ctrlKey && event.keyCode == "K".charCodeAt(0)) {
    event.preventDefault();

    const key = ";";
    const code = key.charCodeAt(0);
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: key,
        code: code,
        keyCode: code,
        charCode: code,
        ctrlKey: true,
      })
    );
  }
};

import "./style.css";

const $ = (selector) => document.querySelector(selector);

const $html = $("#html");
const $js = $("#js");
const $css = $("#css");
const $iframe = $(iframe);

$html.addEventListener("input", update);
$js.addEventListener("input", update);
$css.addEventListener("input", update);

function update() {
    const html = createHtml();
    $iframe.setAttribute('srcdoc', html)
}
const createHtml = () => {
    const html = $html.value;
    const css = $css.value;
    const js = $js.value;
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      ${css}
    </style>
  </head>
  <body>
    <script>
      ${js}
    </script>
    ${html}
  </body>
</html>
  `;
};

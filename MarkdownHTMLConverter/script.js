const markdownInput = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

const patternReplacementArray = [
  { h3: [/^\s*### (.+)$/gm, "<h3>$1</h3>"] },
  { h2: [/^\s*## (.+)$/gm, "<h2>$1</h2>"] },
  { h1: [/^\s*# (.+)$/gm, "<h1>$1</h1>"] },
  // Bold (asterisks or underscores, must be before italics)
  { bold: [/(\*\*|__)([\s\S]+?)\1/g, "<strong>$2</strong>"] },
  // Italic (asterisks or underscores, non-greedy)
  { italic: [/(\*|_)([^\*_][\s\S]*?)\1/g, "<em>$2</em>"] },
  { img: [/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">'] },
  { a: [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'] },
  // blockquote is handled separately
];

function convertMarkdown() {
  let html = markdownInput.value;
  // Apply all inline markdown patterns first (except blockquote)
  patternReplacementArray.forEach((item) => {
    if (Object.keys(item)[0] === "quote") return;
    const [pattern, replacement] = Object.values(item)[0];
    html = html.replace(pattern, replacement);
  });
  // Now apply blockquote pattern last, so it wraps already-converted inline HTML
  html = html.replace(
    /(^\s*>\s*)([\s\S]+?)(?=$|\n)/gm,
    function (match, p1, p2) {
      return `<blockquote>${p2}</blockquote>`;
    }
  );
  html = html.replace(/\n/g, "");
  return html;
}

markdownInput.addEventListener("input", function () {
  const htmlOutput = document.getElementById("html-output");
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});

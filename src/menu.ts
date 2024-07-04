const root = document.getElementById("root")!;

const anchorTags = (href: string, textNode: string): string => {
  let result = `<a href="${href}">${textNode}</a>`;
  return result;
};

const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};

root.innerHTML = `
<ul>
  ${liTags(anchorTags(`#testA`, `ㅎㅇ`))}
</ul>
`;

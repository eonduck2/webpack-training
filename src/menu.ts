const root = document.getElementById("root");

const anchorTags = (href: string, textNode: string): string => {
  let result = `<a href="${href}">${textNode}</a>`;
  return result;
};

const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};

type TBasicData = {
  hi: `ㅎㅇ`;
  bye: `ㅂㅇ`;
  hello: `안녕`;
  goodbye: `잘가`;
};

const basicData: TBasicData = {
  hi: `ㅎㅇ`,
  bye: `ㅂㅇ`,
  hello: `안녕`,
  goodbye: `잘가`,
};

const totalElement = (obj: TBasicData): string => {
  let result = liTags(anchorTags(`#${obj.hi}`, obj.hi));
  return result;
};

if (root instanceof HTMLElement) {
  root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
`;
}

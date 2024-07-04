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
  [key: string]: string;
};

const basicData: TBasicData = {
  hi: `ㅎㅇ`,
  bye: `ㅂㅇ`,
  hello: `안녕`,
  goodbye: `잘가`,
};

const totalElement = (obj: TBasicData): string => {
  let result = "";
  for (let key in obj) {
    result += liTags(anchorTags(`#${key}`, obj[key]));
  }
  return result;
};

if (root instanceof HTMLElement) {
  root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
`;
}

/* IMPORTANT------------------------------------------------------------------------------
  NOTE: HTML을 대신해서 만든 HTML 작성 코드 - REACT/CSR
*/

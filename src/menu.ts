const root = document.getElementById("root");

const anchorTags = (href: string, textNode: string): string => {
  let result = `<a href="#${href}">${textNode}</a>`;
  return result;
};

const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};

type TBasicData = {
  hi: {
    name: `ㅎㅇ`;
    backgroundColor: `red`;
  };
  bye: {
    name: `ㅂㅇ`;
    backgroundColor: `blue`;
  };
  hello: {
    name: `안녕`;
    backgroundColor: `orange`;
  };
  goodbye: {
    name: `잘가`;
    backgroundColor: `green`;
  };
};

const basicData: TBasicData = {
  hi: {
    name: `ㅎㅇ`,
    backgroundColor: `red`,
  },
  bye: {
    name: `ㅂㅇ`,
    backgroundColor: `blue`,
  },
  hello: {
    name: `안녕`,
    backgroundColor: `orange`,
  },
  goodbye: {
    name: `잘가`,
    backgroundColor: `green`,
  },
};

const totalElement = (obj: TBasicData): string => {
  let result = "";
  for (let key in obj) {
    const value = obj[key as keyof TBasicData];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
};

if (root instanceof HTMLElement) {
  root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
<main id="main-target">
</main>
`;
}

/* IMPORTANT------------------------------------------------------------------------------
  NOTE: HTML을 대신해서 만든 HTML 작성 코드 - REACT/CSR
*/

const mainTarget = document.getElementById(`main-target`);

window.onhashchange = () => {
  const hash = window.location.hash;

  if (mainTarget instanceof HTMLElement) {
    let test = basicData[hash.slice(1) as keyof TBasicData];
    let div = document.createElement("div");
    div.style.backgroundColor = test.backgroundColor;
    div.textContent = test.name;
    if (mainTarget.hasChildNodes()) {
      mainTarget.removeChild(mainTarget.childNodes[0]);
    }
    mainTarget.appendChild(div);
  }
};

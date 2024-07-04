const root = document.getElementById(`root`) as HTMLElement;

const liTags = () => {
  let result = "<li>목록</li>";
  return result;
};

root.innerHTML = `
<ul>
${liTags()}
</ul>
`;

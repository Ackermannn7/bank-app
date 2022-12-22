import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    62.93deg,
    #7896ff 19.68%,
    #5071ff 55.79%,
    #2a48ff 89.55%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;

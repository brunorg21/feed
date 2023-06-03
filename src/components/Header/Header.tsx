import * as S from "./style";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={igniteLogo} alt="Logo IgniteFeed" />
    </S.HeaderContainer>
  );
}

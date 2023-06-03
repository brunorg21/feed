import { Avatar } from "../Avatar/Avatar";
import * as S from "./style";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <img src="https://images.unsplash.com/photo-1681980123412-cb4a34c4653b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
      <S.Profile>
        <Avatar src="https://github.com/brunorg21.png" />
        <strong>Bruno Rafael</strong>
        <span>Web Developer</span>
      </S.Profile>
      <S.SidebarFooter>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
}

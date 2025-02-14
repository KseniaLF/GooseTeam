import styled from 'styled-components';
import { themeColors, animation } from '../../../../styles/variables';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const EditWrapper = styled.div`
 position: relative;
 width: 100%;
`;

export const BtnSvgWrapper = styled.div`
 display: flex;
 position: absolute;
 top: 58px;
 right: 15px;
 gap: 8px;
`;

export const BtnPencil = styled.button`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background: ${themeColors.btnPencilBackground};
  stroke: ${themeColors.btnPencilStroke};
  fill: transparent;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${themeColors.btnPencilBackgroundHover};
    stroke: ${themeColors.btnPencilStrokeHover};
  }
`;
  
export const BtnTrash = styled.button`
  padding: 0;
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background: ${themeColors.feedbackBtnTrashBg};
  fill: transparent;
  align-items: center;
  justify-content: center;
  stroke: #EA3D65;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #EA3D65;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const BtnEdit = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 96%;
  width: 96%;
  margin-top: 18px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  transition: background ${animation};

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #3E85F3;
    border: 1px solid #fff;
      -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
      box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
  }

  ${media.tablet} {
    height: 48px;
    width: 198px;
  }
  ${media.desktop} {
    height: 48px;
    width: 198px;
  }
`;

export const BtnEditText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const BtnCancel = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 96%;
  width: 96%;
  margin-top: 18px;
  cursor: pointer;
  background: ${themeColors.feedbackBtnCancelBg};
  border: none;
  border-radius: 8px;
  transition: background ${animation};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${themeColors.feedbackBtnCancelBg};
     border: 1px solid #fff;
      -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
      box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
  }

  ${media.tablet} {
    height: 48px;
    width: 198px;
  }
  ${media.desktop} {
    height: 48px;
    width: 198px;
  }
`;

export const BtnCancelText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${themeColors.feedbackBtnCancelColor};
`;

export const CommentTextList = styled.textarea`
  width: 96%;
  height: 127px;
  background-color: ${themeColors.feedbackTextareaBg};
  border: 1px solid #343434;
  border-radius: 8px;
  margin-top: 8px;
  resize: none;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 18px;
  color: ${themeColors.feedbackTextareaColor};
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: ${themeColors.feedbackTextareaColor};
  }

  ${media.tablet} {
    width: 404px;
  }
  ${media.desktop} {
    width: 404px;
  }
`;

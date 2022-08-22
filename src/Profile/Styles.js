import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const ProfileWrapper = styled.div`
  width: 260;
`;

export const RepositoriesWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 260px;
  height: 260px;
`;

export const Name = styled.p`
  font-size: 24px;
  line-height: 1.25;
  font-weight: bold;
  color: #24292f;
`;

export const Login = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #57606a;
`;

export const Company = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #57606a;
`;

export const Email = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #57606a;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
`

export const FollowButton = styled(Button)`
  text-align: center;
  color: #24292f;
  background-color: #f6f8fa;
  border-color: rgba(27, 31, 36, .15);
  box-shadow: 0 1px 0 rgba(27, 31, 36, .04) ,inset 0 1px 0 rgba(255, 255, 255, .25);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;
  width: 100%;
  margin: 15px 0;

  &:hover {
    background-color: #f3f4f6;
    border-color: rgb(27 31 36 / 15%);
    transition-duration: .1s;
  }

  &:active {
    background-color: hsl(220deg 14% 93%);
    border-color: rgb(27 31 36 / 15%);
    transition: none;
  }
`;

export const TextWrapper = styled.div`
  font-size: 14px;
  display: flex;
  margin: 5px 0;

  svg {
    margin-right: 3px;
  }
`;

export const TextDivider = styled.span`
  display: inline-block;
  margin: 0 3px;
`
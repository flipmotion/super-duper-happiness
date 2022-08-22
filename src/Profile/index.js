import { string, object } from 'prop-types';
import * as Icon from '../svgIcons';
import * as Style from './Styles';
import Repositories from '../Repositories';

const simpleFormatNum = num => (num / 1000).toFixed(1) + 'k';

const Profile = ({user: {
  avatarUrl,
  company,
  email,
  login,
  name,
  repositories,
  followers,
  following,
}}) => {
  const followersTotalCount = simpleFormatNum(followers.totalCount);

  return (
    <Style.Wrapper>
      <Style.ProfileWrapper>
        <Style.Image src={avatarUrl} />
        <Style.Name>{name}</Style.Name>
        <Style.Login>{login}</Style.Login>
        <Style.FollowButton>Follow</Style.FollowButton>
        <Style.TextWrapper>
          <Icon.FollowersIcon />
          <span><b>{followersTotalCount}</b> followers</span>
          <Style.TextDivider>{' '}·{' '}</Style.TextDivider>
          <span><b>{following.totalCount}</b> following</span>
        </Style.TextWrapper>
        <Style.TextWrapper>
          <Icon.CompanyIcon />
          <span>{company}</span>
        </Style.TextWrapper>
        <Style.TextWrapper>
          <Icon.EmailIcon />
          <span>{email}</span>
        </Style.TextWrapper>
        <br />
        <hr />
      </Style.ProfileWrapper>
      <Style.RepositoriesWrapper>
        <Repositories repositories={repositories} />
      </Style.RepositoriesWrapper>
    </Style.Wrapper>
  );
}

Profile.propTypes = {
  avatarUrl: string,
  company: string,
  email: string,
  login: string,
  name: string,
  repositories: object,
  followers: object,
  following: object,
}

export default Profile;
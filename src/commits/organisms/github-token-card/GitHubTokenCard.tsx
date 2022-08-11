import InputCard from '../../../lib/molecules/input-card/InputCard';

export interface IGitHubTokenCard {
  token: string | null | undefined;
  setToken: (token: string) => void;
}

const GitHubTokenCard = ({ token, setToken }: IGitHubTokenCard) => {
  return (
    <div>
      {token ? (
        <div>
          <div>GitHub Access Token found. You can check commits history now.</div>
        </div>
      ) : (
        <div>
          <div>Please enter GitHub Access Token before start.</div>
          <InputCard
            label="GitHub Access Token"
            buttonText="Use this token"
            onClickHandler={setToken}
          />
        </div>
      )}
    </div>
  );
};

export default GitHubTokenCard;

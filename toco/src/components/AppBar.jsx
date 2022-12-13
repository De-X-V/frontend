import Link from "next/link";

import styled from "styled-components";
import Image from "next/image";

import Logo from "../../public/logo3.png";
import Profile from "../../public/profile.png";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";
import { useState } from "react";
function AppBar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const [walletConnect, setWalletConnect] = useState(false);

  useEffect(() => {
    setWalletConnect(isConnected);
  }, [walletConnect, isConnected]);

  return (
    <Wrap>
      <Link href="/">
        <StyledLogo>
          <Image src={Logo} />
        </StyledLogo>
      </Link>
      <StyledLinkBox>
        <Link href="/">
          <StyledLink>TOcO</StyledLink>
        </Link>
        <Link href="/ProjectFund">
          <StyledLink>프로젝트 펀딩</StyledLink>
        </Link>
        <Link href="/PennyFund">
          <StyledLink>잔돈펀딩</StyledLink>
        </Link>
        <Link href="/Nft">
          <StyledLink>NFT</StyledLink>
        </Link>
        <Link href="/MyPage">
          <StyledLink>mypage</StyledLink>
        </Link>
      </StyledLinkBox>
      {!walletConnect ? (
        <>
          <StyledProfile>
            <Image src={Profile} width="40px" height="40px" />
          </StyledProfile>
          <button onClick={() => connect()}>Connect Wallet</button>
        </>
      ) : (
        <>
          <StyledProfile2>
            <Image src={Profile} width="40px" height="40px" />
          </StyledProfile2>
          <div>
            Connected to {address}
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        </>
      )}
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 75px;
`;
const StyledLogo = styled.div`
  margin-left: 40px;
`;
const StyledProfile = styled.div`
  background-color: #ffd05a;
  border-radius: 20px;
  margin-right: 40px;
`;
const StyledProfile2 = styled.div`
  background-color: green;
  border-radius: 20px;
  margin-right: 40px;
`;
const StyledLinkBox = styled.div`
  width: 487px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  /* Body/Medium */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  margin-right: 32px;
`;

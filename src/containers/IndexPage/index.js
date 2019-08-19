import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-color: hsl(215, 62%, 21%);
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

const ChurchText = styled.p`
  font-size: 40px;
  text-align: center;
  color: white;
`;

const NameText = styled.p`
  font-size: 60px;
  text-align: center;
  letter-spacing: 20px;
  text-indent: 20px;
  color: white;
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IndexPage = () => (
  <Wrapper>
    <Card>
      <Logo src='/static/logo.svg' />
      <ChurchText>新生命小組教會</ChurchText>
      <NameText>李欣美</NameText>
    </Card>
  </Wrapper>
);

export default IndexPage;

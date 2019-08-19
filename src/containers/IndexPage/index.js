import Link from 'next/link';
import styled from 'styled-components';

const EkkImage = styled.img``;

const Card = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-color: hsl(215, 62%, 21%);
  position: relative;
  overflow: hidden;
  ${EkkImage} {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 0px;
`;

const ChurchText = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 40px;
  text-align: center;
  color: white;
`;

const NameText = styled.p`
  font-size: 80px;
  text-align: center;
  font-weight: 800;
  letter-spacing: 30px;
  text-indent: 30px;
  color: white;
  margin-top: 20px;
  margin-left: 20px;
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
      <EkkImage src='/static/ekk.svg' />
    </Card>
  </Wrapper>
);

export default IndexPage;

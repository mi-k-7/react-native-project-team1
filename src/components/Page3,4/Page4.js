import React, { useState } from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question34 from './Question34';
import { View, Image } from 'react-native';


const Page4 = ({ next, back }) => {

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question34
            mQuestion="다음의 이야기를 읽고, 문제를 풀어보세요(1~3)."
          />
          <View style={{ alignItems: 'center'}}>
            <Image 
              source={require('../../../assets/Page4-메뉴판.png')}
              style={{ width: 200, height: 200}}
            />
          </View>

          <Question34
            text="영자 씨는 휘핑크림을 1회 추가한 카페모카를 주문하였고 순자 씨는 카페라떼에 시럽을 두 번 추가하였습니다. 옥순 씨는 카푸치노를 주문하였고 경자씨는 아메리카노를 주문하고 멤버십카드를 이용해 10% 할인 받았습니다."
          />

          <Question34
            sQuestion="1. 경자 씨가 지불한 금액은 얼마인가요?"
            input={true}
            inputValue={answer1}
            onInputChange={(text) => setAnswer1(text)}
          />

          <Question34
            sQuestion="2. 영자 씨와 친구들이 지불해야 할 총 금액은 얼마인가요?"
            input={true}
            inputValue={answer2}
            onInputChange={(text) => setAnswer2(text)}
          />

          <Question34
            sQuestion="3. 영자 씨와 친구들이 20,000원을 지불했을 때 거스름돈은 얼마인가요?"
            input={true}
            inputValue={answer3}
            onInputChange={(text) => setAnswer3(text)}
          />
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={next}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Page4;
import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import { Image, StyleSheet, Text, View } from 'react-native';

const Page1 = ({ next, back }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textLeft}>🌻 오늘의 날짜를 적고 날씨에 동그라미 하세요.</Text>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={[styles.textRight]}>년</Text>
                <Text style={[styles.textRight]}>월</Text>
                <Text style={[styles.textRight]}>일</Text>
                <Text style={[styles.textRight]}>요일</Text>
                <Text style={[styles.textRight]}>날씨 ☀️ ☁️ ☂️ ☃️</Text>
              </View>
            </View>

            <View style={styles.body}>
              <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.textWithNoSpace}>다음은 </Text>
                  <Text style={[styles.textWithNoSpace, { color: 'red'}]}>세계 8대 건강식품과 효능</Text>
                  <Text style={styles.textWithNoSpace}>입니다.</Text>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 700 }}>소리 내어 읽어보세요.</Text>
              </View>

              <View style={styles.body}>
                <View style={[styles.border, { borderRadius: 10, width: 318, height: 480, alignSelf: 'center' }]}>
                  <View style={{ borderBottomWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 9, width: 315, height: 30, backgroundColor: '#b0dcc9', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>세계 8대 건강식품</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-broccoli.jpg')} style={{ width: 110, height: 80 }} />
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-blueberry.jpg')} style={{ width: 110, height: 80 }} />
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>1. <Text style={{fontSize: 11, fontWeight: 'bold'}}>브로콜리</Text>: 눈 피로 감소</Text>
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>2. <Text style={{fontSize: 11, fontWeight: 'bold'}}>블루베리</Text>: 백내장 예방</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-salmon.jpg')} style={{ width: 140, height: 79 }} />
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-oats.jpg')} style={{ width: 120, height: 79 }} />
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>3. <Text style={{fontSize: 11, fontWeight: 'bold'}}>연어</Text>: 동맥경화 예방</Text>
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>4. <Text style={{fontSize: 11, fontWeight: 'bold'}}>귀리</Text>: 고혈압 예방</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-garlic.jpg')} style={{ width: 110, height: 79 }} />
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-greentea.jpg')} style={{ width: 120, height: 79 }} />
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>5. <Text style={{fontSize: 11, fontWeight: 'bold'}}>마늘</Text>: 소화기능 향상</Text>
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Text style={{fontSize: 11}}>6. <Text style={{fontSize: 11, fontWeight: 'bold'}}>녹차</Text>: 위암 예방</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.tableLeft, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-spinach.jpg')} style={{ width: 130, height: 79 }} />
                    </View>
                    <View style={[styles.tableRight, { width: 157, height: 82, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                      <Image source={require('../../../assets/Page1-tomato.jpg')} style={{ width: 120, height: 79 }} />
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 157, height: 30, borderRightWidth: 1, alignItems: 'center', borderBottomLeftRadius: 10, justifyContent: 'center', backgroundColor: 'white' }}>
                      <Text style={{fontSize: 11}}>7. <Text style={{fontSize: 11, fontWeight: 'bold'}}>시금치</Text>: 변비 예방</Text>
                    </View>
                    <View style={{ width: 157, height: 30, alignItems: 'center', borderBottomRightRadius: 10, justifyContent: 'center', backgroundColor: 'white' }}>
                      <Text style={{fontSize: 11}}> <Text style={{fontSize: 11, fontWeight: 'bold'}}>토마토</Text>: 골다공증, 치매 예방</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            
            <View style={styles.footer}>
              <Text style={{ fontSize: 15 }}>🗓️</Text>
              <Text style={[styles.textWithNoSpaceWithUnderline, { color: 'red' }]}>세계 8대 건강식품과 효능</Text>
              <Text style={styles.textWithNoSpaceWithUnderline}>을 기억해주세요.</Text>
            </View>
          </View>
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={next}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'column'
  },
  textLeft: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: 700,
  },
  textRight: {
    alignSelf: 'flex-end',
    marginLeft: 20
  },
  body: {
    flex: 8,
  },
  footer: {
    marginTop: 70,
    alignItems:'center',
    flexDirection: 'row'
  },
  textWithNoSpace: {
    marginHorizontal: 0,
    fontSize: 17,
    fontWeight: 700,
  },
  textWithNoSpaceWithUnderline: {
    marginHorizontal: 0,
    textDecorationLine: 'underline'
  },
  row: {
    flexDirection: 'row'
  },
  border: {
    borderColor: 'black',
    borderWidth: 1,
  },
  tableLeft: {
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  tableRight: {
    borderBottomWidth: 1
  }
});

export default Page1;
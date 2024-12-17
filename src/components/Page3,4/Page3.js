import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Question34 from './Question34';

const Page3 = ({ next, back }) => {
  const handlePress = () => {
  };

  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question34
            mQuestion="버튼을 클릭하여 아래의 이미지와 똑같이 만들어보세요."
          />
          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image
              source={require('../../../assets/Page3-그림.png')}
              style={{ width: 310, height: 200 }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
            </View>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
            </View>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
            </View>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
            </View>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
            </View>
            <View style={styles.buttonRow}>
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
              <NumberButton label="" onPress={() => handlePress("")} />
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

const NumberButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 3,
  },
  button: {
    backgroundColor: '#749ee3',
    padding: 8,
    margin: 2,
    borderRadius: 1,
    width: 40,
    alignItems: 'center',
  },
});

export default Page3;
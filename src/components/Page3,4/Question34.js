import React from "react";
import { View } from 'react-native';
import styled from 'styled-components/native';

const QuestionText1 = styled.Text`
    font-size: 20px;
    font-weight: 700;
`;

const QuestionText2 = styled.Text`
    font-size: 13px;
    font-weight: 600;
`;

const QuestionText3 = styled.Text`
    font-size: 12px;
    font-weight: 600;
`;

const StyledInput = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
`;


const Question34 = (props) => {
    return (
        
        <View>
            <QuestionText1>{props.mQuestion}</QuestionText1>
            <QuestionText2>{props.text}</QuestionText2>
            <QuestionText3>{props.sQuestion}</QuestionText3>

            {props.input && (
                <StyledInput
                placeholder="답을 입력하세요."
                value={props.inputValue}
                onChangeText={props.onInputChange}
                />
            )}
        </View>
    );
};

export default Question34;
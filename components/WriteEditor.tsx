import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef(null);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        placeholder="당신의 오늘을 기록하세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
    </View>
  );
}

export default WriteEditor;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

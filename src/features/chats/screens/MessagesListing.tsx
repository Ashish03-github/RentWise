import React, { useCallback, useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Container } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';
import { scale, scaleVertical } from '@/theme/scale';

type MessageType = {
  id: string;
  name: string;
  message: string;
  messageId: string;
  timeStamp: string;
};

const initialData: MessageType[] = [
  {
    id: '1',
    name: 'Ashish',
    messageId: '1',
    message: 'Hi, John',
    timeStamp: '12:50 PM',
  },
  {
    id: '2',
    name: 'John',
    messageId: '2',
    message: 'Hello, Ashish',
    timeStamp: '12:52 PM',
  },
];

const MessagesListing = () => {
  const { Colors, Layout, Fonts, Spacing } = useTheme();
  const styles = stylesFn(Colors, Layout, Fonts, Spacing);

  const [messages, setMessages] = useState(initialData);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: MessageType = {
      id: '1',
      name: 'Ashish',
      messageId: Date.now().toString(),
      message: input,
      timeStamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const MessageBubble = ({
    isActiveUser,
    message,
  }: {
    isActiveUser: boolean;
    message: MessageType;
  }) => (
    <View
      style={
        isActiveUser
          ? styles.activeUserMessageBubble
          : styles.otherUserMessageBubble
      }
    >
      <Text
        style={
          isActiveUser
            ? styles.activeUserMessageText
            : styles.otherUserMessageText
        }
      >
        {message.message}
      </Text>
    </View>
  );

  const renderItem = useCallback(({ item }: { item: MessageType }) => {
    const isActiveUser = item.id === '1';
    return <MessageBubble isActiveUser={isActiveUser} message={item} />;
  }, []);

  return (
    <Container screenHeading="Messages">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.messageId}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
        />

        {/* Input Area */}
        <View style={styles.inputContainer}>
          {/* Optional attachment button
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity> */}

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            style={styles.input}
            multiline
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default MessagesListing;

const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    // activeUserMessageBubble: {
    //   alignSelf: 'flex-end',
    //   backgroundColor: '#4B7BE5',
    //   padding: 12,
    //   marginVertical: 4,
    //   borderRadius: 20,
    //   maxWidth: '80%',
    // },

    // activeUserMessageText: {
    //   color: 'white',
    //   fontSize: 14,
    // },

    // otherUserMessageBubble: {
    //   alignSelf: 'flex-start',
    //   backgroundColor: '#E5E5EA',
    //   padding: 12,
    //   marginVertical: 4,
    //   borderRadius: 20,
    //   maxWidth: '80%',
    // },

    // otherUserMessageText: {
    //   color: 'black',
    //   fontSize: 14,
    // },

    timeText: {
      ...Fonts.sz7,
      ...Fonts.font400,
      ...Layout.absolute,
      ...Spacing.bottom1,
      ...Spacing.right2,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      ...Spacing.p2,
      ...Spacing.py5,
      marginHorizontal: scale(-16),
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: 'white',
    },

    input: {
      flex: 1,
      minHeight: scaleVertical(44),
      backgroundColor: '#f1f1f1',
      // backgroundColor: 'red',
      ...Fonts.font500,
      ...Fonts.sz11,
      ...Layout.roundedXl,
      ...Spacing.px3,
      ...Spacing.py2,
      ...Spacing.mx2,
    },

    sendButton: {
      ...Spacing.px4,
      minHeight: scaleVertical(44),
      ...Layout.center,
      ...Colors.primary,
      ...Layout.roundedXl,
    },

    sendText: {
      ...Fonts.sz11,
      ...Fonts.font600,
      ...Colors.textWhite,
    },

    iconButton: {
      ...Spacing.p2,
      // backgroundColor: 'red',
    },

    iconText: {
      ...Fonts.font500,
      ...Fonts.sz16,
    },

    messagesContainer: { flex: 85, backgroundColor: 'red' },
    activeUserMessageBubble: {
      maxWidth: '85%',
      ...Spacing.px4,
      ...Spacing.py3,
      ...Spacing.my2,
      ...Colors.primary,
      ...Layout.selfEnd,
      ...Layout.roundedXl,
    },
    activeUserMessageText: {
      ...Fonts.font500,
      ...Fonts.sz11,
      ...Colors.textWhite,
    },
    otherUserMessageBubble: {
      maxWidth: '85%',
      ...Spacing.px6,
      ...Spacing.py4,
      ...Spacing.my2,
      ...Colors.white,
      ...Layout.selfStart,
      ...Layout.roundedXl,
    },
    otherUserMessageText: {
      ...Fonts.font500,
      ...Fonts.sz11,
      ...Colors.textBlack,
    },
  });

import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import useTheme from '../hooks/useTheme';
import { normalizeFonts } from '@/theme/scale';

const AppCalendar = () => {
  const { Colors, Fonts } = useTheme();
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      enableSwipeMonths
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          selectedColor: Colors.primaryPure,
          selectedTextColor: Colors.pureWhite,
        },
      }}
      theme={{
        calendarBackground: Colors.pureWhite,
        textDayFontFamily: Fonts.font500.fontFamily,
        textDayFontSize: normalizeFonts(10),

        textDayHeaderFontFamily: Fonts.font600.fontFamily,
        textDayHeaderFontSize: normalizeFonts(10),
        textDayStyle: {
          ...Fonts.sz10,
          ...Fonts.font500,
          ...Colors.textBlack,
        },

        textMonthFontFamily: Fonts.font500.fontFamily,
        textMonthFontSize: normalizeFonts(14),
        monthTextColor: Colors.primaryPure,

        todayTextColor: Colors.primaryPure,
        selectedDayBackgroundColor: Colors.primaryPure,
      }}
    />
  );
};

export default AppCalendar;

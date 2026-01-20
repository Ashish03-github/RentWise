import React from 'react';
import { Calendar } from 'react-native-calendars';
import useTheme from '../hooks/useTheme';
import { normalizeFonts } from '@/theme/scale';

type Props = {
  selectedDate?: string;
  onDateSelect: (date: string) => void;
  minDate?: string;
  maxDate?: string;
};

const AppCalendar = ({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
}: Props) => {
  const { Colors, Fonts } = useTheme();

  return (
    <Calendar
      enableSwipeMonths
      minDate={minDate}
      maxDate={maxDate}
      onDayPress={day => onDateSelect(day.dateString)}
      markedDates={{
        [selectedDate ?? '']: {
          selected: true,
          selectedColor: Colors.primaryPure,
          selectedTextColor: Colors.pureWhite,
        },
      }}
      theme={{
        calendarBackground: Colors.pureWhite,
        textDayFontFamily: Fonts.font500.fontFamily,
        textDayFontSize: normalizeFonts(10),
        textMonthFontFamily: Fonts.font600.fontFamily,
        textMonthFontSize: normalizeFonts(14),
        monthTextColor: Colors.primaryPure,
      }}
    />
  );
};

export default React.memo(AppCalendar);

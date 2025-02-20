import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  View,
} from 'react-native';
import { theme } from '../theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
  lastUpdatedTimestamp: number;
};

export function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'It will be gone!',
      [
        {
          text: 'Yes',
          onPress: () => onDelete(),
          style: 'destructive',
        },
        { text: 'No', onPress: () => console.log('Canceled'), style: 'cancel' },
      ],
    );
  };

  return (
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? 'check' : 'circle'}
          color={isCompleted ? theme.colorGrey : theme.colorCerulean}
          size={24}
        />
        <Text
          numberOfLines={1}
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    color: theme.colorCerulean,
    fontWeight: '200',
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
});

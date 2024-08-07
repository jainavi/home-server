import { TextInput } from "react-native";

interface IProp {
  customStyles: string
  value?: string;
  placeholder?: string;
  editable?: boolean;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
}

export default ({
  placeholder,
  customStyles,
  placeholderTextColor,
  editable = true,
  onChangeText,
  value,
}: IProp) => {
  return (
    <TextInput
      className={`border-2 border-gry focus:border-wht rounded-lg p-4 text-wht ${customStyles}`}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={(value) => onChangeText && onChangeText(value)}
      value={value}
      editable={editable}
    />
  );
};

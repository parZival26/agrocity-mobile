import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";


interface DropDownPickerProps {
    label: string;
    data: Array<{ key: string; value: string }>;
    placeholder: string;
    setSelected: (value: string) => void;
    value: { key: string; value: string };
    style?: object;
    labelStyle?: object;
    boxStyle?: object;
    dropdownStyle?: object;
}

export const DropDownPicker = (props: DropDownPickerProps) => {
    const { label, data, placeholder, setSelected, value, style, labelStyle, boxStyle, dropdownStyle } = props;
    return (
        <View style={style}>
            <Text style={labelStyle}>{label}</Text>
            <SelectList
                data={data}
                setSelected={setSelected}
                maxHeight={150}
                placeholder={placeholder}
                boxStyles={{ ...styles.boxStyles, ...boxStyle }}
                dropdownStyles={{ ...styles.dropdownStyles, ...dropdownStyle }}
                defaultOption={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxStyles: {
        marginVertical: 5,
        backgroundColor: '#fff',
        width: '80%',
        borderColor: '#fff',
        borderRadius: 30,

    },

    dropdownStyles: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderColor: '#fff',
        width: 300,
    },
})
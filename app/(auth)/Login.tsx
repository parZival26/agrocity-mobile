import { login } from '@/services/AuthService';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Login = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        let errors = {
            username: '',
            password: '',
        };
    
        if (!username) {
            errors.username = 'El usuario es requerido';
        }
    
        if (!password) {
            errors.password = 'La contraseña es requerida';
        }
    
        setErrors(errors);
        return Object.values(errors).every((error) => error === '');
    }

    const submitForm = () => {
        if (validateForm()) {
            const result = login({ username, password });
            result.then((response: any) => {
                if (response.error) {
                    alert(response.error);
                } else {                    
                    navigation.navigate('(main)');
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.containerinput}>
                <Text style={styles.title}>AgroCity</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Usuario"
                    placeholderTextColor={'grey'}
                    style={styles.input}
                />
                {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                    placeholderTextColor={'grey'}
                    secureTextEntry
                    style={styles.input}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                <TouchableOpacity
                    onPress={submitForm}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    containerinput: {
        backgroundColor: '#ffffff',
        width: '85%',
        height: '55%',
        padding: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'stretch',
        elevation: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular', 
        marginTop: 0,
        marginBottom: '15%',
        textAlign: 'center',  
        color: '#4FAD22',
    },
    input: {
        padding: 15,
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#4FAD22',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Login;

import { login } from '@/services/AuthService';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'

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
            result.then((response:any) => {
                if (response.error) {
                    alert(response.error);
                } else {                    
                    navigation.navigate('(main)'); // Redirigir a las pestañas
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }
    

    return (
        <SafeAreaView>
            <Text>Login</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            {errors.username && <Text>{errors.username}</Text>}
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            {errors.password && <Text>{errors.password}</Text>}

            <TouchableOpacity
                onPress={submitForm}
            >
                <Text>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Login

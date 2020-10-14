import { Link } from 'expo-next-react-navigation';
import React from 'react';
import { View } from 'react-native';

export default function Header() {
    return (
        <View>
            <Link style={{ color: 'green', fontSize: 20 }} routeName="index">
                Initial App
            </Link>
            <Link style={{ color: 'green', fontSize: 20 }} routeName="first">
                Home
            </Link>
            <Link style={{ color: 'green', fontSize: 20 }} routeName="Alternate">
                Alternate
            </Link>
            <Link style={{ color: 'green', fontSize: 20 }} routeName="Test">
                Test
            </Link>
        </View>
    )
}

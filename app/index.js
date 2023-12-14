import 'react-native-gesture-handler';
import { Redirect } from "expo-router";
import { useFonts } from 'expo-font';
import 'core-js/full/symbol/async-iterator';

export default function Index() {
    const [loaded] = useFonts({
        'Nunito_Sans_regular': require('../assets/fonts/Nunito_Sans/static/NunitoSans_10pt-Regular.ttf'),
        'Nunito_Sans_bold': require('../assets/fonts/Nunito_Sans/static/NunitoSans_10pt-Bold.ttf'),
        'Nunito_Sans_medium': require('../assets/fonts/Nunito_Sans/static/NunitoSans_10pt-Medium.ttf'),
        'Nunito_Sans_light': require('../assets/fonts/Nunito_Sans/static/NunitoSans_10pt-Light.ttf'),
        'Nunito_Sans_black': require('../assets/fonts/Nunito_Sans/static/NunitoSans_10pt-Black.ttf'),
        'SFCompact': require('../assets/fonts/SFCompact/SFCompact.ttf'),
        'SFCompactItalic': require('../assets/fonts/SFCompact/SFCompactItalic.ttf'),
        'SFCompactRounded': require('../assets/fonts/SFCompact/SFCompactRounded.ttf'),
        'NewYork': require('../assets/fonts/NewYork/NewYork.ttf'),
        'Comfortaa': require('../assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),

    });

    if (!loaded) {
        console.log("here");
        return null;
    }

    return <Redirect href="/screens/home" />;
}
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
    });

    if (!loaded) {
        console.log("here");
        return null;
    }

    return <Redirect href="/screens/me" />;
}
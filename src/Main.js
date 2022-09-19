import 'react-native-gesture-handler'; //Needed for stack navigator


import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import Home from './screens/home/Home';
import Settings from './screens/settings/Settings';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Devices from './screens/devices/Devices';
import { navigationRef, navigate } from './services/NavigationService';

import { Menu, Divider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useTranslation } from 'react-i18next';

const screenOptions = {
    gestureEnabled: true,
};

const MainStack = createStackNavigator();

const HeaderMenu = () => {
    const { t } = useTranslation();

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<TouchableOpacity style={{ marginRight: 15 }} onPress={() => { openMenu() }}><Icon name="cog" size={30} color="#000" /></TouchableOpacity>}>
            <Menu.Item onPress={() => { navigate("Devices"); closeMenu(); }} title={t("menu_devices")} />
            <Divider />
            <Menu.Item onPress={() => { navigate("Settings"); closeMenu(); }} title={t("menu_settings")} />
        </Menu>
    );
}

const Main = () => {
    const { t } = useTranslation();

    return (
        <NavigationContainer ref={navigationRef}>
            <View style={{ height: "100%" }}>
                <MainStack.Navigator screenOptions={screenOptions} initialRouteName={'Home'}>
                    <MainStack.Screen name="Home" component={Home}
                        options={{
                            title: t("menu_home"),
                            headerRight: () => (
                                <HeaderMenu /> //Drop down from cog
                            )
                        }} />
                    <MainStack.Screen name="Settings" options={{ title: t("menu_settings") }} component={Settings} />
                    <MainStack.Screen name="Devices" options={{ title: t("menu_devices") }} component={Devices} />
                </MainStack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default Main;
